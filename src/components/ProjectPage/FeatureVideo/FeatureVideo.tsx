import { IllustrationsProjectSectionsVideo } from "tina/__generated__/types";
import { ColumnDescription } from "../ColumnDescription/";

import * as P from "./FeatureVideo.parts";

interface FeatureVideoProps {
    featureData: IllustrationsProjectSectionsVideo;
}

export default function FeatureVideo({ featureData }: FeatureVideoProps) {
    const { header, optionalDescription, descriptionPosition } = featureData;

    return (
        <P.FeatureWrapper>
            <ColumnDescription
                header={header}
                description={optionalDescription}
                descriptionPosition={descriptionPosition as "top" | "bottom"}
            />
            <video controls>
                <source src={featureData.videoUrl || ""} type="video/mp4" />
            </video>
        </P.FeatureWrapper>
    );
}
