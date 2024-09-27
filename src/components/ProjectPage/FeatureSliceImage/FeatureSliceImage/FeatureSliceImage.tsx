import Image from "next/image";

import { FeatureSliceImageProps } from "./FeatureSliceImage.types";

export default function FeatureSliceImage({ src, width, height, defaultOrder }: FeatureSliceImageProps) {
    const defaultOrderClass = defaultOrder === 1 ? "m:order-1" : "m:-order-1";

    return (
        <div className={`order-1 flex flex-col flex-nowrap ${defaultOrderClass}`}>
            <Image loading="lazy" src={src} width={width} height={height} alt={"grafika prezentująca projekt"} />
        </div>
    );
}
