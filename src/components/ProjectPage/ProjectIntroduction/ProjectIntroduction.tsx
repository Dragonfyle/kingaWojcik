import Text from "../../generics/Text/Text";
import * as P from "./ProjectIntroduction.parts";
import { GalleryProject } from "../../../types/common";

export default function ProjectIntroduction({
    source,
    withDescription,
}: {
    source: GalleryProject;
    withDescription: boolean;
}) {
    return (
        <P.SummaryWrapper>
            <Text bold size="2xl">
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
