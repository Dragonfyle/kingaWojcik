/// <reference types="vite-plugin-svgr/client" />
import IconNext from "../../../../assets/icons/next.svg?react";
import { NavIconProps } from "../NavIcon.utils";
import * as P from "./Next.parts";

export default function NavIcon({ $bgColor = "#F1DB13", $fgColor = "black", $size, onClick }: NavIconProps) {
    return (
        <P.StyledSvg $bgColor={$bgColor} $fgColor={$fgColor} $size={$size} onClick={onClick}>
            <IconNext />
        </P.StyledSvg>
    );
}
