import { TinaMarkdown } from "tinacms/dist/rich-text";
import { ProjectPanelIntroProps } from "./ProjectPanelIntro.types";

export default function ProjectPanelIntro({ text }: ProjectPanelIntroProps) {
    return (
        <div className="mr-50px my-30px flex w-11/12 snap-start flex-col s:mb-0 s:min-w-project-panel-item l:mt-0">
            <div className="flex flex-col gap-6 [&_*]:text-ms [&_*]:s:text-m">
                <TinaMarkdown
                    components={{
                        bold: (props) => <span className="text-orange-500">{props?.children}</span>,
                    }}
                    content={text}
                />
            </div>
        </div>
    );
}
