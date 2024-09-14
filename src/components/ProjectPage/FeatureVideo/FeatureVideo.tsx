import { IllustrationsProjectSectionsVideo } from "tina/__generated__/types";
import { ColumnDescription } from "../ColumnDescription/";

import * as P from "./FeatureVideo.parts";

interface FeatureVideoProps {
    featureData: IllustrationsProjectSectionsVideo;
}

export default function FeatureVideo({ featureData }: FeatureVideoProps) {
    return (
        <P.FeatureWrapper>
            <ColumnDescription source={featureData} />
            <video controls>
                <source src={featureData.video || ""} type="video/mp4" />
            </video>
        </P.FeatureWrapper>
    );
}
