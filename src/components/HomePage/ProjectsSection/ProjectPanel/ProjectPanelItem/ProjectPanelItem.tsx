import ProjectThumbnail from "../Thumbnail/";
import { ProjectPanelItemProps } from "./ProjectPanelItem.types";
import ProjectPanelItemDescription from "./ProjectPanelItemDescription";

export default function ProjectPanelItem({ image, title, description }: ProjectPanelItemProps) {
    return (
        <div className="flex h-full snap-start flex-col">
            <ProjectThumbnail src={image} />
            <ProjectPanelItemDescription title={title} description={description} />
        </div>
    );
}
