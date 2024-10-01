import { Suspense } from "react";
import { ColumnDescription } from "../ColumnDescription/";
import { FeatureVideoProps } from "./FeatureVideo.types";
import YoutubeEmbed from "./YoutubeEmbed/YoutubeEmbed";

export default function FeatureVideo({ featureData }: FeatureVideoProps) {
    const isLocalVideo = featureData.videoUrl !== "";

    return (
        <section className="flex flex-col">
            <Suspense fallback={<div>Loading...</div>}>
                {isLocalVideo ? (
                    <video className="object-contain" controls>
                        <source src={featureData.videoUrl || ""} type="video/mp4" />
                    </video>
                ) : (
                    <YoutubeEmbed
                        imageWidth={featureData.imageWidth}
                        imageHeight={featureData.imageHeight}
                        videoId={featureData.videoId || ""}
                    />
                )}
            </Suspense>
            <ColumnDescription
                header={featureData.header}
                description={featureData.optionalDescription}
                descriptionPosition={featureData.descriptionPosition as "top" | "bottom"}
            />
        </section>
    );
}
