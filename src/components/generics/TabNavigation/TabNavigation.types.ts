import { AboutGalleryContent } from "$types/AboutGallery.types";
import { ProjectContent } from "$types/tabbedGallery.types";

interface TabNavigationProps {
    source: ProjectContent[] | AboutGalleryContent;
    activeTab: number;
    onClick: (idx: number) => void;
}

export type { TabNavigationProps };
