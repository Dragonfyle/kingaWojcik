export interface FlexboxProps<T extends HTMLElement> extends React.HTMLAttributes<T> {
    children: React.ReactNode;
    $direction?: "row" | "column" | "row-reverse" | "column-reverse";
    className?: string;
    $alignI?:
        | "normal"
        | "stretch"
        | "center"
        | "start"
        | "end"
        | "flex-start"
        | "flex-end"
        | "self-start"
        | "self-end"
        | "baseline"
        | "first baseline"
        | "last baseline"
        | "safe center"
        | "unsafe"
        | "inherit"
        | "initial"
        | "revert"
        | "revert-layer"
        | "unset";
    $alignC?:
        | "normal"
        | "stretch"
        | "center"
        | "start"
        | "end"
        | "flex-start"
        | "flex-end"
        | "self-start"
        | "self-end"
        | "baseline"
        | "first baseline"
        | "last baseline"
        | "space-between"
        | "space-around"
        | "space-evenly"
        | "safe center"
        | "unsafe center"
        | "inherit"
        | "initial"
        | "revert"
        | "revert-layer"
        | "unset";
    $justify?:
        | "center"
        | "start"
        | "end"
        | "flex-start"
        | "flex-end"
        | "left"
        | "right"
        | "normal"
        | "space-between"
        | "space-around"
        | "space-evenly"
        | "stretch"
        | "safe center"
        | "unsafe center"
        | "inherit"
        | "initial"
        | "revert"
        | "revert-layer"
        | "unset";
    $colGap?: string;
    $rowGap?: string;
    $wrap?: "wrap" | "nowrap" | "wrap-reverse";
    $width?: string;
    $maxWidth?: string;
    $marginT?: string;
    $marginB?: string;
    $marginL?: string;
    $marginR?: string;
    $padding?: string;
    $alignSelf?: "start" | "end" | "center";
    $justifySelf?: "start" | "end" | "center";
    $order?: number;
}

export type StyledFlexboxProps = Omit<FlexboxProps<HTMLElement>, "className">;
