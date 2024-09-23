"use client";

import { useState } from "react";

import TabNavigation from "$generics/TabNavigation/TabNavigation";

import List from "../List/";
import { AboutGalleryProps } from "./AboutGallery.types";

export default function AboutGallery({ source }: AboutGalleryProps) {
    const [activeTab, setActiveTab] = useState(0);

    const tabData = source[activeTab];

    function handleClick(idx: number) {
        setActiveTab(idx);
    }

    if (!tabData) {
        return null;
    }

    return (
        <div className="min-h-[800px] m:min-h-[400px]">
            <div className="flex">
                <TabNavigation source={source} activeTab={activeTab} onClick={handleClick} />
            </div>
            <List key={tabData.header} source={tabData} />
        </div>
    );
}
