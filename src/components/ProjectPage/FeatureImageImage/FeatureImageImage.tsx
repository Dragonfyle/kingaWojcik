import Flexbox from "$generics/Flexbox/";

import { ColumnWidth, getColumnsWidth } from "../Feature.types";
import { ColumnDescription } from "../ColumnDescription/";
import * as P from "./FeatureImageImage.parts";
import { IllustrationsProjectSectionsImageImage } from "tina/__generated__/types";

interface FeatureImageImageProps {
    featureData: IllustrationsProjectSectionsImageImage;
}

export default function FeatureImageImage({ featureData }: FeatureImageImageProps) {
    const hasLeftHeader = "headerLeft" in featureData;
    const hasRightHeader = "headerRight" in featureData;
    const hasLeftDescription = "optionalDescriptionLeft" in featureData;
    const hasRightDescription = "optionalDescriptionRight" in featureData;
    const leftColumnWidth = Number(featureData.leftColumnWidth) as ColumnWidth;

    const { leftWidth, rightWidth } = getColumnsWidth(leftColumnWidth);

    const isLeftTextVisible = hasLeftHeader || hasLeftDescription;
    const isRightTextVisible = hasRightHeader || hasRightDescription;

    return (
        <P.FeatureWrapper $leftWidth={leftWidth} $rightWidth={rightWidth}>
            <Flexbox $wrap="nowrap" $direction="column">
                <img src={featureData.imageLeft} />

                {isLeftTextVisible && <ColumnDescription source={featureData} />}
            </Flexbox>
            <Flexbox $wrap="nowrap" $direction="column">
                <img src={featureData.imageRight} />

                {isRightTextVisible && <ColumnDescription source={featureData} />}
            </Flexbox>
        </P.FeatureWrapper>
    );
}
