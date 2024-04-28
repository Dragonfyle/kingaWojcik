import { useCarouselContext } from "$contexts/CarouselContext";

import { activeImageMap, wspolpraca, ImageSet, WIDTH_THRESHOLDS } from "../CarouselSlide/CarouselSlide.utils";
import { CarouselImageProps } from "./CarouselImage.types";
import * as P from "./CarouselImage.parts";

export default function CarouselImage({ isActive, imageSet }: CarouselImageProps) {
    const { activeImage } = useCarouselContext();
    const activeImageSet = activeImageMap.get(activeImage) || wspolpraca;
    const largestImageIndex = activeImageSet.length - 1;

    function generateSources(imageSet: ImageSet) {
        return imageSet
            .filter((_, idx) => idx !== largestImageIndex)
            .map((image, idx) => <source key={activeImage + idx} srcSet={image} media={WIDTH_THRESHOLDS[idx]} />);
    }

    return (
        <P.StyledPicture $isActive={isActive}>
            {generateSources(imageSet)}
            <img src={imageSet[largestImageIndex]} />
        </P.StyledPicture>
    );
}
