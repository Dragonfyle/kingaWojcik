import Text from "../../../generics/Text/Text";
import * as P from "./ProjectIntroduction.parts";
import { GalleryProject } from "../../../../data/TabbedGalleryData";

export default function ProjectIntroduction({ source }: { source: GalleryProject }) {
    return (
        <P.SummaryWrapper>
            <Text bold size="2xl">
                {source.header}
            </Text>
            <P.DescriptionWrapper>
                <Text size="l">{source.intro}</Text>
            </P.DescriptionWrapper>
        </P.SummaryWrapper>
    );
}
