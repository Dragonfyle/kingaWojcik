import * as P from "./CarouselOverlayMap.parts";
import CarouselOverlayMapItem from "../CarouselOverlayMapItem/CarouselOverlayMapItem";
import { MAP_ITEM_DESCRIPTIONS } from "../../data/TopCarouselData";
import { useCarouselContext } from "../CarouselContext/CarouselContext";
import { useDeviceContext } from "../DeviceContext/DeviceContext";

export default function CarouselOverlayMap() {
  const { isMobile } = useDeviceContext();
  const { activeImage } = useCarouselContext();
  function generateMapItems(mapItemDescriptions: string[]) {
    if (isMobile) {
      return <CarouselOverlayMapItem isActive={true} description={""} />;
    } else {
      return mapItemDescriptions.map((descritption, idx) => (
        <CarouselOverlayMapItem
          key={descritption}
          isActive={activeImage === idx}
          description={descritption}
        />
      ));
    }
  }

  return <P.MapWrapper>{generateMapItems(MAP_ITEM_DESCRIPTIONS)}</P.MapWrapper>;
}
