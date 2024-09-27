interface TabNavigationProps {
    source: { tabName: string }[];
    activeTab: number;
    onClick: (idx: number) => void;
}

export type { TabNavigationProps };
