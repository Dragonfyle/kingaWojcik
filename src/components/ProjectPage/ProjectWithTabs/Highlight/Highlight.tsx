import Text from "../../../generics/Text/Text";
import * as P from "./Highlight.parts";

interface HighlightProps {
    source: string;
}

export default function Highlight({ source }: HighlightProps) {
    return (
        <P.HighlightWrapper>
            <P.TextWrapper>
                <Text size="l" lineHeight={1.4}>
                    {source}
                </Text>
            </P.TextWrapper>
        </P.HighlightWrapper>
    );
}
