import * as P from "./HomeContent.parts";
import ProjectSection from "../ProjectsSection/ProjectsSection";
import { ProjectPanelData } from "../../../data/projectPanelData";
// import AboutSection from "../AboutSection/AboutSection";
import ScrollToAnchor from "../../../utils/scrollToAnchor";
// import { aboutSectionData } from "../../../data/aboutSectionData";

export default function HomeContent() {
    return (
        <P.Wrapper>
            <ScrollToAnchor />
            <ProjectSection id="brandingowe" source={ProjectPanelData.branding} />
            <ProjectSection id="wydawnicze" source={ProjectPanelData.editorial} />
            {/* <ProjectSection /> */}
            {/* <AboutSection source={aboutSectionData} /> */}
        </P.Wrapper>
    );
}
