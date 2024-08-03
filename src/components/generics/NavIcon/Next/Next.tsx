/// <reference types="vite-plugin-svgr/client" />
import IconNext from "$assets/icons/next.svg?react";

import { NavIconProps } from "../NavIcon.types";
import * as P from "./Next.parts";

export default function NextIcon({ $color, $size, onClick, tooltipValue, isDisabled }: NavIconProps) {
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
