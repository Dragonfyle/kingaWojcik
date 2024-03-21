type FeatureComponentName = "List";

type DescriptionPosition = "top" | "bottom";

type FeatureConfigMap = {
    List: ListConfig;
};

type FeatureContentMap = {
    List: ListContent;
};

interface ListConfig {
    withH1: boolean;
    withDescription: boolean;
    descriptionPosition: DescriptionPosition;
}

interface ListElement {
    header: {
        1: string;
        2: string;
    };
    description: {
        1: string;
        2: string;
        3: string;
    };
}

type ListContent = Array<ListElement>;

interface TabContent {
    h1: string;
    listContent: ListContent;
}

type AboutGalleryContent = Array<{
    tabName: string;
    component: "List";
    configuration: object;
    tabContent: TabContent;
}>;

interface AboutGalleryData {
    header: string;
    aboutGalleryContent: AboutGalleryContent;
}

export type {
    FeatureComponentName,
    FeatureConfigMap,
    FeatureContentMap,
    TabContent,
    AboutGalleryData,
    AboutGalleryContent,
    ListElement,
    ListContent,
};
