import { FeatureVideoContent } from "$types/Project.types";
import { ColumnDescription } from "../ColumnDescription/";
import { FeatureVideoProps, descriptionPositionMap } from "../Feature.types";

import * as P from "./FeatureVideo.parts";

export default function FeatureVideo({
    source,
    withH1 = true,
    withDescription = false,
    descriptionPosition = "bottom",
}: FeatureVideoProps) {
    const content = source.content as FeatureVideoContent;

    return (
        <P.FeatureWrapper>
            <ColumnDescription
                withH1={withH1}
                h1={content.h1}
                withDescription={withDescription}
                description={content.description}
                order={descriptionPositionMap[descriptionPosition]}
            />
            <video controls>
                <source src={content.video} type="video/mp4" />
            </video>
        </P.FeatureWrapper>
    );
}
