import * as P from "./ProjectsSections.parts";
import { CONFIG } from "../../../constants/config";
import NavButtons from "../../HomePage/ProjectsSection/NavButtons/NavButtons";
import ProjectPanel from "./ProjectPanel/ProjectPanel";
import { useRef } from "react";
import ProjectPanelIntro from "./ProjectPanel/ProjectPanelIntro/ProjectPanelIntro";
import { useDeviceContext } from "../contexts/DeviceContext/DeviceContext";
import Flexbox from "../../generics/Flexbox/Flexbox";

export default function ProjectSection() {
    const ProjectPanelRef = useRef<HTMLDivElement>(null);
    const { isMobile } = useDeviceContext();

    function handleNextProject(element: HTMLDivElement | null) {
        if (!element) {
            return;
        }
        element.scrollBy({ left: CONFIG.PROJECT_PANEL.THUMBNAIL_WIDTH, behavior: "smooth" });
    }
    function handlePreviousProject(element: HTMLDivElement | null) {
        if (!element) {
            return;
        }
        element.scrollBy({ left: -CONFIG.PROJECT_PANEL.THUMBNAIL_WIDTH, behavior: "smooth" });
    }

    return (
        <P.StyledSection>
            <Flexbox>
                <P.StyledHeader>
                    <P.StyledH2>Projekty</P.StyledH2>
                </P.StyledHeader>
                <NavButtons
                    onNextProject={() => handleNextProject(ProjectPanelRef.current)}
                    onPreviousProject={() => handlePreviousProject(ProjectPanelRef.current)}
                />
            </Flexbox>
            {isMobile && <ProjectPanelIntro />}
            <ProjectPanel ref={ProjectPanelRef} />
        </P.StyledSection>
    );
}
