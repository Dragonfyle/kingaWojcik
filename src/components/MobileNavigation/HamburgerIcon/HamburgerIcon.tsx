/// <reference types="vite-plugin-svgr/client" />
import Hamburger from "../../../assets/icons/hamburger.svg?react";
import * as P from "./HamburgerIcon.parts";
import { HamburgerIconProps } from "./HamburgerIcon.types";

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
