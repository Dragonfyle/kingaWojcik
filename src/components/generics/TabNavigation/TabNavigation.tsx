import Button from "../Button/";
import { TabNavigationProps } from "./TabNavigation.types";
import * as P from "./TabNavigation.parts";

export default function TabNavigation({ source, activeTab, onClick }: TabNavigationProps) {
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
