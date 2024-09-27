import { BrandingQuery, IllustrationsQuery } from "tina/__generated__/types";

interface ProjectPlainProps {
    projectData: IllustrationsQuery["illustrations"] | BrandingQuery["branding"];
}

export type { ProjectPlainProps };
