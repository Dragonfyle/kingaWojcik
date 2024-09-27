import Image from "next/image";

import { ColumnDescription } from "../ColumnDescription/";
import { FeatureImageProps } from "./FeatureImage.types";

export default function FeatureImage({ featureData }: FeatureImageProps) {
    const { header, optionalDescription, descriptionPosition, imageHeight, imageWidth } = featureData;

    return (
        <section className="flex w-full flex-col">
            <Image
                alt="grafika prezentująca projekt"
                width={imageWidth}
                height={imageHeight}
                sizes="(min-width: 1024px) 87vw, (min-width: 1250px) 72vw, (min-width: 1440px) 80vw, (min-width: 1600px) 71vw,95vw"
                src={featureData.image}
                className="w-auto"
            />

            <ColumnDescription
                header={header}
                description={optionalDescription}
                descriptionPosition={descriptionPosition as "top" | "bottom"}
            />
        </section>
    );
}
