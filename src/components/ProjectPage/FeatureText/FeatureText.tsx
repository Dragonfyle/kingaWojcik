import Text from "$components/generics/Text/Text";
import { hasProperty } from "$utils/typeGuards";
import { IllustrationsProjectSectionsText } from "tina/__generated__/types";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import * as P from "./FeatureText.parts";

interface FeatureTextProps {
    featureData: IllustrationsProjectSectionsText;
}

function FeatureText({ featureData }: FeatureTextProps) {
    const hasHeader = hasProperty(featureData, "header");
    console.log(featureData);

    return (
        <P.FeatureWrapper>
            {hasHeader && <Text tag="h1">{featureData.header}</Text>}
            <TinaMarkdown content={featureData.description} />
        </P.FeatureWrapper>
    );
}

export default FeatureText;
