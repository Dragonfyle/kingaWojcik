import * as P from "./ProjectPanelItem.parts";
import Thumbnail from "../Thumbnail/Thumbnail";
import Text from "../../../../generics/Text/Text";

interface ProjectPanelItemProps {
    image: string;
    title: string;
    description: string;
}

export default function ProjectPanelItem({ image, title, description }: ProjectPanelItemProps) {
    return (
        <P.ItemWrapper>
            <Thumbnail src={image} />
            <P.DescriptionWrapper>
                <P.ItemTitle>{title}</P.ItemTitle>
                <Text size="m" lineHeight={1.5}>
                    {description}
                </Text>
            </P.DescriptionWrapper>
        </P.ItemWrapper>
    );
}
