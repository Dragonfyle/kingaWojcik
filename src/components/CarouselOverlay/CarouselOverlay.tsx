import * as P from "./CarouselOverlay.parts";
import CarouseOverlayMap from "../CarouselOverlayMap/CarouselOverlayMap";

export default function CarouselOverlay() {
  return (
    <P.OverlayWrapper>
      <CarouseOverlayMap />
    </P.OverlayWrapper>
  );
}
