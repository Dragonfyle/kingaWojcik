import client from "tina/__generated__/client";
import { AboutGalleryContent } from "tina/__generated__/types";

import AboutGallery from "$components/AboutPage/AboutGallery/";
import AboutAuthor from "$components/AboutPage/AboutAuthor/";

export default async function AboutPage() {
    async function fetchData() {
        const aboutAuthorData = await client.queries.about({ relativePath: "about_author.md" });
        const aboutGalleryResponse = await client.queries.aboutGalleryContentConnection();

        const aboutGalleryData = aboutGalleryResponse.data?.aboutGalleryContentConnection?.edges?.map(
            (edge) => edge?.node
        );

        return {
            aboutAuthorData: aboutAuthorData.data.about,
            aboutGalleryData: aboutGalleryData as AboutGalleryContent[],
        };
    }

    const { aboutAuthorData, aboutGalleryData } = await fetchData();

    return (
        <div className="flex justify-center">
            <div className="grid-rows-[repeat(2, auto)] xxl:max-w-project-max-l mx-5 mt-6 grid max-w-project-max gap-24 s:mx-12 l:mt-12 l:grid-cols-2 l:grid-rows-[auto]">
                <AboutAuthor source={aboutAuthorData} />
                <AboutGallery source={aboutGalleryData} />
            </div>
        </div>
    );
}
