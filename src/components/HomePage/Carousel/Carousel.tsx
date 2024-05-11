import CarouselSlide from "./CarouselSlide/CarouselSlide";
import CarouselOverlay from "./CarouselOverlay/";
import * as P from "./Carousel.parts";

export default function Carousel() {
    return (
        <P.CarouselWrapper>
            <CarouselSlide />
            <CarouselOverlay />
        </P.CarouselWrapper>
    );
}
