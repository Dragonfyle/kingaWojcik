import * as P from "./ProjectsSections.parts";
import { CONFIG } from "../../../constants/config";
import NavButtons from "../../HomePage/ProjectsSection/NavButtons/NavButtons";
import ProjectPanel from "./ProjectPanel/ProjectPanel";
import { useRef } from "react";

export default function ProjectSection() {
    const ProjectPanelRef = useRef<HTMLDivElement>(null);

    function handleNextProject(element: HTMLDivElement | null) {
        if (!element) {
            return;
        }
        element.scrollLeft += CONFIG.PROJECT_PANEL.THUMBNAIL_WIDTH;
    }
    function handlePreviousProject(element: HTMLDivElement | null) {
        if (!element) {
            return;
        }
        element.scrollLeft -= CONFIG.PROJECT_PANEL.THUMBNAIL_WIDTH;
    }

    return (
        <P.StyledSection>
            <P.HeaderWrapper>
                <P.StyledHeader>
                    <P.StyledH2>Projekty</P.StyledH2>
                </P.StyledHeader>
                <NavButtons
                    onNextProject={() => handleNextProject(ProjectPanelRef.current)}
                    onPreviousProject={() => handlePreviousProject(ProjectPanelRef.current)}
                />
            </P.HeaderWrapper>
            <ProjectPanel ref={ProjectPanelRef} />
        </P.StyledSection>
    );
}
