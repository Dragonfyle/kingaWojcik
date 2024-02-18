import * as P from "./NavButtons.parts";
import Next from "../../../generics/NavIcon/Next/Next";
import Previous from "../../../generics/NavIcon/Previous/Previous";

interface NavButtonsProps {
    onNextProject: () => void;
    onPreviousProject: () => void;
}

export default function NavButtons({ onNextProject, onPreviousProject }: NavButtonsProps) {
    return (
        <P.ButtonsWrapper>
            <Previous $size="50px" onClick={onPreviousProject} />
            <Next $size="50px" onClick={onNextProject} />
        </P.ButtonsWrapper>
    );
}
