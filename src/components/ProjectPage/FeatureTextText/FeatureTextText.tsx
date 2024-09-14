import Flexbox from "$generics/Flexbox/";
import Text from "$generics/Text/";
import { hasProperty } from "$utils/typeGuards";

import { ColumnWidth, getColumnsWidth } from "../Feature.types";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { IllustrationsProjectSectionsTextText } from "tina/__generated__/types";
import * as P from "./FeatureTextText.parts";

interface FeatureTextTextProps {
    featureData: IllustrationsProjectSectionsTextText;
}

export default function FeatureTextText({ featureData }: FeatureTextTextProps) {
    const leftColumnWidth = Number(featureData.leftColumnWidth) as ColumnWidth;
    const { leftWidth, rightWidth } = getColumnsWidth(leftColumnWidth);
    const hasHeaderLeft = hasProperty(featureData, "headerLeft");
    const hasHeaderRight = hasProperty(featureData, "headerRight");

    return (
        <P.FeatureWrapper $leftWidth={leftWidth} $rightWidth={rightWidth}>
            <Flexbox $padding="20px 40px" $marginT="50px" $direction="column" $alignC="flex-start">
                {hasHeaderLeft && (
                    <Text tag="h1" size="2xl" bold lineHeight={1.4}>
                        {featureData.headerLeft}
                    </Text>
                )}

                <Flexbox $marginB="60px" $marginT="40px">
                    <TinaMarkdown content={featureData.descriptionLeft} />
                </Flexbox>
            </Flexbox>
            <Flexbox $padding="20px 40px" $direction="column" $alignC="flex-start">
                {hasHeaderRight && (
                    <Text tag="h1" size="2xl" bold lineHeight={1.4}>
                        {featureData.headerRight}
                    </Text>
                )}

                <Flexbox $marginB="60px" $marginT="40px">
                    <Text>{featureData.descriptionRight}</Text>
                </Flexbox>
            </Flexbox>
        </P.FeatureWrapper>
    );
}
