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
            {hasHeader && <h3 className="text-2xl font-bold leading-tight [&_p]:text-m [&_p]:s:text-2xl">{header}</h3>}

            {hasDescription && (
                <div className="flex flex-col gap-4 [&_p]:text-ms [&_p]:s:text-m">
                    <TinaMarkdown content={description} />
                </div>
            )}
        </div>
    );
}
