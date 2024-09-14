import { BrandingQuery, IllustrationsQuery } from "tina/__generated__/types";

interface ProjectIntroductionProps {
    projectData: IllustrationsQuery["illustrations"] | BrandingQuery["branding"];
}

export type { ProjectIntroductionProps };
