// import { breakpointsNoMedia } from "../../styles/breakpoints";
import * as P from "./Carousel.parts";
import CarouselOverlay from "../CarouselOverlay/CarouselOverlay";
import CarouselSlide from "../CarouselSlide/CarouselSlide";
import CarouselContextProvider from "../CarouselContext/CarouselContext";

export default function Carousel() {
  return (
    <CarouselContextProvider>
      <P.CarouselWrapper>
        <CarouselSlide />
        <CarouselOverlay />
      </P.CarouselWrapper>
    </CarouselContextProvider>
  );
}
