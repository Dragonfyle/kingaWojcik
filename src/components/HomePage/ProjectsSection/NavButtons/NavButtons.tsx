import NextIcon from "$generics/NavIcon/Next/Next";
import PreviousIcon from "$generics/NavIcon/Previous/Previous";
import { NavButtonsProps } from "./NavButtons.types";
import { useThemeContext } from "$contexts/ThemeContext";
import * as P from "./NavButtons.parts";

export default function NavButtons({ onNextProject, onPreviousProject, isFirstIndex, isLastIndex }: NavButtonsProps) {
    const {
        theme: { colors },
    } = useThemeContext();

    return (
        <P.ButtonsWrapper>
            <PreviousIcon
                $color={colors.leading.secondary[2]}
                $size="50px"
                onClick={onPreviousProject}
                isDisabled={isFirstIndex}
            />
            <NextIcon
                $color={colors.leading.secondary[2]}
                $size="100px"
                onClick={onNextProject}
                isDisabled={isLastIndex}
            />
        </P.ButtonsWrapper>
    );
}
