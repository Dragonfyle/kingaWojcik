import { forwardRef } from "react";
import { TextProps } from "./Text.utils";
import * as P from "./Text.parts";

const Text = forwardRef<HTMLElement, TextProps>(function Text(
    {
        size = "m",
        variant = "black",
        lineHeight = 1.6,
        underline = false,
        uppercase = false,
        bold = false,
        align = "left",
        tag,
        children,
        className,
    },
    forwardedRef
) {
    return (
        <P.StyledText
            as={tag || "p"}
            ref={forwardedRef}
            $size={size}
            $color={variant}
            $lineHeight={lineHeight}
            $underline={underline}
            $uppercase={uppercase}
            $bold={bold}
            $align={align}
            className={className}>
            {children}
        </P.StyledText>
    );
});

export default Text;
