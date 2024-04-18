import NextIcon from "$components/generics/NavIcon/Next/Next";
import PreviousIcon from "$components/generics/NavIcon/Previous/Previous";
import * as P from "./ProjectNavButton.parts";

export default function ProjectNavButtons({ onNextProject, onPreviousProject }) {
    return (
        <P.ButtonsWrapper>
            <PreviousIcon $size="50px" onClick={onPreviousProject} />
            <NextIcon $size="50px" onClick={onNextProject} />
        </P.ButtonsWrapper>
    );
}
