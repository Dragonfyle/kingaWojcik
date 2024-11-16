import { ColumnWidth } from "../Feature.types";
import { widthMap } from "../ProjectPage.utils";
import { FeatureImageImageProps } from "./FeatureImageImage.types";
import FeatureImageImageColumn from "./FeatureImageImageColumn";

export default function FeatureImageImage({ featureData }: FeatureImageImageProps) {
    const leftColumnWidth = Number(featureData.leftColumnWidth) as ColumnWidth;
    const featureGridUtilities = widthMap[leftColumnWidth];

    return (
        <section className={`${featureGridUtilities} gap-10`}>
            <FeatureImageImageColumn
                image={featureData.imageLeft}
                header={featureData.headerLeft || ""}
                optionalDescription={featureData.optionalDescriptionLeft || ""}
                descriptionPosition={featureData.descriptionPosition as "top" | "bottom"}
                imageWidth={featureData.imageWidth}
                imageHeight={featureData.imageHeight}
            />
            <FeatureImageImageColumn
                image={featureData.imageRight}
                header={featureData.headerRight || ""}
                optionalDescription={featureData.optionalDescriptionRight || ""}
                descriptionPosition={featureData.descriptionPosition as "top" | "bottom"}
                imageWidth={featureData.imageWidth}
                imageHeight={featureData.imageHeight}
            />
        </section>
    );
}
