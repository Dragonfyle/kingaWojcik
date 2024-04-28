import * as P from "./Thumbnail.parts";
import { ProjectThumbnailProps } from "./Thumbnail.types";

export default function ProjectThumbnail({ src }: ProjectThumbnailProps) {
    return (
        <P.ProjectThumbnailWrapper>
            <P.StyledImage src={src} />
        </P.ProjectThumbnailWrapper>
    );
}
