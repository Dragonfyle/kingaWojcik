import useScrollToTop from "$hooks/useScrollToTop";
import Flexbox from "$generics/Flexbox/";

import PlainGallery from "./PlainGallery/";
import ProjectIntroduction from "../ProjectIntroduction/";
import ProjectNavigation from "../ProjectNavigation/";
import { ProjecPlainProps } from "./ProjectPlain.types";
import * as P from "./ProjectPlain.parts";

export default function ProjectPlain({ source }: ProjecPlainProps) {
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
