import Image from "next/image";

import { FeatureSliceImageProps } from "./FeatureSliceImage.types";

export default function FeatureSliceImage({ src, width, height }: FeatureSliceImageProps) {
    return (
        <div className="flex flex-col flex-nowrap">
            <Image loading="lazy" src={src} width={width} height={height} alt={"grafika prezentująca projekt"} />
        </div>
    );
}
