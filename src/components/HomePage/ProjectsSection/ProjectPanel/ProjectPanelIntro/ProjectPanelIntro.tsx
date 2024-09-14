import { TinaMarkdown } from "tinacms/dist/rich-text";
import * as P from "./ProjectPanelIntro.parts";
import { ProjectPanelIntroProps } from "./ProjectPanelIntro.types";

export default function ProjectPanelIntro({ text }: ProjectPanelIntroProps) {
    return (
        <P.IntroWrapper>
            <TinaMarkdown content={text} />
        </P.IntroWrapper>
    );
}
