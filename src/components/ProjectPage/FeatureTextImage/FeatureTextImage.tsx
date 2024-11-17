import { ColumnWidth } from "../Feature.types";
import { widthMap } from "../ProjectPage.utils";
import FeatureSliceText from "../FeatureSliceText";
import FeatureSliceImage from "../FeatureSliceImage";
import { FeatureTextImageProps } from "./FeatureTextImage.types";

export default function FeatureTextImage({ featureData }: FeatureTextImageProps) {
    const { header, description, image, imageWidth, imageHeight } = featureData;

    const leftColumnWidth = Number(featureData.leftColumnWidth) as ColumnWidth;
    const featureGridUtilities = widthMap[leftColumnWidth];

    return (
        <section className={`${featureGridUtilities} gap-y-6`}>
            <FeatureSliceText header={header} description={description} />
            <FeatureSliceImage src={image} width={imageWidth} height={imageHeight} defaultOrder={1} />
        </section>
    );
}
