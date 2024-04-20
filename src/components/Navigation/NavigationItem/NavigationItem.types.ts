import { PropsWithChildren } from "react";

interface NavigationItemProps extends PropsWithChildren {
    onClick?: () => void;
    to?: string;
}

export type { NavigationItemProps };
