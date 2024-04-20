interface ItemIndicatorProps {
    isActive: boolean;
}

type StyledItemIndicatorProps = {
    [K in keyof ItemIndicatorProps as `$${string & K}`]: ItemIndicatorProps[K];
};

export type { ItemIndicatorProps, StyledItemIndicatorProps };
