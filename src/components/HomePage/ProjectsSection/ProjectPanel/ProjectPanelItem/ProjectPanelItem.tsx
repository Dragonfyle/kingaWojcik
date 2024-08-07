import Text from "$generics/Text/Text";

import ProjectThumbnail from "../Thumbnail/";
import { ProjectPanelItemProps } from "./ProjectPanelItem.types";
import * as P from "./ProjectPanelItem.parts";

export default function ProjectPanelItem({ image, title, description }: ProjectPanelItemProps) {
    return (
        <P.ItemWrapper>
            <ProjectThumbnail src={image} />
            <P.DescriptionWrapper>
                <Text tag="h4" bold>
                    {title}
                </Text>
                <Text size="m" lineHeight={1.5}>
                    {description}
                </Text>
            </P.DescriptionWrapper>
        </P.ItemWrapper>
    );
}
