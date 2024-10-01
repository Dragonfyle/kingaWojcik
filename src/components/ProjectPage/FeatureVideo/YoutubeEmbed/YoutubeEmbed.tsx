import { YoutubeEmbedProps } from "./YoutubeEmbed.types";

export default function YoutubeEmbed({ imageWidth, imageHeight, videoId }: YoutubeEmbedProps) {
    return (
        <iframe
            className="aspect-video h-auto max-w-full"
            width={imageWidth}
            height={imageHeight}
            src={`https://www.youtube.com/embed/${videoId}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
        />
    );
}
