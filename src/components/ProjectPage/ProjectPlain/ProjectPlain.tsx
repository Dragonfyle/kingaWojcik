import useScrollToTop from "../../../hooks/useScrollToTop";
import PlainGallery from "./PlainGallery/PlainGallery";
import ProjectIntroduction from "../ProjectIntroduction/ProjectIntroduction";
import * as P from "./ProjectPlain.parts";
import { PlainGalleryProject } from "../../../types/plainGallery.types";

interface ProjecPlain {
    source: PlainGalleryProject;
}

export default function ProjectPlain({ source }: ProjecPlain) {
    useScrollToTop();

    return (
        <P.ContentWrapper>
            <ProjectIntroduction source={source} />
            <PlainGallery source={source} />
        </P.ContentWrapper>
    );
}
