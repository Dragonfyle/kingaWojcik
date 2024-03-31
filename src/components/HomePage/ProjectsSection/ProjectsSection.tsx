import * as P from "./ProjectsSections.parts";
import { CONFIG } from "../../../constants/config";
import NavButtons from "../../HomePage/ProjectsSection/NavButtons/NavButtons";
import ProjectPanel from "./ProjectPanel/ProjectPanel";
import { useRef } from "react";
import ProjectPanelIntro from "./ProjectPanel/ProjectPanelIntro/ProjectPanelIntro";
import { useDeviceContext } from "../contexts/DeviceContext/DeviceContext";
import Flexbox from "../../generics/Flexbox/Flexbox";
import Text from "../../generics/Text/Text";
import { ProjectPanelDataSection } from "../../../data/projectPanelData";
import { createPortal } from "react-dom";

interface ProjectSectionProps {
    id: string;
    source: ProjectPanelDataSection;
}

export default function ProjectSection({ id, source }: ProjectSectionProps) {
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
        <P.StyledSection id={id}>
            <Flexbox $wrap="nowrap">
                <Flexbox>
                    <P.StyledHeader>
                        <Text bold size="4xl">
                            {source.header}
                        </Text>
                    </P.StyledHeader>
                </Flexbox>
                {!isMobile && (
                    <Flexbox $wrap="nowrap" $justify="center">
                        <NavButtons
                            onNextProject={() => handleNextProject(ProjectPanelRef.current)}
                            onPreviousProject={() => handlePreviousProject(ProjectPanelRef.current)}
                        />
                    </Flexbox>
                )}
            </Flexbox>
            {isMobile && <ProjectPanelIntro text={source.intro} />}

            {isMobile &&
                ProjectPanelRef.current &&
                createPortal(
                    <NavButtons
                        onNextProject={() => handleNextProject(ProjectPanelRef.current)}
                        onPreviousProject={() => handlePreviousProject(ProjectPanelRef.current)}
                    />,
                    ProjectPanelRef.current
                )}

            <ProjectPanel
                ref={ProjectPanelRef}
                source={source}
                onNextProject={() => handleNextProject(ProjectPanelRef.current)}
                onPreviousProject={() => handlePreviousProject(ProjectPanelRef.current)}></ProjectPanel>
        </P.StyledSection>
    );
}
