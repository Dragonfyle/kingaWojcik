import { TinaMarkdown } from "tinacms/dist/rich-text";
import { ProjectPanelIntroProps } from "./ProjectPanelIntro.types";

export default function ProjectPanelIntro({ text }: ProjectPanelIntroProps) {
    return (
        <div className="mr-50px my-30px s:min-w-project-panel-item flex w-11/12 snap-start flex-col s:mb-0 l:mt-0">
            <TinaMarkdown content={text} />
        </div>
    );
}
