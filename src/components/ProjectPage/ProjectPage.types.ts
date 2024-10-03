import { BrandingQuery, IllustrationsQuery } from "tina/__generated__/types";

interface ProjectPageProps {
    projectData: IllustrationsQuery["illustrations"] | BrandingQuery["branding"];
}

export type { ProjectPageProps };
