import { AboutGalleryContent } from "$types/AboutGallery.types";
import { ProjectContent } from "$types/tabbedGallery.types";

import Button from "../Button/";
import * as P from "./TabNavigation.parts";

interface TabNavigation {
    source: ProjectContent[] | AboutGalleryContent;
    activeTab: number;
    onClick: (idx: number) => void;
}

export default function TabNavigation({ source, activeTab, onClick }: TabNavigation) {
    const tabNames = source.map(({ tabName }) => tabName);

    function getButtons(tabNames: string[]) {
        return tabNames.map((tabName, idx) => (
            <Button key={tabName} isActive={activeTab === idx} onClick={() => onClick(idx)}>
                {source[idx].tabName}{" "}
            </Button>
        ));
    }

    return <P.StyledMenu>{getButtons(tabNames)}</P.StyledMenu>;
}
