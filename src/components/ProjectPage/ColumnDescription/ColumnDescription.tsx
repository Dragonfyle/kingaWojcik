import Flexbox from "$generics/Flexbox/Flexbox";
import Text from "$generics/Text/Text";
import { Maybe } from "tina/__generated__/types";
import { TinaMarkdown } from "tinacms/dist/rich-text";

import { descriptionPositionMap } from "../Feature.types";

interface ColumnDescriptionProps {
    header?: Maybe<string> | undefined;
    description?: any;
    descriptionPosition: "top" | "bottom";
}

export function ColumnDescription({ header, description, descriptionPosition }: ColumnDescriptionProps) {
    const order = descriptionPositionMap[descriptionPosition];
    const hasHeader = !!header;
    const hasDescription = description && description.children && description.children.length > 0;

    return (
        <Flexbox $order={order} $direction="column" $marginT="20px" $marginB="20px" $alignC="flex-start">
            {hasHeader && (
                <Flexbox>
                    <Text tag="h1" lineHeight={1.14} size="2xl" bold>
                        {header}
                    </Text>
                </Flexbox>
            )}

            {hasDescription && (
                <Flexbox $marginB="60px" $marginT="40px">
                    <TinaMarkdown content={description} />
                </Flexbox>
            )}
        </Flexbox>
    );
}
