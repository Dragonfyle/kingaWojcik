import TabNavigationButton from "./TabNavigationButton/";
import { TabNavigationProps } from "./TabNavigation.types";

export default function TabNavigation({ source, activeTab, onClick }: TabNavigationProps) {
    const tabNames = source.map(({ tabName }) => tabName);

    function getButtons(tabNames: string[]) {
        return tabNames.map((tabName, idx) => (
            <TabNavigationButton key={tabName} isActive={activeTab === idx} onClick={() => onClick(idx)}>
                {tabName}
            </TabNavigationButton>
        ));
    }

    return (
        <nav className="sticky top-1/2 mb-12 flex h-12 w-full items-start overflow-x-hidden bg-leading-secondary-1">
            {getButtons(tabNames)}
        </nav>
    );
}
