import * as P from "./ProgressBar.parts";
import { useCarouselContext } from "../../HomePage/contexts/CarouselContext/CarouselContext";

interface ProgressBarProps {
    isActive: boolean;
}

export default function ProgressBar({ isActive }: ProgressBarProps) {
    const { progress } = useCarouselContext();

    return (
        <P.ProgressBarContainer>
            <P.ProgressBarFiller $isActive={isActive} $progress={progress} />
        </P.ProgressBarContainer>
    );
}
