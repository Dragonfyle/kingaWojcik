import { PropsWithChildren } from "react";

interface ButtonProps extends PropsWithChildren {
    isActive: boolean;
    onClick: () => void;
}

export type { ButtonProps };
