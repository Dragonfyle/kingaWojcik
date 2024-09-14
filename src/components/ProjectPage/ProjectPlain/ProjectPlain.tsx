import useScrollToTop from "$hooks/useScrollToTop";
import Flexbox from "$generics/Flexbox/";

import PlainGallery from "./PlainGallery/";
import ProjectIntroduction from "../ProjectIntroduction/";
import ProjectNavigation from "../ProjectNavigation/";
import { useDeviceContext } from "$contexts/DeviceContext";
import { ProjectPlainProps } from "./ProjectPlain.types";
import * as P from "./ProjectPlain.parts";

export default function ProjectPlain({ projectData }: ProjectPlainProps) {
    useScrollToTop();
    const { isMobile } = useDeviceContext();

    return (
        <Flexbox $justify="center">
            <P.ContentWrapper>
                <ProjectIntroduction projectData={projectData} />
                <PlainGallery projectData={projectData} />

                {!isMobile && <ProjectNavigation />}
            </P.ContentWrapper>
        </Flexbox>
    );
}
