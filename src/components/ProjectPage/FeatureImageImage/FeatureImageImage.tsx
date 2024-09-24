import { ColumnWidth } from "../Feature.types";
import { ColumnDescription } from "../ColumnDescription/";
import FeatureSliceImage from "../FeatureSliceImage/FeatureSliceImage";
import { widthMap } from "../ProjectPage.utils";
import { FeatureImageImageProps } from "./FeatureImageImage.types";

export default function FeatureImageImage({ featureData }: FeatureImageImageProps) {
    const {
        imageLeft,
        imageRight,
        imageWidth,
        imageHeight,
        headerLeft,
        optionalDescriptionLeft,
        headerRight,
        optionalDescriptionRight,
        descriptionPosition,
    } = featureData;

    const hasLeftHeader = "headerLeft" in featureData;
    const hasRightHeader = "headerRight" in featureData;
    const hasLeftDescription = "optionalDescriptionLeft" in featureData;
    const hasRightDescription = "optionalDescriptionRight" in featureData;
    const leftColumnWidth = Number(featureData.leftColumnWidth) as ColumnWidth;
    const featureGridUtilities = widthMap[leftColumnWidth];

    const isLeftTextVisible = hasLeftHeader || hasLeftDescription;
    const isRightTextVisible = hasRightHeader || hasRightDescription;

    return (
        <section className={`${featureGridUtilities}`}>
            <div className="flex flex-col flex-nowrap">
                <FeatureSliceImage src={imageLeft} width={imageWidth} height={imageHeight} />

                {isLeftTextVisible && (
                    <ColumnDescription
                        header={headerLeft}
                        description={optionalDescriptionLeft}
                        descriptionPosition={descriptionPosition as "top" | "bottom"}
                    />
                )}
            </div>
            <div className="flex flex-col flex-nowrap">
                <FeatureSliceImage src={imageRight} width={imageWidth} height={imageHeight} />

                {isRightTextVisible && (
                    <ColumnDescription
                        header={headerRight}
                        description={optionalDescriptionRight}
                        descriptionPosition={descriptionPosition as "top" | "bottom"}
                    />
                )}
            </div>
        </section>
    );
}
