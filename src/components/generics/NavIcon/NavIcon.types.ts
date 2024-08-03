interface NavIconProps {
    $color: string;
    $size?: string;
    tooltipValue?: string;
    onClick: () => void;
    isDisabled?: boolean;
}

type StyledIconProps = Omit<NavIconProps, "ocClick">;

export type { NavIconProps, StyledIconProps };
