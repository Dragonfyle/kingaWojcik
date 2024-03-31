import * as P from "./Thumbnail.parts";

interface ProjectThumbnailProps {
    src: string;
}

export default function ProjectThumbnail({ src }: ProjectThumbnailProps) {
    return (
        <P.ProjectThumbnailWrapper>
            <P.StyledImage src={src} />
        </P.ProjectThumbnailWrapper>
    );
}
