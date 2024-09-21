import { TinaMarkdown } from "tinacms/dist/rich-text";
import { ProjectPanelItemDescriptionProps } from "./ProjectPanelItemDescription.types";

export default function ProjectPanelItemDescription({ title, description }: ProjectPanelItemDescriptionProps) {
    return (
        <div className="flex flex-col items-start gap-2 p-5">
            <h3 className="text-2xl font-bold">{title}</h3>
            <TinaMarkdown content={description} />
        </div>
    );
}
