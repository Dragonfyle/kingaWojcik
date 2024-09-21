"use client";

import client from "tina/__generated__/client";
import {
    ArticlesThumbnails,
    BrandingThumbnails,
    IllustrationsThumbnails,
    SliderIntros,
} from "tina/__generated__/types";

import ProjectSection from "../ProjectsSection/";
import { useEffect, useState } from "react";

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
        (async () => {
            const { illustrationsThumbnails, brandingThumbnails, articlesThumbnails } = await fetchThumbnails();

            if (illustrationsThumbnails && brandingThumbnails && articlesThumbnails) {
                setThumbnails({
                    illustrationsThumbnails: illustrationsThumbnails as IllustrationsThumbnails[],
                    brandingThumbnails: brandingThumbnails as BrandingThumbnails[],
                    articlesThumbnails: articlesThumbnails as ArticlesThumbnails[],
                });
            }
        })();

        (async () => {
            const intros = await fetchSliderIntros();

            if (intros) {
                setSliderIntros({
                    articlesIntro: intros.articlesIntro.data.sliderIntros as SliderIntros,
                    brandingIntro: intros.brandingIntro.data.sliderIntros as SliderIntros,
                    illustrationsIntro: intros.illustrationsIntro.data.sliderIntros as SliderIntros,
                });
            }
        })();
    }, []);

    if (!thumbnails || !sliderIntros) {
        return null;
    }

    return (
        <div className="flex flex-col justify-center bg-white-1">
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
        </div>
    );
}
