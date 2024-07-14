import { ProjectPanelData } from "$data/ProjectPanelData";
import ScrollToAnchor from "$utils/scrollToAnchor";

import ProjectSection from "../ProjectsSection/";
import * as P from "./HomeContent.parts";

export default function HomeContent() {
    return (
        <P.Wrapper>
            <ScrollToAnchor />
            <ProjectSection id="artykuly" source={ProjectPanelData.articles} />
            <ProjectSection id="brandingowe" source={ProjectPanelData.branding} />
            <ProjectSection id="wydawnicze" source={ProjectPanelData.editorial} />
        </P.Wrapper>
    );
}
