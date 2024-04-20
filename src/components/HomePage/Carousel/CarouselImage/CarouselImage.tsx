import { MouseEvent, useRef } from "react";
import { ImageSet } from "../CarouselSlide/CarouselSlide.utils";
import { WIDTH_THRESHOLDS } from "../CarouselSlide/CarouselSlide.utils";
import { useCarouselContext } from "../../contexts/CarouselContext/CarouselContext";
import { activeImageMap, wspolpraca } from "../CarouselSlide/CarouselSlide.utils";
import * as P from "./CarouselImage.parts";

interface CarouselImage extends React.PropsWithChildren {
    isActive: boolean;
    imageSet: ImageSet;
}

export default function CarouselImage({ isActive, imageSet }: CarouselImage) {
    const { activeImage } = useCarouselContext();
    const { startCarousel, stopCarousel } = useCarouselContext();
    const imgRef = useRef(null);
    const activeImageSet = activeImageMap.get(activeImage) || wspolpraca;
    const largestImageIndex = activeImageSet.length - 1;

    function generateSources(imageSet: ImageSet) {
        return imageSet
            .filter((_, idx) => idx !== largestImageIndex)
            .map((image, idx) => <source key={activeImage + idx} srcSet={image} media={WIDTH_THRESHOLDS[idx]} />);
    }

    function handleMouseOver(e: MouseEvent<HTMLImageElement>) {
        if (e.target === imgRef.current) {
            stopCarousel();
        }
    }

    return (
        <P.StyledPicture $isActive={isActive}>
            {generateSources(imageSet)}
            <img
                src={imageSet[largestImageIndex]}
                ref={imgRef}
                onMouseOver={handleMouseOver}
                onMouseLeave={startCarousel}
            />
        </P.StyledPicture>
    );
}
