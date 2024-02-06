import * as P from "./NavIcon.parts";
import Icons from "../../../assets/Icons.svg";

interface NavIcon {
    name: string;
    color: string;
    size: number;
    onClick: () => void;
}

export default function NavIcon({ name, color, size, onClick }: NavIcon) {
    return (
        <P.StyledSvg fill={color} width={size} height={size} onClick={onClick}>
            <use href={`${Icons}#icon-${name}`} />
        </P.StyledSvg>
    );
}
