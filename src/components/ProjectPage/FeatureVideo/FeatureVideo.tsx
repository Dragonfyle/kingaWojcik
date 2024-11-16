import { ColumnDescription } from "../ColumnDescription/";
import { getGifDependentProps } from "../ProjectPage.utils";
import { FeatureVideoProps } from "./FeatureVideo.types";
import YoutubeEmbed from "./YoutubeEmbed/YoutubeEmbed";

export default function FeatureVideo({ featureData }: FeatureVideoProps) {
    const { isLocal, isGif, videoId, videoUrl, imageHeight, imageWidth, optionalDescription, descriptionPosition } =
        featureData;
    const gifDependentProps = getGifDependentProps(isGif || false);

    return (
        <section className="flex flex-col">
            {isLocal ? (
                <video className="object-contain" controls height={imageHeight} width="1200px" {...gifDependentProps}>
                    <source src={videoUrl || ""} type="video/mp4" />
                </video>
            ) : (
                <YoutubeEmbed imageWidth={imageWidth} imageHeight={imageHeight} videoId={videoId || ""} />
            )}
            <ColumnDescription
                header={featureData.header}
                description={optionalDescription}
                descriptionPosition={descriptionPosition as "top" | "bottom"}
            />
        </section>
    );
}
