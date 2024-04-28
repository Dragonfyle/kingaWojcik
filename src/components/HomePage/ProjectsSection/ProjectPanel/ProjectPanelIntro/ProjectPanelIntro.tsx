import * as P from "./ProjectPanelIntro.parts";
import { ProjectPanelIntroProps } from "./ProjectPanelIntro.types";

export default function ProjectPanelIntro({ text }: ProjectPanelIntroProps) {
    return (
        <P.IntroWrapper>
            <P.StyledP size="xl">{text}</P.StyledP>
        </P.IntroWrapper>
    );
}
