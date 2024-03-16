import { FeatureTextImageContent } from "../../../types/tabbedGallery.types";
import Flexbox from "../../generics/Flexbox/Flexbox";
import Text from "../../generics/Text/Text";
import { ColumnsImageTextProps, getColumnsWidth } from "../Columns.utils";
import * as P from "./ColumnsImageText.parts";

export default function ColumnsTextImage({ source, leftColumnWidth = 50, withH1 = true }: ColumnsImageTextProps) {
    const { leftWidth, rightWidth } = getColumnsWidth(leftColumnWidth);
    const content = source.content as FeatureTextImageContent;

    return (
        <P.FeatureWrapper $leftWidth={leftWidth} $rightWidth={rightWidth}>
            <Flexbox $wrap="nowrap" $direction="column">
                <img src={content.img} />
            </Flexbox>
            <Flexbox $padding="20px 40px" $direction="column">
                {withH1 && (
                    <Text tag="h1" size="2xl" bold>
                        {content.h1}
                    </Text>
                )}

                <Flexbox $marginB="60px">
                    <Text size="xl">{content.description}</Text>
                </Flexbox>
            </Flexbox>
        </P.FeatureWrapper>
    );
}
