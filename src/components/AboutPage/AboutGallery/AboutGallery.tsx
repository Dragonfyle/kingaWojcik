import { useState } from "react";

import { AboutGalleryData } from "$types/AboutGallery.types";
import TabNavigation from "$generics/TabNavigation/TabNavigation";
import Flexbox from "$generics/Flexbox/Flexbox";

import List from "../List/";
import * as P from "./AboutGallery.parts";

interface AboutGalleryProps {
    source: AboutGalleryData;
}

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
