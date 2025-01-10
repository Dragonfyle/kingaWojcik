import { BrandingQuery, IllustrationsQuery, PortraitsQuery } from "tina/__generated__/types";

interface PlainGalleryProps {
    projectData: IllustrationsQuery["illustrations"] | BrandingQuery["branding"] | PortraitsQuery["portraits"];
}

export type { PlainGalleryProps };
