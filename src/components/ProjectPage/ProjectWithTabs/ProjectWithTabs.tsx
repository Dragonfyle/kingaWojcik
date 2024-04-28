import Flexbox from "$generics/Flexbox/";
import useScrollToTop from "$hooks/useScrollToTop";

import TabbedGallery from "./TabbedGallery/";
import ProjectNavigation from "../ProjectNavigation/";
import ProjectIntroduction from "../ProjectIntroduction/";
import { ProjectWithTabsProps } from "./ProjectWithTabs.types";
import * as P from "./ProjectWithTabs.parts";

export default function ProjectWithTabs({ source, banner }: ProjectWithTabsProps) {
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
