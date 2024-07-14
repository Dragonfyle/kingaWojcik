import { CONFIG } from "$constants/config";

const navigationItems = [
    {
        label: "O mnie",
        link: CONFIG.PATHS.ABOUT,
    } as const,

    {
        label: "Moje publikacje",
        link: CONFIG.PATHS.ARTICLES,
    } as const,

    {
        label: "Projekty brandingowe",
        link: CONFIG.PATHS.BRANDING_SECTION,
    } as const,

    {
        label: "Projekty wydawnicze",
        link: CONFIG.PATHS.EDITORIAL_SECTION,
    } as const,
] as const;

export default navigationItems;
