import { useThemeContext } from "src/contexts/ThemeContext";
import Text from "$generics/Text/Text";
import * as P from "./Highlight.parts";
import { HighlightProps } from "./Highlight.types";

export default function Highlight({ source }: HighlightProps) {
    const {
        theme: {
            colors: { white },
        },
    } = useThemeContext();

    return (
        <P.HighlightWrapper>
            <P.TextWrapper>
                <Text tag="h4" color={white[1]} size="l" lineHeight={1.4}>
                    {source}
                </Text>
            </P.TextWrapper>
        </P.HighlightWrapper>
    );
}
