import * as P from "./CarouselOverlayMap.parts";
import CarouselOverlayMapItem from "../CarouselOverlayMapItem/CarouselOverlayMapItem";
import { MAP_ITEM_DESCRIPTIONS } from "../../data/TopCarouselData";
import { useCarouselContext } from "../CarouselContext/CarouselContext";

export default function CarouseOverlayMap() {
  const { activeImage } = useCarouselContext();
  function generateMapItems(mapItemDescriptions: string[]) {
    return mapItemDescriptions.map((descritption, idx) => (
      <CarouselOverlayMapItem
        key={descritption}
        isActive={activeImage === idx}
        description={descritption}
      />
    ));
  }

  return <P.MapWrapper>{generateMapItems(MAP_ITEM_DESCRIPTIONS)}</P.MapWrapper>;
}
