import { FeatureContent } from "../../../types/tabbedGallery.types";
import Flexbox from "../../generics/Flexbox/Flexbox";
import Text from "../../generics/Text/Text";
import { ColumnsTextTextProps, getColumnsWidth } from "../Columns.utils";
import * as P from "./ColumnsTextText.parts";

export default function ColumnsTextText({
    source,
    leftColumnWidth = 50,
    withLeftH1,
    withRightH1,
}: ColumnsTextTextProps) {
    const { leftWidth, rightWidth } = getColumnsWidth(leftColumnWidth);
    const content = source.content as FeatureContent<"ColumnsTextText">;

    return (
        <P.FeatureWrapper $leftWidth={leftWidth} $rightWidth={rightWidth}>
            <Flexbox $padding="20px 40px" $marginT="50px" $direction="column">
                {withLeftH1 && (
                    <Text tag="h1" size="2xl" bold>
                        {content.leftH1}
                    </Text>
                )}

                <Flexbox $marginB="60px">
                    <Text size="xl">{content.leftDescription}</Text>
                </Flexbox>
            </Flexbox>
            <Flexbox $padding="20px 40px" $marginT="50px" $direction="column">
                {withRightH1 && (
                    <Text tag="h1" size="2xl" bold>
                        {content.rightH1}
                    </Text>
                )}

                <Flexbox $marginB="60px">
                    <Text size="xl">{content.rightDescription}</Text>
                </Flexbox>
            </Flexbox>
        </P.FeatureWrapper>
    );
}
