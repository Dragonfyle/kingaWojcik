import { useThemeContext } from "$contexts/ThemeContext";
import Text from "$generics/Text/";

import { ButtonProps } from "./Button.types";
import * as P from "./Button.parts";

export default function Button({ children, isActive, onClick }: ButtonProps) {
    const { theme } = useThemeContext();
    const color = theme.colors.white[1];

    return (
        <P.StyledButton $isActive={isActive} onClick={onClick}>
            <P.ButtonContent>
                <Text tag="span" size="ms" uppercase color={color} whiteSpace="nowrap">
                    {children}
                </Text>
            </P.ButtonContent>
        </P.StyledButton>
    );
}
