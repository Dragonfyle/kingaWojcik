import { BrandingQuery, IllustrationsQuery, PortraitsQuery } from "tina/__generated__/types";

interface ProjectPageProps {
    projectData: IllustrationsQuery["illustrations"] | BrandingQuery["branding"] | PortraitsQuery["portraits"];
}

export type { ProjectPageProps };
