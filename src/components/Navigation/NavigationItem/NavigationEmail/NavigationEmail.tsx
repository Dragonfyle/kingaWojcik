import Text from "../../../generics/Text/Text";
import { NavigationEmailProps } from "./NavigationEmail.types";
import * as P from "./NavigationEmail.parts";
import { CONFIG } from "src/constants/config";

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
