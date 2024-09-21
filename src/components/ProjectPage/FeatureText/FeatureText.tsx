import { TinaMarkdown } from "tinacms/dist/rich-text";

import { hasProperty } from "$utils/typeGuards";

import { FeatureTextProps } from "./FeatureText.types";

function FeatureText({ featureData }: FeatureTextProps) {
    const hasHeader = hasProperty(featureData, "header");

    return (
        <section className="mb-12">
            {hasHeader && <h2>{featureData.header}</h2>}
            <TinaMarkdown content={featureData.description} />
        </section>
    );
}

export default FeatureText;
