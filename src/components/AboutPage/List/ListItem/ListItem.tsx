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
            <Flexbox $direction="column" $width="25%">
                <Text size="s" align="right" whiteSpace="nowrap">
                    {source.header[1]}
                </Text>
                {source.header[2] && (
                    <Text size="s" align="right">
                        {source.header[2]}
                    </Text>
                )}
            </Flexbox>
            <Flexbox $direction="column">
                <Text size="s" bold>
                    {source.description[1]}
                </Text>
                {source.description[2] && <Text size="s">{source.description[2]}</Text>}
                {source.description[3] && (
                    <Text size="s" color="rgb(170, 130, 0)">
                        {source.description[3]}
                    </Text>
                )}
            </Flexbox>
        </P.ListItemWrapper>
    );
}
