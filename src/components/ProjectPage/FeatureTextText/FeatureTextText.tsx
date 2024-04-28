import { FeatureTextTextContent } from "$types/Project.types";
import Flexbox from "$generics/Flexbox/";
import Text from "$generics/Text/";

import { FeatureTextTextProps, getColumnsWidth } from "../Columns.types";
import * as P from "./FeatureTextText.parts";

export default function FeatureTextText({
    source,
    leftColumnWidth = 50,
    withLeftH1,
    withRightH1,
}: FeatureTextTextProps) {
    const { leftWidth, rightWidth } = getColumnsWidth(leftColumnWidth);
    const content = source.content as FeatureTextTextContent;

    return (
        <P.FeatureWrapper $leftWidth={leftWidth} $rightWidth={rightWidth}>
            <Flexbox $padding="20px 40px" $marginT="50px" $direction="column">
                {withLeftH1 && (
                    <Text tag="h1" size="2xl" bold>
                        {content.leftH1}
                    </Text>
                )}

                <Flexbox $marginB="60px">
                    <Text>{content.leftDescription}</Text>
                </Flexbox>
            </Flexbox>
            <Flexbox $padding="20px 40px" $marginT="50px" $direction="column">
                {withRightH1 && (
                    <Text tag="h1" size="2xl" bold>
                        {content.rightH1}
                    </Text>
                )}

                <Flexbox $marginB="60px">
                    <Text>{content.rightDescription}</Text>
                </Flexbox>
            </Flexbox>
        </P.FeatureWrapper>
    );
}
