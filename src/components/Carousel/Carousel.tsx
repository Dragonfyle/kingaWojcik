// import { breakpointsNoMedia } from "../../styles/breakpoints";
import CarouselContextProvider from "../CarouselContext/CarouselContext";
import wspolpracaXXL from "/wspolpraca2560.png";
import wspolpracaL from "/wspolpraca1920.png";
import wspolpracaM from "/wspolpraca920.png";
import * as P from "./Carousel.parts";
import CarouselOverlay from "../CarouselOverlay/CarouselOverlay";

const images = [wspolpracaXXL, wspolpracaL, wspolpracaM];
//todo
// function generateSources() {
// images.map((image) => <source srcSet={image} media={breakpointsNoMedia.image.})
// }

export default function Carousel() {
  return (
    <CarouselContextProvider numImages={images.length}>
      <P.CarouselWrapper>
        <P.ImgWrapper>
          {/* <P.StyledImg src={wspolpraca} /> */}
          <P.StyledPicture>
            <source srcSet={wspolpracaXXL} media="(min-width: 1921px)" />
            <source srcSet={wspolpracaL} media="(min-width: 901px)" />
            <source srcSet={wspolpracaM} media="(max-width: 900px)" />
            <P.StyledImg src={wspolpracaM} />
            <P.StyledP>
              Quis est incididunt pariatur culpa.Ut ad nostrud nulla
              reprehenderit ullamco do amet sint.
            </P.StyledP>
          </P.StyledPicture>
        </P.ImgWrapper>
        <CarouselOverlay />
      </P.CarouselWrapper>
    </CarouselContextProvider>
  );
}
