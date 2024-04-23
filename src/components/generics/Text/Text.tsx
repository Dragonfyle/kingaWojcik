import { forwardRef } from "react";

import { TextProps } from "./Text.utils";
import * as P from "./Text.parts";

const Text = forwardRef<HTMLParagraphElement, TextProps>(function Text(
    {
        size = "m",
        color = "black",
        lineHeight = 1.6,
        underline = false,
        uppercase = false,
        bold = false,
        italic = false,
        align = "left",
        whiteSpace = "normal",
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
            $color={color}
            $lineHeight={lineHeight}
            $underline={underline}
            $uppercase={uppercase}
            $bold={bold}
            $italic={italic}
            $align={align}
            $whiteSpace={whiteSpace}
            className={className}>
            {children}
        </P.StyledText>
    );
});

export default Text;
