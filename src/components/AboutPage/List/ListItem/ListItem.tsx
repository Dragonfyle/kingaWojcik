import { ListElement } from "$types/AboutGallery.types";
import Flexbox from "$generics/Flexbox/Flexbox";
import Text from "$generics/Text/Text";
import * as P from "./ListItem.parts";

interface ListItemProps {
    source: ListElement;
}

export default function ListItem({ source }: ListItemProps) {
    return (
        <P.ListItemWrapper>
            <Flexbox $direction="column" $width="100%" $alignI="flex-end">
                <Text size="ms" align="right" whiteSpace="nowrap">
                    {source.header[1]}
                </Text>
                {source.header[2] && (
                    <Text size="ms" align="right">
                        {source.header[2]}
                    </Text>
                )}
            </Flexbox>
            <Flexbox $direction="column" $padding="0 0 0 5%">
                <P.ListItemTitle whiteSpace="pre-line" size="ms" bold>
                    {source.description[1]}
                </P.ListItemTitle>
                {source.description[2] && (
                    <Text whiteSpace="pre-line" size="s">
                        {source.description[2]}
                    </Text>
                )}
                {source.description[3] && (
                    <Text whiteSpace="pre-line" size="s" color="rgb(170, 130, 0)">
                        {source.description[3]}
                    </Text>
                )}
            </Flexbox>
        </P.ListItemWrapper>
    );
}
