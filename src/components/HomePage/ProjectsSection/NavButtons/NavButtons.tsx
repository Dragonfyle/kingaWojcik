import * as P from "./NavButtons.parts";
import NavIcon from "../../../generics/NavIcon/NavIcon";

interface NavButtonsProps {
    onNextProject: () => void;
    onPreviousProject: () => void;
}

export default function NavButtons({ onNextProject, onPreviousProject }: NavButtonsProps) {
    return (
        <P.ButtonsWrapper>
            <NavIcon name="previous" color="#F1DB13" size={50} onClick={onPreviousProject} />
            <NavIcon name="next" color="#F1DB13" size={50} onClick={onNextProject} />
        </P.ButtonsWrapper>
    );
}
