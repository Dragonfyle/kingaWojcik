import { TabbedGalleryProject } from "../../../types/tabbedGallery.types";
import useScrollToTop from "../../../hooks/useScrollToTop";
import ProjectIntroduction from "../ProjectIntroduction/ProjectIntroduction";
import TabbedGallery from "./TabbedGallery/TabbedGallery";
import * as P from "./ProjectWithTabs.parts";
import Flexbox from "../../generics/Flexbox/Flexbox";
import ProjectNavigation from "../ProjectNavigation/ProjectNavigation";

interface ProjectWithTabs {
    source: TabbedGalleryProject;
    banner?: string;
}

export default function ProjectWithTabs({ source, banner }: ProjectWithTabs) {
    useScrollToTop();

    const withBanner = !!banner;
    const withDescription = source.intro !== "";

    return (
        <Flexbox $justify="center">
            <P.ContentWrapper>
                {withBanner && (
                    <P.ImageWrapper>
                        <img src={banner} />
                    </P.ImageWrapper>
                )}
                <ProjectIntroduction source={source} withDescription={withDescription} />
                <TabbedGallery source={source} />
                <ProjectNavigation />
            </P.ContentWrapper>
        </Flexbox>
    );
}
