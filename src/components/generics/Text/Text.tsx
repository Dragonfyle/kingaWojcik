import { forwardRef } from "react";

import { TextProps } from "./Text.types";

const Text = forwardRef<HTMLParagraphElement, TextProps>(function Text(
    {
        color = "black",
        lineHeight = 1.6,
        underline = false,
        uppercase = true,
        bold = false,
        italic = false,
        align = "left",
        Tag = "p",
        children,
        className,
    },
    forwardedRef
) {
    return (
        <Tag
            ref={forwardedRef}
            style={{
                color: color,
                lineHeight: lineHeight,
                textDecoration: underline ? "underline" : "none",
                textTransform: uppercase ? "uppercase" : "none",
                fontWeight: bold ? "bold" : "normal",
                fontStyle: italic ? "italic" : "normal",
                textAlign: align,
                textWrap: "wrap",
            }}
            className={className}>
            {children}
        </Tag>
    );
});

export default Text;
