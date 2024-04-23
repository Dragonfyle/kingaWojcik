import { MAP_ITEM_DESCRIPTIONS } from "$data/TopCarouselData";
import { useCarouselContext } from "$contexts/CarouselContext";
import { useDeviceContext } from "$contexts/DeviceContext";

import CarouselOverlayMapItem from "../CarouselOverlayMapItem/";
import * as P from "./CarouselOverlayMap.parts";

export default function CarouselOverlayMap() {
    const { isMobile } = useDeviceContext();
    const { activeImage } = useCarouselContext();

    function generateMapItems(mapItemDescriptions: typeof MAP_ITEM_DESCRIPTIONS) {
        if (isMobile) {
            return <CarouselOverlayMapItem isActive={true} description={""} imageIndex={null} />;
        } else {
            return mapItemDescriptions.map((descritption, idx) => (
                <CarouselOverlayMapItem
                    key={descritption}
                    isActive={activeImage === idx}
                    description={descritption}
                    imageIndex={idx}
                />
            ));
        }
    }

    return <P.MapWrapper>{generateMapItems(MAP_ITEM_DESCRIPTIONS)}</P.MapWrapper>;
}
