import { tabbedGalleryData } from "../../../data/TabbedGalleryData";
import useScrollToTop from "../../../hooks/useScrollToTop";
import ProjectIntroduction from "./ProjectIntroduction/ProjectIntroduction";
import TabbedGallery from "./TabbedGallery/TabbedGallery";
import * as P from "./ProjectWithTabs.parts";

export default function ProjectWithTabs() {
    useScrollToTop();

    return (
        <P.ContentWrapper>
            <ProjectIntroduction source={tabbedGalleryData.project1} />
            <TabbedGallery source={tabbedGalleryData.project1} />
        </P.ContentWrapper>
    );
}
