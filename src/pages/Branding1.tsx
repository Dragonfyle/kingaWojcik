import ProjectWithTabs from "../components/ProjectPage/ProjectWithTabs/ProjectWithTabs";
import { tabbedGalleryData } from "../data/TabbedGalleryData";
import banner from "$img/projects/4spacje/czteryspacje_baner.jpg";
import * as P from "./Branding1.parts";

export default function Branding1() {
    return (
        <P.BackgroundContainer>
            <ProjectWithTabs source={tabbedGalleryData.project1} banner={banner} />;
        </P.BackgroundContainer>
    );
}
