import { TabbedGalleryProject } from "../../../types/tabbedGallery.types";
import useScrollToTop from "../../../hooks/useScrollToTop";
import ProjectIntroduction from "../ProjectIntroduction/ProjectIntroduction";
import TabbedGallery from "./TabbedGallery/TabbedGallery";
import * as P from "./ProjectWithTabs.parts";

interface ProjectWithTabs {
    source: TabbedGalleryProject;
    banner?: string;
}

export default function ProjectWithTabs({ source, banner }: ProjectWithTabs) {
    useScrollToTop();

    const withBanner = !!banner;

    return (
        <P.ContentWrapper>
            {withBanner && (
                <P.ImageWrapper>
                    <img src={banner} />
                </P.ImageWrapper>
            )}
            <ProjectIntroduction source={source} />
            <TabbedGallery source={source} />
        </P.ContentWrapper>
    );
}
