// import { breakpointsNoMedia } from "../../styles/breakpoints";
import * as P from "./Carousel.parts";
import CarouselContextProvider from "../CarouselContext/CarouselContext";
import CarouselOverlay from "../CarouselOverlay/CarouselOverlay";
import CarouselImage from "../CarouselImage/CarouselImage";

export default function Carousel() {
  return (
    <CarouselContextProvider>
      <P.CarouselWrapper>
        <CarouselImage />
        <CarouselOverlay />
      </P.CarouselWrapper>
    </CarouselContextProvider>
  );
}
