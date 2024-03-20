interface HamburgerIconProps {
    size: string;
    bgColor: string;
    fgColor: string;
    onClick: () => void;
}

interface StyledHamburgerIconProps {
    $size: string;
    $bgColor: string;
    $fgColor: string;
}

export type { StyledHamburgerIconProps, HamburgerIconProps };
