import { FeatureImageContent } from "$types/Project.types";
import { ColumnDescription } from "../ColumnDescription/";
import { FeatureImageProps, descriptionPositionMap } from "../Feature.types";

import * as P from "./FeatureImage.parts";

export default function FeatureImage({
    source,
    withH1 = true,
    withDescription = false,
    descriptionPosition = "bottom",
}: FeatureImageProps) {
    const content = source.content as FeatureImageContent;

    return (
        <P.FeatureWrapper>
            <ColumnDescription
                withH1={withH1}
                h1={content.h1}
                withDescription={withDescription}
                description={content.description}
                order={descriptionPositionMap[descriptionPosition]}
            />
            <img src={content.img} />
        </P.FeatureWrapper>
    );
}
