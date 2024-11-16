import FeatureSliceVideo from "../FeatureSliceImage/FeatureSliceVideo";
import { widthMap } from "../ProjectPage.utils";
import { FeatureVideoVideoProps } from "./FeatureVideoVideo.types";

const COLUMN_WIDTH = 50;

export default function FeatureVideoVideo({ featureData }: FeatureVideoVideoProps) {
    const featureGridUtilities = widthMap[COLUMN_WIDTH];

    const leftFeatureData = {
        width: featureData.imageWidthLeft,
        height: featureData.imageHeightLeft,
        isLocal: featureData.isLocalLeft,
        videoUrl: featureData.videoUrlLeft,
        videoId: featureData.videoIdLeft,
        isGif: featureData.isGifLeft || false,
    };

    const rightFeatureData = {
        width: featureData.imageWidthRight,
        height: featureData.imageHeightRight,
        isLocal: featureData.isLocalRight,
        videoUrl: featureData.videoUrlRight,
        videoId: featureData.videoIdRight,
        isGif: featureData.isGifRight || false,
    };

    return (
        <section className={`${featureGridUtilities} gap-10`}>
            <FeatureSliceVideo {...leftFeatureData} />
            <FeatureSliceVideo {...rightFeatureData} />
        </section>
    );
}
