import { FeatureImageContent } from "../../../types/Project.types";
import { ColumnDescription } from "../ColumnDescription/ColumnDescription";
import { SingleImageProps, descriptionPositionMap } from "../Columns.utils";
import * as P from "./SingleImage.parts";

export default function SingleImage({
    source,
    withH1 = true,
    withDescription = false,
    descriptionPosition = "bottom",
}: SingleImageProps) {
    const content = source.content as FeatureImageContent;

    return (
        <P.FeatureWrapper>
            {withDescription && (
                <ColumnDescription
                    withH1={withH1}
                    h1={content.h1}
                    description={content.description}
                    order={descriptionPositionMap[descriptionPosition]}
                />
            )}
            <img src={content.img} />
        </P.FeatureWrapper>
    );
}
