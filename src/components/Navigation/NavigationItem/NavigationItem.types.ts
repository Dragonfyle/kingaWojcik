import { PropsWithChildren } from "react";
import { ColorOption } from "styled-components";

interface NavigationItemProps extends PropsWithChildren {
    label: string;
    onClick?: () => void;
    isLink?: boolean;
    to?: string;
    backgroundColor?: ColorOption;
}

interface StyledNavigationItemProps {
    $backgroundColor?: ColorOption;
}

export type { NavigationItemProps, StyledNavigationItemProps };
