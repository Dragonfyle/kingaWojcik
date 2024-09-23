import { aboutGalleryData } from "$data/aboutData";
import { aboutSectionData } from "$data/aboutSectionData";

import AboutGallery from "./AboutGallery/";
import AboutAuthor from "./AboutAuthor/";

export default function AboutPage() {
    return (
        <div className="flex justify-normal">
            <div className="mx-5 mb-52 grid max-w-project-max grid-rows-2 gap-24 s:m-12 l:grid-cols-2 l:grid-rows-[auto] xxl:max-w-project-max-s xxl:gap-12">
                <AboutAuthor source={aboutSectionData} />
                <AboutGallery source={aboutGalleryData} />
            </div>
        </div>
    );
}
