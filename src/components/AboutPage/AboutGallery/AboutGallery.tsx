import { useState } from "react";

import TabNavigation from "$generics/TabNavigation/TabNavigation";
import Flexbox from "$generics/Flexbox/Flexbox";

import List from "../List/";
import { AboutGalleryProps } from "./AboutGallery.types";
import * as P from "./AboutGallery.parts";

export default function AboutGallery({ source }: AboutGalleryProps) {
    const [activeTab, setActiveTab] = useState(0);

    const componentMap = {
        List,
    };
    const tabData = source.aboutGalleryContent[activeTab];

    function handleClick(idx: number) {
        setActiveTab(idx);
    }

    const Component = componentMap[tabData.component];

    return (
        <P.GalleryWrapper>
            <Flexbox $justify="flex-start">
                <TabNavigation source={source.aboutGalleryContent} activeTab={activeTab} onClick={handleClick} />
            </Flexbox>
            <Component key={tabData.tabContent.h1} source={tabData.tabContent} />
        </P.GalleryWrapper>
    );
}
