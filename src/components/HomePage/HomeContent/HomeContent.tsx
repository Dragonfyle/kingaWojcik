import ProjectSection from "../ProjectsSection/";
import { ProjectPanelData } from "$data/projectPanelData";
import ScrollToAnchor from "$utils/scrollToAnchor";

import * as P from "./HomeContent.parts";

export default function HomeContent() {
    return (
        <P.Wrapper>
            <ScrollToAnchor />
            <ProjectSection id="brandingowe" source={ProjectPanelData.branding} />
            <ProjectSection id="wydawnicze" source={ProjectPanelData.editorial} />
        </P.Wrapper>
    );
}
