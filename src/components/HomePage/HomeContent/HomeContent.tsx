import * as P from "./HomeContent.parts";
import ProjectSection from "../ProjectsSection/ProjectsSection";
import { ProjectPanelData } from "../../../data/ProjectPanelData";

export default function HomeContent() {
    return (
        <P.Wrapper>
            <ProjectSection source={ProjectPanelData.branding} />
            {/* <ProjectSection /> */}
            {/* <ProjectSection /> */}
        </P.Wrapper>
    );
}
