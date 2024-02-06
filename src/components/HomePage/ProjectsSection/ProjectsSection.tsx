import * as P from "./ProjectsSections.parts";
import NavButtons from "../../HomePage/ProjectsSection/NavButtons/NavButtons";
import ProjectPanel from "./ProjectPanel/ProjectPanel";

export default function PorjectsSection() {
    return (
        <P.StyledSection>
            <P.HeaderWrapper>
                <P.StyledHeader>
                    <P.StyledH2>Projekty</P.StyledH2>
                </P.StyledHeader>
                <NavButtons />
            </P.HeaderWrapper>
            <ProjectPanel />
        </P.StyledSection>
    );
}
