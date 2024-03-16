import { AboutGalleryContent } from "../../../types/AboutGallery.types";
import { ProjectContent } from "../../../types/tabbedGallery.types";
import Button from "../Button/Button";
// import NextIcon from "../NavIcon/Next/Next";
// import PreviousIcon from "../NavIcon/Previous/Previous";
import Text from "../Text/Text";
import * as P from "./TabNavigation.parts";

interface TabNavigation {
    source: ProjectContent[] | AboutGalleryContent;
    activeTab: number;
    onClick: (idx: number) => void;
}

export default function TabNavigation({ source, activeTab, onClick }: TabNavigation) {
    const tabNames = source.map(({ tabName }) => tabName);
    const numTabs = tabNames.length;
    // const previousTabIdx = Math.max(activeTab - 1, 0);
    // const nextTabIdx = Math.min(activeTab + 1, numTabs - 1);

    function getButtons(tabNames: string[]) {
        return tabNames.map((tabName, idx) => (
            <Button key={tabName} isActive={activeTab === idx} onClick={() => onClick(idx)}>
                <Text bold>{source[idx].tabName}</Text>
            </Button>
        ));
    }

    return (
        <P.StyledMenu>
            {/* <PreviousIcon onClick={() => onClick(previousTabIdx)} $size="50px" /> */}
            {getButtons(tabNames)}
            {/* <NextIcon onClick={() => onClick(nextTabIdx)} $size="50px" /> */}
        </P.StyledMenu>
    );
}
