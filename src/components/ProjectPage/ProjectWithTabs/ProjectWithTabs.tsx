import { TabbedGalleryProject } from "../../../types/tabbedGallery.types";
import useScrollToTop from "../../../hooks/useScrollToTop";
import ProjectIntroduction from "../ProjectIntroduction/ProjectIntroduction";
import TabbedGallery from "./TabbedGallery/TabbedGallery";
import * as P from "./ProjectWithTabs.parts";

interface ProjectWithTabs {
    source: TabbedGalleryProject;
}

export default function ProjectWithTabs({ source }: ProjectWithTabs) {
    useScrollToTop();

    return (
        <P.ContentWrapper>
            <ProjectIntroduction source={source} />
            <TabbedGallery source={source} />
        </P.ContentWrapper>
    );
}
