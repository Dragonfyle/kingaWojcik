import Flexbox from "$generics/Flexbox/Flexbox";
import Text from "$generics/Text/Text";

interface ColumnDescriptionProps {
    withH1: boolean;
    h1?: string;
    withDescription: boolean;
    order: -1 | 1;
    description?: string | undefined;
}

export function ColumnDescription({ withH1, h1, withDescription, description, order }: ColumnDescriptionProps) {
    return (
        <Flexbox $order={order} $direction="column" $marginT="20px" $marginB="20px" $rowGap="40px">
            {withH1 && (
                <Flexbox>
                    <Text tag="h1" lineHeight={1.14} size="2xl" bold>
                        {h1}
                    </Text>
                </Flexbox>
            )}

            {withDescription && (
                <Flexbox>
                    <Text>{description}</Text>
                </Flexbox>
            )}
        </Flexbox>
    );
}
