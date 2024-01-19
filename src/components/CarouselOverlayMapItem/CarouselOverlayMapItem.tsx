import * as P from "./CarouselOverlayMapItem.parts";
import ProgressBar from "../ProgressBar/ProgressBar";

export default function CarouselOverlayMapItem() {
  return (
    <P.MapItemWrapper>
      <ProgressBar />
      <P.DescriptionWrapper>
        <P.Description>Veniam pariatur.</P.Description>
      </P.DescriptionWrapper>
    </P.MapItemWrapper>
  );
}
