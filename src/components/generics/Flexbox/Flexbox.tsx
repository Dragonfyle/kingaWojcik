import { FlexboxProps } from "./Flexbox.types";

export default function Flexbox({
    $wrap = "wrap",
    $order = 0,
    className,
    children,
    ...restProps
}: React.PropsWithChildren<FlexboxProps<HTMLDivElement>>) {
    return (
        <div
            style={{
                display: "flex",
                flexWrap: $wrap,
                order: $order,
            }}
            className={className}
            {...restProps}>
            {children}
        </div>
    );
}
