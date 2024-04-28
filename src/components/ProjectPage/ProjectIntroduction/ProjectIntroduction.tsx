import Text from "$generics/Text/Text";
import * as P from "./ProjectIntroduction.parts";
import { ProjectIntroductionProps } from "./ProjectIntroduction.types";

export default function ProjectIntroduction({ source, withDescription }: ProjectIntroductionProps) {
    return (
        <P.SummaryWrapper>
            <Text tag="h1" bold size="2xl">
                {source.header}
            </Text>
            {withDescription && (
                <P.DescriptionWrapper>
                    <Text size="l">{source.intro}</Text>
                </P.DescriptionWrapper>
            )}
        </P.SummaryWrapper>
    );
}
