// import { breakpointsNoMedia } from "../../styles/breakpoints";
import CarouselOverlay from "./CarouselOverlay/CarouselOverlay";
import { useCarouselContext } from "../contexts/CarouselContext/CarouselContext";
import CarouselSlide from "./CarouselSlide/CarouselSlide";
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
