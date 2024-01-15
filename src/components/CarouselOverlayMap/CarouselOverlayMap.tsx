import * as P from "./CarouselOverlayMap.parts";
import CarouselOverlayMapItem from "../CarouselOverlayMapItem/CarouselOverlayMapItem";

export default function CarouseOverlayMap() {
  return (
    <P.MapWrapper>
      <CarouselOverlayMapItem />
      <CarouselOverlayMapItem />
      <CarouselOverlayMapItem />
      <CarouselOverlayMapItem />
      <CarouselOverlayMapItem />
    </P.MapWrapper>
  );
}
