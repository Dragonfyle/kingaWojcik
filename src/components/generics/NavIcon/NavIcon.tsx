import * as P from "./NavIcon.parts";
import Icons from "../../../assets/Icons.svg";

interface NavIcon {
    name: string;
    color: string;
    size: number;
}

export default function NavIcon({ name, color, size }: NavIcon) {
    return (
        <P.StyledSvg fill={color} width={size} height={size}>
            <use href={`${Icons}#icon-${name}`} />
        </P.StyledSvg>
    );
}
