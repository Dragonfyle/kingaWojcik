import * as P from "./NavButtons.parts";
import NavIcon from "../../../generics/NavIcon/NavIcon";

export default function NavButtons() {
    return (
        <P.ButtonsWrapper>
            <NavIcon name="previous" color="#F1DB13" size={50} />
            <NavIcon name="next" color="#F1DB13" size={50} />
        </P.ButtonsWrapper>
    );
}
