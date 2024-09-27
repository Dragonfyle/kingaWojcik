import { BrandingThumbnails, IllustrationsThumbnails, Navigation } from "tina/__generated__/types";
import client from "tina/__generated__/client";

import FooterSection from "../FooterSection";

export default async function FooterSections() {
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

    async function fetchNavigation() {
        const navigationResponse = await client.queries.navigationConnection();
        const navigation = navigationResponse.data?.navigationConnection?.edges?.map((edge) => edge?.node);

        return navigation as Navigation[];
    }

    async function fetchEmail() {
        const emailResponse = await client.queries.email({ relativePath: "email.md" });
        const email = emailResponse.data?.email;

        return email;
    }

    const navigation = await fetchNavigation();
    const illustrationsThumbnails = await fetchIllustrationsThumbnails();
    const brandingThumbnails = await fetchBrandingThumbnails();
    const email = await fetchEmail();

    const leftSectionItems = [...navigation, { label: email.email }];
    const middleSectionItems = [...brandingThumbnails.map((project) => ({ label: project.title, url: project.url }))];
    const rightSectionItems = [
        ...illustrationsThumbnails.map((project) => ({ label: project.title, url: project.url })),
    ];

    return (
        <div className="w-89% my-0 flex flex-col flex-nowrap justify-between gap-y-16 m:flex-row m:gap-5">
            <FooterSection sectionName="Menu" items={leftSectionItems} />
            <FooterSection sectionName="Projekty Brandingowe" items={middleSectionItems} />

            <FooterSection sectionName="Ilustracje" items={rightSectionItems} />
        </div>
    );
}
