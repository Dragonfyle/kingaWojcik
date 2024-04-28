import { FeatureImageImageContent } from "$types/Project.types";
import Flexbox from "$generics/Flexbox/";

import { FeatureImageImageProps, descriptionPositionMap, getColumnsWidth } from "../Feature.types";
import { ColumnDescription } from "../ColumnDescription/";
import * as P from "./FeatureImageImage.parts";

export default function FeatureImageImage({
    source,
    leftColumnWidth = 50,
    withLeftH1 = true,
    withRightH1 = true,
    withLeftDescription = false,
    withRightDescription = false,
    descriptionPosition = "bottom",
}: FeatureImageImageProps) {
    const { leftWidth, rightWidth } = getColumnsWidth(leftColumnWidth);
    const content = source.content as FeatureImageImageContent;

    const isLeftTextVisible = withLeftH1 || withLeftDescription;
    const isRightTextVisible = withRightH1 || withRightDescription;

    return (
        <P.FeatureWrapper $leftWidth={leftWidth} $rightWidth={rightWidth}>
            <Flexbox $wrap="nowrap" $direction="column">
                <img src={content.leftImg} />

                {isLeftTextVisible && (
                    <ColumnDescription
                        withH1={withLeftH1}
                        h1={content.leftH1}
                        withDescription={withLeftDescription}
                        description={content.leftDescription}
                        order={descriptionPositionMap[descriptionPosition]}
                    />
                )}
            </Flexbox>
            <Flexbox $wrap="nowrap" $direction="column">
                <img src={content.rightImg} />

                {isRightTextVisible && (
                    <ColumnDescription
                        withH1={withRightH1}
                        h1={content.rightH1}
                        withDescription={withRightDescription}
                        description={content.rightDescription}
                        order={descriptionPositionMap[descriptionPosition]}
                    />
                )}
            </Flexbox>
        </P.FeatureWrapper>
    );
}
