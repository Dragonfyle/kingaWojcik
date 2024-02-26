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
    $maxWidth = "auto",
    $colGap,
    $rowGap,
    $marginT,
    $marginB,
    $marginL,
    $marginR,
    $padding = "0 0",
    $order,
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
            $maxWidth={$maxWidth}
            $marginT={$marginT}
            $marginB={$marginB}
            $marginL={$marginL}
            $marginR={$marginR}
            $padding={$padding}
            $order={$order}
            {...restProps}>
            {children}
        </P.Flexbox>
    );
}
