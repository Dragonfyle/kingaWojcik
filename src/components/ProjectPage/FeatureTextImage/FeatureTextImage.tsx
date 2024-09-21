import { ColumnWidth } from "../Feature.types";
import { widthMap } from "../ProjectPage.utils";
import FeatureSliceText from "../FeatureSliceText/FeatureSliceText";
import FeatureSliceImage from "../FeatureSliceImage/FeatureSliceImage";
import { FeatureTextImageProps } from "./FeatureTextImage.types";

export default function FeatureTextImage({ featureData }: FeatureTextImageProps) {
    const { header, description, image, imageWidth, imageHeight } = featureData;

    const leftColumnWidth = Number(featureData.leftColumnWidth) as ColumnWidth;
    const featureGridUtilities = widthMap[leftColumnWidth];

    return (
        <div className={`${featureGridUtilities}`}>
            <FeatureSliceText header={header} description={description} />
            <FeatureSliceImage src={image} width={imageWidth} height={imageHeight} />
        </div>
    );
}
