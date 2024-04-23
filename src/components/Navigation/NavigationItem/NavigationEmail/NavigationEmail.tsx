import { CONFIG } from "$constants/config";
import Text from "$generics/Text/Text";

import * as P from "./NavigationEmail.parts";
import { NavigationEmailProps } from "./NavigationEmail.types";

export default function NavigationEmail({ children, onClick, backgroundColor }: NavigationEmailProps) {
    return (
        <P.EmailWrapper onClick={onClick} $backgroundColor={backgroundColor}>
            <Text lineHeight={1.5} size="ms">
                {CONFIG.EMAIL}
            </Text>
            {children}
        </P.EmailWrapper>
    );
}
