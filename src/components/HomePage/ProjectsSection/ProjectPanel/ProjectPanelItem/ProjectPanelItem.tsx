import Text from "$generics/Text/Text";

import ProjectThumbnail from "../Thumbnail/";
import * as P from "./ProjectPanelItem.parts";
interface ProjectPanelItemProps {
    image: string;
    title: string;
    description: string;
}

export default function ProjectPanelItem({ image, title, description }: ProjectPanelItemProps) {
    return (
        <P.ItemWrapper>
            <ProjectThumbnail src={image} />
            <P.DescriptionWrapper>
                <P.ItemTitle>{title}</P.ItemTitle>
                <Text size="m" lineHeight={1.5}>
                    {description}
                </Text>
            </P.DescriptionWrapper>
        </P.ItemWrapper>
    );
}
