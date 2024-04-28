import * as P from "./NavButtons.parts";
import NextIcon from "$generics/NavIcon/Next/Next";
import PreviousIcon from "$generics/NavIcon/Previous/Previous";
import { useThemeContext } from "$contexts/ThemeContext";
import { NavButtonsProps } from "./NavButtons.types";

export default function NavButtons({ onNextProject, onPreviousProject }: NavButtonsProps) {
    const { theme } = useThemeContext();

    return (
        <P.ButtonsWrapper>
            <PreviousIcon
                $bgColor={theme.colors.supplementary[3]}
                $fgColor={theme.colors.leading.main[2]}
                $size="50px"
                onClick={onPreviousProject}
            />
            <NextIcon
                $bgColor={theme.colors.supplementary[3]}
                $fgColor={theme.colors.leading.main[2]}
                $size="50px"
                onClick={onNextProject}
            />
        </P.ButtonsWrapper>
    );
}
