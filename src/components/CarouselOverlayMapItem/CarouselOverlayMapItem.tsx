import * as P from "./CarouselOverlayMapItem.parts";
import ProgressBar from "../ProgressBar/ProgressBar";

interface CarouselOverlayMapItemProps {
  description: string;
  isActive: boolean;
}

export default function CarouselOverlayMapItem({
  description,
  isActive,
}: CarouselOverlayMapItemProps) {
  return (
    <P.MapItemWrapper>
      <ProgressBar isActive={isActive} />
      <P.DescriptionWrapper>
        <P.Description>{description}</P.Description>
      </P.DescriptionWrapper>
    </P.MapItemWrapper>
  );
}
