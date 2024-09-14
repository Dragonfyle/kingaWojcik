import ScrollToAnchor from "$utils/scrollToAnchor";
import client from "tina/__generated__/client";
import {
    ArticlesThumbnails,
    BrandingThumbnails,
    IllustrationsThumbnails,
    SliderIntros,
} from "tina/__generated__/types";

import ProjectSection from "../ProjectsSection/";
import { useEffect, useState } from "react";
import * as P from "./HomeContent.parts";

interface Thumbnails {
    illustrationsThumbnails: IllustrationsThumbnails[];
    brandingThumbnails: BrandingThumbnails[];
    articlesThumbnails: ArticlesThumbnails[];
}

export default function HomeContent() {
    const [thumbnails, setThumbnails] = useState<Thumbnails | null>(null);
    const [sliderIntros, setSliderIntros] = useState<{ [key: string]: Exclude<SliderIntros, "id"> } | null>(null);

    async function fetchSliderIntros() {
        const articlesIntro = await client.queries.sliderIntros({
            relativePath: `articles_intro.md`,
        });
        const brandingIntro = await client.queries.sliderIntros({
            relativePath: `branding_intro.md`,
        });
        const illustrationsIntro = await client.queries.sliderIntros({
            relativePath: `illustrations_intro.md`,
        });

        return { articlesIntro, brandingIntro, illustrationsIntro };
    }

    async function fetchThumbnails() {
        const illustrationsThumbnailResponse = await client.queries.illustrationsThumbnailsConnection();
        const brandingThumbnailResponse = await client.queries.brandingThumbnailsConnection();
        const articlesThumbnailResponse = await client.queries.articlesThumbnailsConnection();

        const illustrationsThumbnails =
            illustrationsThumbnailResponse.data?.illustrationsThumbnailsConnection?.edges?.map((edge) => edge?.node);
        const brandingThumbnails = brandingThumbnailResponse.data?.brandingThumbnailsConnection?.edges?.map(
            (edge) => edge?.node
        );
        const articlesThumbnails = articlesThumbnailResponse.data?.articlesThumbnailsConnection?.edges?.map(
            (edge) => edge?.node
        );

        return { illustrationsThumbnails, brandingThumbnails, articlesThumbnails };
    }

    useEffect(() => {
        fetchThumbnails().then(({ illustrationsThumbnails, brandingThumbnails, articlesThumbnails }) => {
            if (illustrationsThumbnails && brandingThumbnails && articlesThumbnails) {
                setThumbnails({
                    illustrationsThumbnails: illustrationsThumbnails as IllustrationsThumbnails[],
                    brandingThumbnails: brandingThumbnails as BrandingThumbnails[],
                    articlesThumbnails: articlesThumbnails as ArticlesThumbnails[],
                });
            }
        });

        fetchSliderIntros().then((intros) => {
            if (intros) {
                setSliderIntros({
                    articlesIntro: intros.articlesIntro.data.sliderIntros,
                    brandingIntro: intros.brandingIntro.data.sliderIntros,
                    illustrationsIntro: intros.illustrationsIntro.data.sliderIntros,
                });
            }
        });
    }, []);

    if (!thumbnails || !sliderIntros) {
        return null;
    }

    return (
        <P.Wrapper>
            <ScrollToAnchor />
            <ProjectSection
                id="ilustracje"
                source={thumbnails?.illustrationsThumbnails}
                intro={sliderIntros?.illustrationsIntro}
            />

            <ProjectSection
                id="brandingowe"
                source={thumbnails?.brandingThumbnails}
                intro={sliderIntros?.brandingIntro}
            />

            <ProjectSection id="artykuly" source={thumbnails?.articlesThumbnails} intro={sliderIntros?.articlesIntro} />
        </P.Wrapper>
    );
}
