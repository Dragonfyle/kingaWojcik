import Text from "$generics/Text/Text";

import ProjectThumbnail from "../Thumbnail/";
import { ProjectPanelItemProps } from "./ProjectPanelItem.types";
import * as P from "./ProjectPanelItem.parts";
import { TinaMarkdown } from "tinacms/dist/rich-text";

export default function ProjectPanelItem({ image, title, description }: ProjectPanelItemProps) {
    return (
        <P.ItemWrapper>
            <ProjectThumbnail src={image} />
            <P.DescriptionWrapper>
                <Text tag="h4" bold>
                    {title}
                </Text>
                <TinaMarkdown content={description} />
            </P.DescriptionWrapper>
        </P.ItemWrapper>
    );
}
