import * as P from "./NavButtons.parts";
import Next from "../../../generics/NavIcon/Next/Next";
import Previous from "../../../generics/NavIcon/Previous/Previous";
import { useThemeContext } from "../../../../contexts/ThemeContext";

interface NavButtonsProps {
    onNextProject: () => void;
    onPreviousProject: () => void;
}

export default function NavButtons({ onNextProject, onPreviousProject }: NavButtonsProps) {
    const { theme } = useThemeContext();

    return (
        <P.ButtonsWrapper>
            <Previous
                $bgColor={theme.colors.supplementary[3]}
                $fgColor={theme.colors.leading.main[2]}
                $size="50px"
                onClick={onPreviousProject}
            />
            <Next
                $bgColor={theme.colors.supplementary[3]}
                $fgColor={theme.colors.leading.main[2]}
                $size="50px"
                onClick={onNextProject}
            />
        </P.ButtonsWrapper>
    );
}
