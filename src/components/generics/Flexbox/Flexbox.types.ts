export interface FlexboxProps<T extends HTMLElement> extends React.HTMLAttributes<T> {
    children: React.ReactNode;
    className?: string;
    $wrap?: "wrap" | "nowrap" | "wrap-reverse";
    $order?: number;
}

export type StyledFlexboxProps = Omit<FlexboxProps<HTMLElement>, "className">;
