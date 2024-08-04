import { useCarouselContext } from "$contexts/CarouselContext";
import ProgressBar from "$generics/ProgressBar/ProgressBar";

import { CarouselOverlayMapItemProps } from "./CarouselOverlayMapItem.types";
import Text from "$components/generics/Text";
import * as P from "./CarouselOverlayMapItem.parts";

export default function CarouselOverlayMapItem({ isActive, description, imageIndex }: CarouselOverlayMapItemProps) {
    const { setProgress, setActiveImage } = useCarouselContext();
    const isClickable = imageIndex !== null;

    function clickHandler() {
        if (imageIndex === null) {
            return;
        }
        setActiveImage(imageIndex);
        setProgress(0);
    }

    return (
        <P.MapItemWrapper $isActive={isActive} {...(isClickable && { onClick: clickHandler })}>
            <ProgressBar isActive={isActive} />
            <P.DescriptionWrapper>
                <Text>{description}</Text>
            </P.DescriptionWrapper>
        </P.MapItemWrapper>
    );
}
