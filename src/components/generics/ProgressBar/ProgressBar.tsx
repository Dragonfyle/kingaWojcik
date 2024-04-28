import { useCarouselContext } from "$contexts/CarouselContext";

import { ProgressBarProps } from "./ProgressBar.types";
import * as P from "./ProgressBar.parts";

export default function ProgressBar({ isActive }: ProgressBarProps) {
    const { progress } = useCarouselContext();

    return (
        <P.ProgressBarContainer>
            <P.ProgressBarFiller $isActive={isActive} $progress={progress} />
        </P.ProgressBarContainer>
    );
}
