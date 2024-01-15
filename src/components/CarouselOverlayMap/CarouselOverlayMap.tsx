import * as P from "./CarouselOverlayMap.parts";
import CarouselOverlayMapItem from "../CarouselOverlayMapItem/CarouselOverlayMapItem";

export default function CarouseOverlayMap() {
  return (
    <P.MapContainer>
      <CarouselOverlayMapItem />
      <CarouselOverlayMapItem />
      <CarouselOverlayMapItem />
      <CarouselOverlayMapItem />
      <CarouselOverlayMapItem />
    </P.MapContainer>
  );
}
