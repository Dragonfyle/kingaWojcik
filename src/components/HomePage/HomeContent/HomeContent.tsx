import { ProjectPanelData } from "$data/ProjectPanelData";
import ScrollToAnchor from "$utils/scrollToAnchor";

import ProjectSection from "../ProjectsSection/";
import * as P from "./HomeContent.parts";

export default function HomeContent() {
    return (
        <P.Wrapper>
            <ScrollToAnchor />
            <ProjectSection id="ilustracje" source={ProjectPanelData.illustrations} />
            <ProjectSection id="brandingowe" source={ProjectPanelData.branding} />
            <ProjectSection id="artykuly" source={ProjectPanelData.articles} />
        </P.Wrapper>
    );
}
