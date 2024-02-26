import { ProjectContent } from "../../../../data/TabbedGalleryData";
import Button from "../../../generics/Button/Button";
import NextIcon from "../../../generics/NavIcon/Next/Next";
import PreviousIcon from "../../../generics/NavIcon/Previous/Previous";
import Text from "../../../generics/Text/Text";
import * as P from "./TabNavigation.parts";

interface TabNavigation {
    source: ProjectContent[];
    activeTab: number;
    onClick: (idx: number) => void;
}

export default function TabNavigation({ source, activeTab, onClick }: TabNavigation) {
    const tabNames = source.map(({ tabName }) => tabName);

    function getButtons(tabNames: string[]) {
        return tabNames.map((_, idx) => (
            <Button isActive={activeTab === idx} onClick={() => onClick(idx)}>
                <Text bold>{source[idx].tabName}</Text>
            </Button>
        ));
    }

    return (
        <P.StyledMenu>
            <PreviousIcon $size="50px" />
            {getButtons(tabNames)}
            <NextIcon $size="50px" />
        </P.StyledMenu>
    );
}
