import { FeatureTextContent } from "$types/Project.types";
import Flexbox from "$generics/Flexbox/Flexbox";
import Text from "$generics/Text/Text";

import { FeatureTextProps } from "../Columns.types";
import * as P from "./FeatureText.parts";

export default function FeatureText({ source, withH1 }: FeatureTextProps) {
    const content = source.content as FeatureTextContent;

    return (
        <P.FeatureWrapper>
            <Flexbox $marginT="50px" $direction="column">
                <Flexbox $marginB="20px">
                    {withH1 && (
                        <Text tag="h1" size="2xl" bold>
                            {content.h1}
                        </Text>
                    )}
                </Flexbox>
                <Text>{content.description}</Text>
            </Flexbox>
        </P.FeatureWrapper>
    );
}
