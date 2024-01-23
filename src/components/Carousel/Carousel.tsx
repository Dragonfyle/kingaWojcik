// import { breakpointsNoMedia } from "../../styles/breakpoints";
import CarouselContextProvider from "../CarouselContext/CarouselContext";
import wspolpracaXXL from "/wspolpraca2560.png";
import wspolpracaL from "/wspolpraca1920.png";
import wspolpracaM from "/wspolpraca1024.png";
import wspolpracaS from "/wspolpraca640.png";
import * as P from "./Carousel.parts";
import CarouselOverlay from "../CarouselOverlay/CarouselOverlay";

const images = [wspolpracaXXL, wspolpracaL, wspolpracaM, wspolpracaS];
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
            <P.StyledSource
              srcSet={wspolpracaXXL}
              media="(min-width: 1921px)"
            />
            <P.StyledSource srcSet={wspolpracaL} media="(min-width: 1025px)" />
            <P.StyledSource srcSet={wspolpracaM} media="(min-width: 641px)" />
            <P.StyledSource srcSet={wspolpracaS} media="(max-width: 640px)" />
            <P.StyledImg src={wspolpracaL} />
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
