/// <reference types="vite-plugin-svgr/client" />
import IconNext from "$assets/icons/previous.svg?react";

import { NavIconProps } from "../NavIcon.types";
import * as P from "./Previous.parts";

export default function PreviousIcon({
    $color = "black",
    $size,
    onClick,
    tooltipValue,
    isDisabled = false,
}: NavIconProps) {
    const withTooltip = !!tooltipValue;

    return (
        <>
            <P.StyledSvg $color={$color} $size={$size} onClick={onClick} isDisabled={isDisabled}>
                <IconNext />
            </P.StyledSvg>
            {withTooltip && (
                <P.TooltipWrapper>
                    <P.Tooltip>{tooltipValue}</P.Tooltip>
                </P.TooltipWrapper>
            )}
        </>
    );
}
