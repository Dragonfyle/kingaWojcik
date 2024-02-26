import Flexbox from "../../generics/Flexbox/Flexbox";
import Text from "../../generics/Text/Text";

interface ColumnDescriptionProps {
    withH1: boolean;
    h1: string | undefined;
    description: string | undefined;
    order: -1 | 1;
}

export function ColumnDescription({ withH1, h1, description, order }: ColumnDescriptionProps) {
    return (
        <Flexbox $order={order} $padding="20px 20px" $marginT="50px" $direction="column">
            {withH1 && (
                <Text tag="h1" size="2xl" bold>
                    {h1}
                </Text>
            )}

            <Flexbox $marginB="60px" $width="100%">
                <Text size="xl">{description}</Text>
            </Flexbox>
        </Flexbox>
    );
}
