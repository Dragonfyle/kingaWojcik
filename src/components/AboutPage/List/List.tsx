import { TabContent } from "../../../types/AboutGallery.types";
import Text from "../../generics/Text/Text";
import ListItem from "./ListItem/ListItem";
import * as P from "./List.parts";
import Flexbox from "../../generics/Flexbox/Flexbox";

export default function List({ source }: { source: TabContent }) {
    function renderList(source: TabContent) {
        console.log(source);
        return source.listContent.map((item) => <ListItem source={item} />);
    }

    return (
        <P.ListWrapper>
            <P.StyledFlexbox $width="100%" $justify="center">
                <Text uppercase size="2xl" tag="h1">
                    {source.h1}
                </Text>
            </P.StyledFlexbox>
            <Flexbox $direction="column" $rowGap="30px" $padding="0 5% 0 15%">
                {renderList(source)}
            </Flexbox>
        </P.ListWrapper>
    );
}
