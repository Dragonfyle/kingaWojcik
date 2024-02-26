import Text from "../../../generics/Text/Text";
import * as P from "./Highlight.parts";

interface HighlightProps {
    source: string;
}

export default function Highlight({ source }: HighlightProps) {
    return (
        <P.HighlightWrapper>
            <Text size="xl" lineHeight={1.4}>
                {source}
            </Text>
        </P.HighlightWrapper>
    );
}
