import { PlainGalleryProject } from "$types/plainGallery.types";
import useScrollToTop from "$hooks/useScrollToTop";
import Flexbox from "$generics/Flexbox/";

import PlainGallery from "./PlainGallery/";
import ProjectIntroduction from "../ProjectIntroduction/";
import ProjectNavigation from "../ProjectNavigation/";
import * as P from "./ProjectPlain.parts";

interface ProjecPlain {
    source: PlainGalleryProject;
}

export default function ProjectPlain({ source }: ProjecPlain) {
    useScrollToTop();

    const withDescription = source.intro !== "";

    return (
        <Flexbox $justify="center">
            <P.ContentWrapper>
                <ProjectIntroduction source={source} withDescription={withDescription} />
                <PlainGallery source={source} />
                <ProjectNavigation />
            </P.ContentWrapper>
        </Flexbox>
    );
}
