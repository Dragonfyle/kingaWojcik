import useScrollToTop from "../../../hooks/useScrollToTop";
import PlainGallery from "./PlainGallery/PlainGallery";
import ProjectIntroduction from "../ProjectIntroduction/ProjectIntroduction";
import * as P from "./ProjectPlain.parts";
import { PlainGalleryProject } from "../../../types/plainGallery.types";
import Flexbox from "../../generics/Flexbox/Flexbox";

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
            </P.ContentWrapper>
        </Flexbox>
    );
}
