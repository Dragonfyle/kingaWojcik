import * as P from "./HomeContent.parts";
import PorjectsSection from "../ProjectsSection/ProjectsSection";

export default function Content() {
    return (
        <P.Wrapper>
            <PorjectsSection />
            <PorjectsSection />
            <PorjectsSection />
        </P.Wrapper>
    );
}
