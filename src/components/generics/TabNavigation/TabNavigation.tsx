import { AboutGalleryContent } from "../../../types/AboutGallery.types";
import { ProjectContent } from "../../../types/tabbedGallery.types";
import Button from "../Button/Button";
import Text from "../Text/Text";
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
                <Text bold>{source[idx].tabName}</Text>
            </Button>
        ));
    }

    return <P.StyledMenu>{getButtons(tabNames)}</P.StyledMenu>;
}
