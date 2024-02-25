import { Feature } from "../../../data/TabbedGalleryData";
import Flexbox from "../../generics/Flexbox/Flexbox";
import Text from "../../generics/Text/Text";
import * as P from "./ColumnsTextText.parts";

interface ColumnsImageText {
    source: Feature;
    leftColumnWidth: 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90;
    withLeftH1: boolean;
    withRightH1: boolean;
}

export default function ColumnsTextText({ source, leftColumnWidth = 50, withLeftH1, withRightH1 }: ColumnsImageText) {
    const rightColumnWidth = 100 - leftColumnWidth;

    const leftWidth = `${leftColumnWidth}fr`;
    const rightWidth = `${rightColumnWidth}fr`;

    return (
        <P.FeatureWrapper $leftWidth={leftWidth} $rightWidth={rightWidth}>
            <Flexbox $padding="20px 40px" $marginT="50px" $direction="column">
                {withLeftH1 && (
                    <Text tag="h1" size="2xl" bold>
                        {source.headerH1}
                    </Text>
                )}

                <Flexbox $marginB="60px">
                    <Text size="xl">{source.topDescription}</Text>
                </Flexbox>
            </Flexbox>
            <Flexbox $padding="20px 40px" $marginT="50px" $direction="column">
                {withRightH1 && (
                    <Text tag="h1" size="2xl" bold>
                        {source.headerH1}
                    </Text>
                )}

                <Flexbox $marginB="60px">
                    <Text size="xl">{source.topDescription}</Text>
                </Flexbox>
            </Flexbox>
        </P.FeatureWrapper>
    );
}
