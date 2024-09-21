import { TinaMarkdown } from "tinacms/dist/rich-text";

import { FeatureSliceTextProps } from "./FeatureSliceText.types";

export default function FeatureSliceText({ header, description }: FeatureSliceTextProps) {
    const hasHeader = !!header;

    return (
        <div className="flex flex-col items-start">
            {hasHeader && <h2 className="text-2xl font-bold leading-snug">{header}</h2>}

            <TinaMarkdown content={description} />
        </div>
    );
}
