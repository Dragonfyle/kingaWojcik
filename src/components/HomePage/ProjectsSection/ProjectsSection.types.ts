import {
    IllustrationsThumbnails,
    BrandingThumbnails,
    ArticlesThumbnails,
    SliderIntros,
} from "tina/__generated__/types";

interface ProjectSectionProps {
    id: string;
    source: IllustrationsThumbnails[] | BrandingThumbnails[] | ArticlesThumbnails[];
    intro: SliderIntros;
}

export type { ProjectSectionProps };
