import Flexbox from "$generics/Flexbox/";
import Text from "$generics/Text/";

import { ColumnWidth, getColumnsWidth } from "../Feature.types";
import { IllustrationsProjectSectionsTextImage } from "tina/__generated__/types";
import { hasProperty } from "$utils/typeGuards";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import * as P from "./FeatureTextImage.parts";

interface FeatureTextImageProps {
    featureData: IllustrationsProjectSectionsTextImage;
}

export default function FeatureTextImage({ featureData }: FeatureTextImageProps) {
    const leftColumnWidth = Number(featureData.leftColumnWidth) as ColumnWidth;
    const { leftWidth, rightWidth } = getColumnsWidth(leftColumnWidth);
    const hasHeader = hasProperty(featureData, "header");

    return (
        <P.FeatureWrapper $leftWidth={leftWidth} $rightWidth={rightWidth}>
            <P.StyledFlexbox $padding="20px 40px" $marginT="50px" $direction="column">
                {hasHeader && (
                    <Text tag="h1" size="2xl" bold lineHeight={1.4}>
                        {featureData.header}
                    </Text>
                )}

                <Flexbox $marginB="60px">
                    <TinaMarkdown content={featureData.description} />
                </Flexbox>
            </P.StyledFlexbox>
            <Flexbox $wrap="nowrap" $direction="column">
                <img src={featureData.image} alt={featureData.header || "Feature image"} />
            </Flexbox>
        </P.FeatureWrapper>
    );
}
