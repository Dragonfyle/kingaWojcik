import * as P from "./ProjectsSections.parts";
import { CONFIG } from "../../../constants/config";
import NavButtons from "../../HomePage/ProjectsSection/NavButtons/NavButtons";
import ProjectPanel from "./ProjectPanel/ProjectPanel";
import { useRef } from "react";
import ProjectPanelIntro from "./ProjectPanel/ProjectPanelIntro/ProjectPanelIntro";
import { useDeviceContext } from "../contexts/DeviceContext/DeviceContext";
import Flexbox from "../../generics/Flexbox/Flexbox";
import Text from "../../generics/Text/Text";
import { ProjectPanelDataSection } from "../../../data/ProjectPanelData";

interface ProjectSectionProps {
    source: ProjectPanelDataSection;
}

export default function ProjectSection({ source }: ProjectSectionProps) {
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
                    <Text bold size="4xl">
                        {source.header}
                    </Text>
                </P.StyledHeader>
                <NavButtons
                    onNextProject={() => handleNextProject(ProjectPanelRef.current)}
                    onPreviousProject={() => handlePreviousProject(ProjectPanelRef.current)}
                />
            </Flexbox>
            {isMobile && <ProjectPanelIntro text={source.intro} />}
            <ProjectPanel ref={ProjectPanelRef} source={source} />
        </P.StyledSection>
    );
}
