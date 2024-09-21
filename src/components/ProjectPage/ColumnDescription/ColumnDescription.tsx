import { TinaMarkdown } from "tinacms/dist/rich-text";

import { descriptionPositionMap } from "../Feature.types";
import { ColumnDescriptionProps } from "./ColumnDescription.types";

export function ColumnDescription({ header, description, descriptionPosition }: ColumnDescriptionProps) {
    const order = descriptionPositionMap[descriptionPosition];
    const hasHeader = !!header;
    const hasDescription = description && description.children && description.children.length > 0;
    const orderUtility = order === 1 ? "order-1" : "-order-1";

    return (
        <div className={`${orderUtility} flex flex-col gap-10`}>
            {hasHeader && <h3 className="text-2xl font-bold leading-tight">{header}</h3>}

            {hasDescription && (
                <div className="mt-16 flex flex-col">
                    <TinaMarkdown content={description} />
                </div>
            )}
        </div>
    );
}
