import Flexbox from "$generics/Flexbox/";
import Text from "$generics/Text/";

import { ColumnWidth, getColumnsWidth } from "../Feature.types";
import * as P from "./FeatureImageText.parts";
import { IllustrationsProjectSectionsImageText } from "tina/__generated__/types";

interface FeatureImageTextProps {
    featureData: IllustrationsProjectSectionsImageText;
}

export default function FeatureImageText({ featureData }: FeatureImageTextProps) {
    const leftColumnWidth = Number(featureData.leftColumnWidth) as ColumnWidth;
    const { leftWidth, rightWidth } = getColumnsWidth(leftColumnWidth);
    const hasHeader = "header" in featureData;

    return (
        <P.FeatureWrapper $leftWidth={leftWidth} $rightWidth={rightWidth}>
            <Flexbox $wrap="nowrap" $direction="column">
                <img src={featureData.image} />
            </Flexbox>
            <P.StyledFlexbox $padding="20px 40px" $direction="column">
                {hasHeader && (
                    <Text tag="h1" size="2xl" bold lineHeight={1.4}>
                        {featureData.header}
                    </Text>
                )}

                <Flexbox $marginB="60px">
                    <Text>{featureData.description}</Text>
                </Flexbox>
            </P.StyledFlexbox>
        </P.FeatureWrapper>
    );
}
