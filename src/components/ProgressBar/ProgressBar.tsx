import * as P from "./ProgressBar.parts";
import { useCarouselContext } from "../CarouselContext/CarouselContext";

export default function ProgressBar() {
  const { progress } = useCarouselContext();
  console.log(progress);
  return (
    <P.ProgressBarContainer>
      <P.ProgressBarFiller $progress={progress} />
    </P.ProgressBarContainer>
  );
}
