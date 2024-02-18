import Highlight from "../Highlight/Highlight";
import ProjectFeature from "../ProjectFeature/ProjectFeature";
import ProjectIntroduction from "../ProjectIntroduction/ProjectIntroduction";
import TabNavigation from "../TabNavigation/TabNavigation";
import * as P from "./TabsAndImagesContent.parts";

export default function TabsAndImagesContent() {
    return (
        <P.ContentWrapper>
            <ProjectIntroduction />
            <TabNavigation />
            <Highlight />
            <ProjectFeature withHeader={false} withDescription={false}>
                <img src="https://picsum.photos/seed/12223/1200/640" />
            </ProjectFeature>
            <ProjectFeature>
                <img src="https://picsum.photos/seed/1193/850/540" />
            </ProjectFeature>
        </P.ContentWrapper>
    );
}
