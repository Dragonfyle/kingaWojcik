import useScrollToTop from "$hooks/useScrollToTop";
import Flexbox from "$generics/Flexbox/";

import PlainGallery from "./PlainGallery/";
import ProjectIntroduction from "../ProjectIntroduction/";
import ProjectNavigation from "../ProjectNavigation/";
import { ProjecPlainProps } from "./ProjectPlain.types";
import { useDeviceContext } from "$contexts/DeviceContext";
import * as P from "./ProjectPlain.parts";

export default function ProjectPlain({ source }: ProjecPlainProps) {
    useScrollToTop();
    const { isMobile } = useDeviceContext();

    const withDescription = source.intro !== "";

    return (
        <Flexbox $justify="center">
            <P.ContentWrapper>
                <ProjectIntroduction source={source} withDescription={withDescription} />
                <PlainGallery source={source} />
                {!isMobile && <ProjectNavigation />}
            </P.ContentWrapper>
        </Flexbox>
    );
}
