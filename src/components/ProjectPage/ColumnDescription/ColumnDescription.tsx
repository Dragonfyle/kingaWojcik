import Flexbox from "$generics/Flexbox/Flexbox";
import Text from "$generics/Text/Text";

import {
    IllustrationsProjectSectionsImage,
    IllustrationsProjectSectionsImageImage,
    IllustrationsProjectSectionsVideo,
} from "tina/__generated__/types";
import { descriptionPositionMap } from "../Feature.types";

interface ColumnDescriptionProps {
    source:
        | IllustrationsProjectSectionsImage
        | IllustrationsProjectSectionsVideo
        | IllustrationsProjectSectionsImageImage;
}

export function ColumnDescription({ source }: ColumnDescriptionProps) {
    const descriptionPosition = source.descriptionPosition as "top" | "bottom";
    const order = descriptionPositionMap[descriptionPosition];
    const hasHeader = "header" in source;
    const hasDescription = "description" in source;

    return (
        <Flexbox $order={order} $direction="column" $marginT="20px" $marginB="20px" $alignC="flex-start">
            {hasHeader && (
                <Flexbox>
                    <Text tag="h1" lineHeight={1.14} size="2xl" bold>
                        {source.header}
                    </Text>
                </Flexbox>
            )}

            {hasDescription && (
                <Flexbox $marginB="60px" $marginT="40px">
                    <Text>{source.description}</Text>
                </Flexbox>
            )}
        </Flexbox>
    );
}
