import {
    IllustrationsThumbnails,
    BrandingThumbnails,
    ArticlesThumbnails,
    SliderIntros,
    PortraitThumbnails,
} from "tina/__generated__/types";

interface ProjectSectionProps {
    id: string;
    source: IllustrationsThumbnails[] | BrandingThumbnails[] | ArticlesThumbnails[] | PortraitThumbnails[];
    intro: SliderIntros;
}

export type { ProjectSectionProps };
