import { FeatureTextImageContent } from "$types/Project.types";
import Flexbox from "$generics/Flexbox/";
import Text from "$generics/Text/";

import { FeatureImageTextProps, getColumnsWidth } from "../Feature.types";
import * as P from "./FeatureImageText.parts";

export default function FeatureTextImage({ source, leftColumnWidth = 50, withH1 = true }: FeatureImageTextProps) {
    const { leftWidth, rightWidth } = getColumnsWidth(leftColumnWidth);
    const content = source.content as FeatureTextImageContent;

    return (
        <P.FeatureWrapper $leftWidth={leftWidth} $rightWidth={rightWidth}>
            <Flexbox $wrap="nowrap" $direction="column">
                <img src={content.img} />
            </Flexbox>
            <P.StyledFlexbox $padding="20px 40px" $direction="column">
                {withH1 && (
                    <Text tag="h1" size="2xl" bold>
                        {content.h1}
                    </Text>
                )}

                <Flexbox $marginB="60px" $marginT="40px">
                    <Text>{content.description}</Text>
                </Flexbox>
            </P.StyledFlexbox>
        </P.FeatureWrapper>
    );
}
