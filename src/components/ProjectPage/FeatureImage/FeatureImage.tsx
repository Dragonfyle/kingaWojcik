import { ColumnDescription } from "../ColumnDescription/";
import { IllustrationsProjectSectionsImage } from "tina/__generated__/types";

import * as P from "./FeatureImage.parts";

interface FeatureImageProps {
    featureData: IllustrationsProjectSectionsImage;
}

export default function FeatureImage({ featureData }: FeatureImageProps) {
    return (
        <P.FeatureWrapper>
            <ColumnDescription source={featureData} />
            <img src={featureData.image} />
        </P.FeatureWrapper>
    );
}
