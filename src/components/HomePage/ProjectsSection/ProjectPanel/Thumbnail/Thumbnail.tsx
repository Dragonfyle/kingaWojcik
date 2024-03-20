import * as P from "./Thumbnail.parts";

interface ThumbnailProps {
    src: string;
}

export default function Thumbnail({ src }: ThumbnailProps) {
    return <P.StyledImage src={src} />;
}
