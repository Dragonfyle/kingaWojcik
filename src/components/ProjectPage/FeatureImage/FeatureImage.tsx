import { ColumnDescription } from "../ColumnDescription/";
import { IllustrationsProjectSectionsImage } from "tina/__generated__/types";

import * as P from "./FeatureImage.parts";

interface FeatureImageProps {
    featureData: IllustrationsProjectSectionsImage;
}

export default function FeatureImage({ featureData }: FeatureImageProps) {
    const { header, optionalDescription, descriptionPosition } = featureData;

    return (
        <P.FeatureWrapper>
            <ColumnDescription
                header={header}
                description={optionalDescription}
                descriptionPosition={descriptionPosition as "top" | "bottom"}
            />
            <img src={featureData.image} />
        </P.FeatureWrapper>
    );
}
