import * as P from "./HomeContent.parts";
import ProjectSection from "../ProjectsSection/ProjectsSection";
import { ProjectPanelData } from "../../../data/projectPanelData";
import ScrollToAnchor from "../../../utils/scrollToAnchor";

export default function HomeContent() {
    return (
        <P.Wrapper>
            <ScrollToAnchor />
            <ProjectSection id="brandingowe" source={ProjectPanelData.branding} />
            <ProjectSection id="wydawnicze" source={ProjectPanelData.editorial} />
        </P.Wrapper>
    );
}
