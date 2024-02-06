import * as P from "./HomeContent.parts";
import ProjectSection from "../ProjectsSection/ProjectsSection";

export default function Content() {
    return (
        <P.Wrapper>
            <ProjectSection />
            <ProjectSection />
            <ProjectSection />
        </P.Wrapper>
    );
}
