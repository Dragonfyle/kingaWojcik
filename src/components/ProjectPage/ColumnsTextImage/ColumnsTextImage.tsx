import Flexbox from "../../generics/Flexbox/Flexbox";
import Text from "../../generics/Text/Text";
import { ColumnsImageTextProps, getColumnsWidth } from "../Columns.utils";
import * as P from "./ColumnsTextImage.parts";

export default function ColumnsTextImage({ source, leftColumnWidth = 50, withH1 = true }: ColumnsImageTextProps) {
    const { leftWidth, rightWidth } = getColumnsWidth(leftColumnWidth);

    return (
        <P.FeatureWrapper $leftWidth={leftWidth} $rightWidth={rightWidth}>
            <Flexbox $padding="20px 40px" $marginT="50px" $direction="column">
                {withH1 && (
                    <Text tag="h1" size="2xl" bold>
                        {source.headerH1}
                    </Text>
                )}

                <Flexbox $marginB="60px">
                    <Text size="xl">{source.topDescription}</Text>
                </Flexbox>
            </Flexbox>
            <Flexbox $wrap="nowrap" $direction="column">
                <img src={source.img} />
            </Flexbox>
        </P.FeatureWrapper>
    );
}
