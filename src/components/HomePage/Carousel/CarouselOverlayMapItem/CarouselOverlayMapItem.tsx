import * as P from "./CarouselOverlayMapItem.parts";
import ProgressBar from "../../../generics/ProgressBar/ProgressBar";
import { useCarouselContext } from "../../contexts/CarouselContext/CarouselContext";

interface CarouselOverlayMapItemProps {
    isActive: boolean;
    description: string;
    imageIndex: number | null;
}

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
                <p>{description}</p>
            </P.DescriptionWrapper>
        </P.MapItemWrapper>
    );
}
