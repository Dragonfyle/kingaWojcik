import { aboutGalleryData } from "$data/aboutData";
import { aboutSectionData } from "$data/aboutSectionData";
import useScrollToTop from "$hooks/useScrollToTop";

import AboutGallery from "./AboutGallery/";
import AboutAuthor from "./AboutAuthor/";
import * as P from "./AboutPage.parts";

export default function AboutPage() {
    useScrollToTop();

    return (
        <P.PageWrapper>
            <P.ContentWrapper>
                <AboutAuthor source={aboutSectionData} />
                <AboutGallery source={aboutGalleryData} />
            </P.ContentWrapper>
        </P.PageWrapper>
    );
}
