import { Feature } from "../../../data/TabbedGalleryData";
import Flexbox from "../../generics/Flexbox/Flexbox";
import Text from "../../generics/Text/Text";

interface ColumnDescriptionProps {
    source: Feature;
    withH1: boolean;
    order: -1 | 1;
}

export function ColumnDescription({ source, withH1, order }: ColumnDescriptionProps) {
    return (
        <Flexbox $order={order} $padding="20px 20px" $marginT="50px" $direction="column">
            {withH1 && (
                <Text tag="h1" size="2xl" bold>
                    {source.headerH1}
                </Text>
            )}

            <Flexbox $marginB="60px" $width="100%">
                <Text size="xl">{source.topDescription}</Text>
            </Flexbox>
        </Flexbox>
    );
}
