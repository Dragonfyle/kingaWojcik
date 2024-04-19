import { PropsWithChildren } from "react";

interface MobileNavigationItemProps extends PropsWithChildren {
    to: string;
    onClick?: () => void;
}

export type { MobileNavigationItemProps };
