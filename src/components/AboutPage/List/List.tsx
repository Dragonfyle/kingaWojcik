import { TabContent } from "../../../types/AboutGallery.types";
import Text from "../../generics/Text/Text";
import ListItem from "./ListItem/ListItem";
import * as P from "./List.parts";

export default function List({ source }: { source: TabContent }) {
    function renderList(source: TabContent) {
        return source.listContent.map((item) => <ListItem key={item.header[1]} source={item} />);
    }

    return (
        <P.ListWrapper>
            <P.StyledFlexbox $width="100%" $justify="center">
                <Text uppercase size="2xl" tag="h1">
                    {source.h1}
                </Text>
            </P.StyledFlexbox>
            <P.RightColumnWrapper>{renderList(source)}</P.RightColumnWrapper>
        </P.ListWrapper>
    );
}
