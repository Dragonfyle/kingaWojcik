import * as P from "./Flexbox.parts";
import { WithTagVariant } from "../../../types/common";
import { FlexboxProps } from "./Flexbox.utils";

export default function Flexbox<T extends HTMLElement>({
    tag = "div",
    $direction = "row",
    $justify = "normal",
    $align = "normal",
    $wrap = "wrap",
    $width = "100%",
    $colGap,
    $rowGap,
    className,
    children,
    ...restProps
}: React.PropsWithChildren<WithTagVariant<FlexboxProps<T>>>) {
    return (
        <P.Flexbox
            $align={$align}
            $direction={$direction}
            $justify={$justify}
            className={className}
            as={tag}
            $colGap={$colGap}
            $rowGap={$rowGap}
            $wrap={$wrap}
            $width={$width}
            {...restProps}>
            {children}
        </P.Flexbox>
    );
}
