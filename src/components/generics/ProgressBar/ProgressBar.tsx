import { useCarouselContext } from "$contexts/CarouselContext";

import * as P from "./ProgressBar.parts";

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
