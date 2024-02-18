import * as P from "./ProjectPanelItem.parts";
import Thumbnail from "../Thumbnail/Thumbnail";
import Text from "../../../../generics/Text/Text";

interface ProjectPanelItemProps {
    image: string;
    text: string;
}

export default function ProjectPanelItem({ image, text }: ProjectPanelItemProps) {
    return (
        <P.ItemWrapper>
            <Thumbnail src={image} />
            <P.DescriptionWrapper>
                <P.ItemTitle>Project title</P.ItemTitle>
                <Text size="m" lineHeight={1.5}>
                    {text}
                </Text>
            </P.DescriptionWrapper>
        </P.ItemWrapper>
    );
}
