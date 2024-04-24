import NextIcon from "$components/generics/NavIcon/Next/Next";
import PreviousIcon from "$components/generics/NavIcon/Previous/Previous";
import { CONFIG } from "$constants/config";
import { useThemeContext } from "$contexts/ThemeContext";

import { ProjectNavigationProps } from "../ProjectNavigation/ProjectNavigation.types";
import * as P from "./ProjectNavButton.parts";

export default function ProjectNavButtons({ onNextProject, onPreviousProject }: ProjectNavigationProps) {
    const {
        theme: { colors },
    } = useThemeContext();

    return (
        <P.ButtonsWrapper>
            <PreviousIcon
                $size="40px"
                $bgColor={colors.leading.secondary[2]}
                $fgColor={colors.white[1]}
                onClick={onPreviousProject}
                tooltipValue={CONFIG.PROJECT_PAGE.NAVIGATION_PREVIOUS_TOOLTIP}
            />
            <NextIcon
                $size="40px"
                $bgColor={colors.leading.secondary[2]}
                $fgColor={colors.white[1]}
                onClick={onNextProject}
                tooltipValue={CONFIG.PROJECT_PAGE.NAVIGATION_NEXT_TOOLTIP}
            />
        </P.ButtonsWrapper>
    );
}
