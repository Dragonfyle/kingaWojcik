import NextIcon from "$components/generics/NavIcon/Next/Next";
import PreviousIcon from "$components/generics/NavIcon/Previous/Previous";
import { useThemeContext } from "$contexts/ThemeContext";

import { ProjectNavigationProps } from "../ProjectNavigation/ProjectNavigation.types";
import * as P from "./ProjectNavButton.parts";

export default function ProjectNavButtons({
    onNextProject,
    onPreviousProject,
    nextProjectName,
    previousProjectName,
}: ProjectNavigationProps) {
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
                tooltipValue={previousProjectName}
            />
            <NextIcon
                $size="40px"
                $bgColor={colors.leading.secondary[2]}
                $fgColor={colors.white[1]}
                onClick={onNextProject}
                tooltipValue={nextProjectName}
            />
        </P.ButtonsWrapper>
    );
}
