import Text from "$generics/Text/Text";
import * as P from "./ProjectIntroduction.parts";
import { ProjectIntroductionProps } from "./ProjectIntroduction.types";

export default function ProjectIntroduction({ projectData }: ProjectIntroductionProps) {
    const withDescription = "intro" in projectData;

    return (
        <P.SummaryWrapper>
            <Text tag="h1" bold size="2xl">
                {projectData.title}
            </Text>
            {withDescription && (
                <P.DescriptionWrapper>
                    <Text size="l">{projectData.intro}</Text>
                </P.DescriptionWrapper>
            )}
        </P.SummaryWrapper>
    );
}
