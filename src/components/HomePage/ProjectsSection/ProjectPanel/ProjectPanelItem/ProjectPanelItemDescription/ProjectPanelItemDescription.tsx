import StyledTinaMarkup from "$components/generics/StyledTinaMarkup";

import { ProjectPanelItemDescriptionProps } from "./ProjectPanelItemDescription.types";

export default function ProjectPanelItemDescription({ title, description }: ProjectPanelItemDescriptionProps) {
    return (
        <div className="flex flex-col items-start gap-2 p-5">
            <h3 className="text-2xl font-bold">{title}</h3>

            <div className="flex flex-col gap-4">
                <StyledTinaMarkup content={description} />
            </div>
        </div>
    );
}
