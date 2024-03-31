import { PropsWithChildren } from "react";
import { ColorOption } from "styled-components";

interface NavigationItemProps extends PropsWithChildren {
    onClick?: () => void;
    to?: string;
    backgroundColor?: ColorOption;
}

interface StyledNavigationItemProps {
    $backgroundColor?: ColorOption;
}

export type { NavigationItemProps, StyledNavigationItemProps };
