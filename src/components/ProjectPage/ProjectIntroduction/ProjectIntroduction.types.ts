import { BrandingQuery, IllustrationsQuery, PortraitsQuery } from "tina/__generated__/types";

interface ProjectIntroductionProps {
    projectData: IllustrationsQuery["illustrations"] | BrandingQuery["branding"] | PortraitsQuery["portraits"];
}

export type { ProjectIntroductionProps };
