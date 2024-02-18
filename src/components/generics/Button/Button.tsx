import { PropsWithChildren } from "react";
import * as P from "./Button.parts";

interface ButtonProps extends PropsWithChildren {}

export default function Button({ children }: ButtonProps) {
    return <P.StyledButton>{children}</P.StyledButton>;
}
