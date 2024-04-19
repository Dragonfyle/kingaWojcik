import { PropsWithChildren } from "react";
import { useThemeContext } from "../../../contexts/ThemeContext";
import Text from "../Text/Text";
import * as P from "./Button.parts";

interface ButtonProps extends PropsWithChildren {
    isActive: boolean;
    onClick: () => void;
}

export default function Button({ children, isActive, onClick }: ButtonProps) {
    const { theme } = useThemeContext();
    const color = isActive ? theme.colors.leading.main[2] : theme.colors.white[1];

    return (
        <P.StyledButton $isActive={isActive} onClick={onClick}>
            <Text size="ms" uppercase italic color={color} whiteSpace="nowrap">
                {children}
            </Text>
        </P.StyledButton>
    );
}
