import YoutubeEmbed from "$components/ProjectPage/FeatureVideo/YoutubeEmbed/YoutubeEmbed";
import { getGifDependentProps } from "$components/ProjectPage/ProjectPage.utils";

import { FeatureSliceVideoProps } from "./FeatureSliceVideo.types";

export default function FeatureSliceVideo({
    videoUrl,
    width,
    height,
    isLocal,
    videoId,
    isGif,
}: FeatureSliceVideoProps) {
    const gifDependentProps = getGifDependentProps(isGif);

    return (
        <section className="flex flex-col">
            {isLocal ? (
                <video className="object-contain" controls height={height} width="1200px" {...gifDependentProps}>
                    <source src={videoUrl || ""} type="video/mp4" />
                </video>
            ) : (
                <YoutubeEmbed imageWidth={width} imageHeight={height} videoId={videoId || ""} />
            )}
        </section>
    );
}
