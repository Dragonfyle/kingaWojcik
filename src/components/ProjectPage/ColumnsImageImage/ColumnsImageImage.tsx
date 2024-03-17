import { FeatureImageImageContent } from "../../../types/Project.types";
import Flexbox from "../../generics/Flexbox/Flexbox";
import { ColumnDescription } from "../ColumnDescription/ColumnDescription";
import { ColumnsImageImageProps, descriptionPositionMap, getColumnsWidth } from "../Columns.utils";
import * as P from "./ColumnsImageImage.parts";

export default function ColumnsImageImage({
    source,
    leftColumnWidth = 50,
    withH1 = true,
    withLeftDescription = true,
    withRightDescription,
    descriptionPosition = "bottom",
}: ColumnsImageImageProps) {
    const { leftWidth, rightWidth } = getColumnsWidth(leftColumnWidth);
    const content = source.content as FeatureImageImageContent;

    return (
        <P.FeatureWrapper $leftWidth={leftWidth} $rightWidth={rightWidth}>
            <Flexbox $wrap="nowrap" $direction="column">
                <img src={content.leftImg} />
                {withLeftDescription && (
                    <ColumnDescription
                        withH1={withH1}
                        h1={content.leftH1}
                        description={content.leftDescription}
                        order={descriptionPositionMap[descriptionPosition]}
                    />
                )}
            </Flexbox>
            <Flexbox $wrap="nowrap" $direction="column">
                {withRightDescription && (
                    <ColumnDescription
                        withH1={withH1}
                        h1={content.rightH1}
                        description={content.rightDescription}
                        order={descriptionPositionMap[descriptionPosition]}
                    />
                )}
                <img src={content.rightImg} />
            </Flexbox>
        </P.FeatureWrapper>
    );
}
