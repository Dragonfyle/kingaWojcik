interface MenuCrossProps {
    bgColor?: string;
    fgColor?: string;
    size?: string;
    onClick?: () => void;
}

interface StyledMenuCrossProps {
    $bgColor?: string;
    $fgColor?: string;
    $size?: string;
}

export type { MenuCrossProps, StyledMenuCrossProps };
