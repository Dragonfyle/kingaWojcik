import { PropsWithChildren } from "react";
import * as P from "./Button.parts";

interface ButtonProps extends PropsWithChildren {
    isActive: boolean;
    onClick: () => void;
}

export default function Button({ children, isActive, onClick }: ButtonProps) {
    return (
        <P.StyledButton $isActive={isActive} onClick={onClick}>
            {children}
        </P.StyledButton>
    );
}
