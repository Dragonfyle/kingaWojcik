interface NavIconProps {
    $bgColor?: string;
    $fgColor?: string;
    $size?: string;
    tooltipValue?: string;
    onClick: () => void;
}

type StyledIconProps = Omit<NavIconProps, "ocClick">;

export type { NavIconProps, StyledIconProps };
