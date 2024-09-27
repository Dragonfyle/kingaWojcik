import { ColumnWidth } from "../Feature.types";
import { widthMap } from "../ProjectPage.utils";
import { FeatureImageImageProps } from "./FeatureImageImage.types";
import FeatureImageImageColumn from "./FeatureImageImageColumn";

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

    const leftColumnWidth = Number(featureData.leftColumnWidth) as ColumnWidth;
    const featureGridUtilities = widthMap[leftColumnWidth];

    return (
        <section className={`${featureGridUtilities} gap-10`}>
            <FeatureImageImageColumn
                image={imageLeft}
                header={headerLeft || ""}
                optionalDescription={optionalDescriptionLeft || ""}
                descriptionPosition={descriptionPosition as "top" | "bottom"}
                imageWidth={imageWidth}
                imageHeight={imageHeight}
            />
            <FeatureImageImageColumn
                image={imageRight}
                header={headerRight || ""}
                optionalDescription={optionalDescriptionRight || ""}
                descriptionPosition={descriptionPosition as "top" | "bottom"}
                imageWidth={imageWidth}
                imageHeight={imageHeight}
            />
        </section>
    );
}
