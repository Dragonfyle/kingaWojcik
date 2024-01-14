import * as P from "./ProjectsSections.parts";
import NavButtons from "../NavButtons/NavButtons";
import ImagePanel from "../ImagePanel/ImagePanel";

export default function PorjectsSection() {
  return (
    <P.StyledSection>
      <P.HeaderWrapper>
        <P.StyledHeader>
          <P.StyledH1>Projekty</P.StyledH1>
        </P.StyledHeader>
        <NavButtons />
      </P.HeaderWrapper>
      <ImagePanel />
    </P.StyledSection>
  );
}
