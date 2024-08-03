import * as P from "./NavButtons.parts";
import NextIcon from "$generics/NavIcon/Next/Next";
import PreviousIcon from "$generics/NavIcon/Previous/Previous";
import { NavButtonsProps } from "./NavButtons.types";

export default function NavButtons({ onNextProject, onPreviousProject, isFirstIndex, isLastIndex }: NavButtonsProps) {
    return (
        <P.ButtonsWrapper>
            <PreviousIcon $size="50px" onClick={onPreviousProject} isDisabled={isFirstIndex} />
            <NextIcon $size="100px" onClick={onNextProject} isDisabled={isLastIndex} />
        </P.ButtonsWrapper>
    );
}
