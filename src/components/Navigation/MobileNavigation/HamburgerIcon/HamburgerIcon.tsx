/// <reference types="vite-plugin-svgr/client" />
import Hamburger from "../../../../assets/icons/hamburger.svg?react";
import { HamburgerIconProps } from "./HamburgerIcon.types";
import * as P from "./HamburgerIcon.parts";

export default function HamburgerIcon({
    size = "50px",
    fgColor = "black",
    bgColor = "#F1DB13",
    onClick,
}: HamburgerIconProps) {
    return (
        <P.HamburgerWrapper $size={size} $fgColor={fgColor} $bgColor={bgColor} onClick={onClick}>
            <Hamburger />
        </P.HamburgerWrapper>
    );
}
