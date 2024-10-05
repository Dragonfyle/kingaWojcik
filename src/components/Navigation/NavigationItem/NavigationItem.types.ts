import { PropsWithChildren } from "react";

interface NavigationItemProps extends PropsWithChildren {
    onClick?: () => void;
    to?: string;
    className?: string;
}

export type { NavigationItemProps };
