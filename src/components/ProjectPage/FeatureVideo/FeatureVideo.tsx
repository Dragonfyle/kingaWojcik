import { ColumnDescription } from "../ColumnDescription/";
import { FeatureVideoProps } from "./FeatureVideo.types";

export default function FeatureVideo({ featureData }: FeatureVideoProps) {
    const { header, optionalDescription, descriptionPosition } = featureData;

    return (
        <section className="flex flex-col">
            <ColumnDescription
                header={header}
                description={optionalDescription}
                descriptionPosition={descriptionPosition as "top" | "bottom"}
            />
            <video className="object-contain" controls>
                <source src={featureData.videoUrl || ""} type="video/mp4" />
            </video>
        </section>
    );
}
