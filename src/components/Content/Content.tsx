import * as P from "./Content.parts";
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
