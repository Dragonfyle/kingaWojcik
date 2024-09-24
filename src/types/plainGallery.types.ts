import { BrandingQuery, IllustrationsQuery } from "tina/__generated__/types";

interface PlainGalleryProps {
    projectData: IllustrationsQuery["illustrations"] | BrandingQuery["branding"];
}

export type { PlainGalleryProps };
