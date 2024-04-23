import { TabbedGalleryProject } from "$types/tabbedGallery.types";
import Flexbox from "$generics/Flexbox/";
import useScrollToTop from "$hooks/useScrollToTop";

import TabbedGallery from "./TabbedGallery/";
import ProjectNavigation from "../ProjectNavigation/";
import ProjectIntroduction from "../ProjectIntroduction/";
import * as P from "./ProjectWithTabs.parts";

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
