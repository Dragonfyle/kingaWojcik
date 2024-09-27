import { ColumnDescription } from "$components/ProjectPage/ColumnDescription";
import FeatureSliceImage from "$components/ProjectPage/FeatureSliceImage/FeatureSliceImage";

import { FeatureImageImageColumnProps } from "./FeatureImageImageColumn.types";

export default function FeatureImageImageColumn({
    image,
    header,
    optionalDescription,
    descriptionPosition,
    imageWidth,
    imageHeight,
}: FeatureImageImageColumnProps) {
    const isTextVisible = !!header || !!optionalDescription;

    return (
        <div className="flex flex-col flex-nowrap gap-4 m:gap-8">
            <FeatureSliceImage src={image} width={imageWidth} height={imageHeight} defaultOrder={1} />

            {isTextVisible && (
                <ColumnDescription
                    header={header}
                    description={optionalDescription}
                    descriptionPosition={descriptionPosition as "top" | "bottom"}
                />
            )}
        </div>
    );
}
