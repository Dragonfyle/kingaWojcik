import { ColumnWidth } from "../Feature.types";
import FeatureSliceImage from "../FeatureSliceImage/FeatureSliceImage";
import FeatureSliceText from "../FeatureSliceText/FeatureSliceText";
import { widthMap } from "../ProjectPage.utils";
import { FeatureImageTextProps } from "./FeatureImageText.types";

export default function FeatureImageText({ featureData }: FeatureImageTextProps) {
    const { image, imageWidth, imageHeight, header, description } = featureData;
    const leftColumnWidth = Number(featureData.leftColumnWidth) as ColumnWidth;
    const featureGridUtilities = widthMap[leftColumnWidth];

    return (
        <section className={`${featureGridUtilities} `}>
            <FeatureSliceImage src={image} width={imageWidth} height={imageHeight} />
            <FeatureSliceText header={header} description={description} />
        </section>
    );
}
