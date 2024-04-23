import { useThemeContext } from "src/contexts/ThemeContext";
import Text from "$generics/Text/Text";
import * as P from "./Highlight.parts";

interface HighlightProps {
    source: string;
}

export default function Highlight({ source }: HighlightProps) {
    const {
        theme: {
            colors: { supplementary },
        },
    } = useThemeContext();

    return (
        <P.HighlightWrapper>
            <P.TextWrapper>
                <Text tag="h4" color={supplementary[3]} size="l" lineHeight={1.4}>
                    {source}
                </Text>
            </P.TextWrapper>
        </P.HighlightWrapper>
    );
}
