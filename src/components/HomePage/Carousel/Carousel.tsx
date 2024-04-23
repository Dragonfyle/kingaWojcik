import { useCarouselContext } from "$contexts/CarouselContext";

import CarouselSlide from "./CarouselSlide/CarouselSlide";
import CarouselOverlay from "./CarouselOverlay/";
import * as P from "./Carousel.parts";

export default function Carousel() {
    const { startCarousel, stopCarousel } = useCarouselContext();

    function handleMouseOver() {
        stopCarousel();
    }

    return (
        <P.CarouselWrapper onMouseOverCapture={handleMouseOver} onMouseLeave={startCarousel}>
            <CarouselSlide />
            <CarouselOverlay />
        </P.CarouselWrapper>
    );
}
