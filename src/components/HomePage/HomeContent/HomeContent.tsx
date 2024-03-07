import * as P from "./HomeContent.parts";
import ProjectSection from "../ProjectsSection/ProjectsSection";
import { ProjectPanelData } from "../../../data/ProjectPanelData";
import AboutSection from "../AboutSection/AboutSection";

export default function HomeContent() {
    return (
        <P.Wrapper>
            <ProjectSection source={ProjectPanelData.branding} />
            <ProjectSection source={ProjectPanelData.branding} />
            {/* <ProjectSection /> */}
            <AboutSection />
        </P.Wrapper>
    );
}
