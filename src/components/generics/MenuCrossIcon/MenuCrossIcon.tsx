/// <reference types="vite-plugin-svgr/client" />
import MenuCrossIcon from "../../../assets/icons/menu-cross.svg?react";
import { MenuCrossProps } from "./MenuCrossIcon.types";
import * as P from "./MenuCrossIcon.parts";

export default function MenuCross({ bgColor = "#F1DB13", fgColor = "black", size, onClick }: MenuCrossProps) {
    return (
        <P.StyledSvg $bgColor={bgColor} $fgColor={fgColor} $size={size} onClick={onClick}>
            <MenuCrossIcon />
        </P.StyledSvg>
    );
}
