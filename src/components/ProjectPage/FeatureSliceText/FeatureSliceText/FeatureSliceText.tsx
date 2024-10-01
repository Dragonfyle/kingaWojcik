import { TinaMarkdown } from "tinacms/dist/rich-text";

import { FeatureSliceTextProps } from "./FeatureSliceText.types";

export default function FeatureSliceText({ header, description }: FeatureSliceTextProps) {
    const hasHeader = !!header;

    return (
        <div className="flex flex-col items-start gap-8">
            {hasHeader && <h2 className="text-2xl font-bold leading-snug [&_p]:text-m [&_p]:s:text-2xl">{header}</h2>}

            <div className="flex flex-col gap-4 [&_p]:text-ms [&_p]:s:text-m">
                <TinaMarkdown content={description} />
            </div>
        </div>
    );
}
