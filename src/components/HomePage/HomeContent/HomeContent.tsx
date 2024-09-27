import client from "tina/__generated__/client";
import {
    ArticlesThumbnails,
    BrandingThumbnails,
    IllustrationsThumbnails,
    SliderIntros,
} from "tina/__generated__/types";

import ProjectSection from "../ProjectsSection/";
const PATH_LIST = ["articles_intro.md", "branding_intro.md", "illustrations_intro.md"];

export default async function HomeContent() {
    async function fetchSliderIntros() {
        const promises = PATH_LIST.map((path) => client.queries.sliderIntros({ relativePath: path }));
        const intros = await Promise.all(promises);

        return intros.map((intro) => intro.data.sliderIntros) as SliderIntros[];
    }

    async function fetchIllustrationsThumbnails() {
        const illustrationsThumbnailResponse = await client.queries.illustrationsThumbnailsConnection();
        const illustrationsThumbnails =
            illustrationsThumbnailResponse.data?.illustrationsThumbnailsConnection?.edges?.map((edge) => edge?.node);

        return illustrationsThumbnails as IllustrationsThumbnails[];
    }

    async function fetchBrandingThumbnails() {
        const brandingThumbnailResponse = await client.queries.brandingThumbnailsConnection();
        const brandingThumbnails = brandingThumbnailResponse.data?.brandingThumbnailsConnection?.edges?.map(
            (edge) => edge?.node
        );

        return brandingThumbnails as BrandingThumbnails[];
    }

    async function fetchArticlesThumbnails() {
        const articlesThumbnailResponse = await client.queries.articlesThumbnailsConnection();
        const articlesThumbnails = articlesThumbnailResponse.data?.articlesThumbnailsConnection?.edges?.map(
            (edge) => edge?.node
        );

        return articlesThumbnails as ArticlesThumbnails[];
    }

    async function fetchThumbnails() {
        const illustrationsThumbnails = await fetchIllustrationsThumbnails();
        const brandingThumbnails = await fetchBrandingThumbnails();
        const articlesThumbnails = await fetchArticlesThumbnails();

        return { illustrationsThumbnails, brandingThumbnails, articlesThumbnails };
    }

    const { illustrationsThumbnails, brandingThumbnails, articlesThumbnails } = await fetchThumbnails();

    const intros = await fetchSliderIntros();

    if (!illustrationsThumbnails || !brandingThumbnails || !articlesThumbnails || !intros) {
        return null;
    }

    return (
        <div className="flex flex-col justify-center gap-y-16 bg-white-1 m:gap-y-0">
            <ProjectSection id="ilustracje" source={illustrationsThumbnails} intro={intros[2]} />
            <ProjectSection id="brandingowe" source={brandingThumbnails} intro={intros[1]} />
            <ProjectSection id="artykuly" source={articlesThumbnails} intro={intros[0]} />
        </div>
    );
}
