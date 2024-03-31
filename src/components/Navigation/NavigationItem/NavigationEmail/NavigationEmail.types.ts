import { PropsWithChildren } from "react";
import { ColorOption } from "styled-components";

interface NavigationEmailProps extends PropsWithChildren {
    onClick?: () => void;
    backgroundColor?: ColorOption;
}

interface StyledNavigationEmailProps {
    $backgroundColor?: ColorOption;
}

export type { NavigationEmailProps, StyledNavigationEmailProps };
