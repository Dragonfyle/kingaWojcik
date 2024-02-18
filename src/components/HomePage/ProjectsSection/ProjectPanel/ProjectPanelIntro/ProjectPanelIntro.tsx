import * as P from "./ProjectPanelIntro.parts";

interface ProjectPanelIntroProps {
    text: string;
}

export default function ProjectPanelIntro({ text }: ProjectPanelIntroProps) {
    return (
        <P.IntroWrapper>
            <P.StyledP size="xl">{text}</P.StyledP>
        </P.IntroWrapper>
    );
}
