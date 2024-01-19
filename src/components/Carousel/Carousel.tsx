import wspolpraca from "../../../public/wspolpraca.png";
import * as P from "./Carousel.parts";
import CarouselOverlay from "../CarouselOverlay/CarouselOverlay";

export default function Carousel() {
  return (
    <P.Wrapper>
      <P.StyledImg src={wspolpraca} />
      <CarouselOverlay />
    </P.Wrapper>
  );
}
