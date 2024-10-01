import { TinaMarkdown } from "tinacms/dist/rich-text";

import { hasProperty } from "$utils/typeGuards";

import { FeatureTextProps } from "./FeatureText.types";

function FeatureText({ featureData }: FeatureTextProps) {
    const hasHeader = hasProperty(featureData, "header");

    return (
        <section className="mb-12 flex flex-col gap-8">
            {hasHeader && <h2 className="text-2xl font-bold leading-snug [&_p]:text-m [&_p]:s:text-2xl">{featureData.header}</h2>}

            <div className="flex flex-col gap-4 [&_p]:text-ms [&_p]:s:text-m">
                <TinaMarkdown content={featureData.description} />
            </div>
        </section>
    );
}

export default FeatureText;
