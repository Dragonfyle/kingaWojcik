import { ColumnWidth } from "../Feature.types";
import { FeatureTextTextProps } from "./FeatureTextText.types";
import { widthMap } from "../ProjectPage.utils";
import FeatureSliceText from "../FeatureSliceText/FeatureSliceText";

export default function FeatureTextText({ featureData }: FeatureTextTextProps) {
    const leftColumnWidth = Number(featureData.leftColumnWidth) as ColumnWidth;
    const featureGridUtilities = widthMap[leftColumnWidth];

    return (
        <section className={`${featureGridUtilities}`}>
            <FeatureSliceText header={featureData.headerLeft} description={featureData.descriptionLeft} />

            <FeatureSliceText header={featureData.headerRight} description={featureData.descriptionRight} />
        </section>
    );
}
