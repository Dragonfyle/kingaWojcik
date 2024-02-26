import { FeatureContentMap } from "../../../types/tabbedGallery.types";
import Flexbox from "../../generics/Flexbox/Flexbox";
import Text from "../../generics/Text/Text";
import { SingleTextProps } from "../Columns.utils";
import * as P from "./SingleText.parts";

export default function SingleText({ source, withH1 }: SingleTextProps) {
    const content = source.content as FeatureContentMap["SingleText"];

    return (
        <P.FeatureWrapper>
            <Flexbox $padding="20px 40px" $marginT="50px" $direction="column">
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
