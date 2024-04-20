import { PropsWithChildren } from "react";

interface AboutMeItemProps extends PropsWithChildren {
    to: string;
    onClick?: () => void;
}

export type { AboutMeItemProps };
