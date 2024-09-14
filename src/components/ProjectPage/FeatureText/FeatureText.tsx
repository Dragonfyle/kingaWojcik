import Flexbox from "$generics/Flexbox/Flexbox";
import Text from "$generics/Text/Text";

import * as P from "./FeatureText.parts";
import { IllustrationsProjectSectionsText } from "tina/__generated__/types";

interface FeatureTextProps {
    featureData: IllustrationsProjectSectionsText;
}

export default function FeatureText({ featureData }: FeatureTextProps) {
    return (
        <P.FeatureWrapper>
            <Flexbox $marginT="50px" $direction="column">
                <Flexbox $marginB="20px">
                    {featureData?.header && (
                        <Text tag="h1" size="2xl" bold>
                            {featureData.header}
                        </Text>
                    )}
                </Flexbox>
                <Text>{featureData.description}</Text>
            </Flexbox>
        </P.FeatureWrapper>
    );
}
