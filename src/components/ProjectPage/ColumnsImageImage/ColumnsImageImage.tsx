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

    return (
        <P.FeatureWrapper $leftWidth={leftWidth} $rightWidth={rightWidth}>
            <Flexbox $wrap="nowrap" $direction="column">
                <img src={source.img} />
                {withLeftDescription && (
                    <ColumnDescription
                        source={source}
                        withH1={withH1}
                        order={descriptionPositionMap[descriptionPosition]}
                    />
                )}
            </Flexbox>
            <Flexbox $wrap="nowrap" $direction="column">
                {withRightDescription && (
                    <ColumnDescription
                        source={source}
                        withH1={withH1}
                        order={descriptionPositionMap[descriptionPosition]}
                    />
                )}
                <img src={source.img} />
            </Flexbox>
        </P.FeatureWrapper>
    );
}
