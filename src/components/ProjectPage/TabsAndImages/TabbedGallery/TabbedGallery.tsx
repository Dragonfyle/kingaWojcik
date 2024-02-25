// import { PropsWithChildren } from "react";
import { useState } from "react";
import { Features, GalleryProject } from "../../../../data/TabbedGalleryData";
import Highlight from "../Highlight/Highlight";
import ProjectFeature from "../ProjectFeature/ProjectFeature";
import TabNavigation from "../TabNavigation/TabNavigation";
import ColumnsTextText from "../../ColumnsTextText/ColumnsTextText";
import ColumnsImageImage from "../../ColumnsImageImage/ColumnsImageImage";
import ColumnsImageText from "../../ColumnsImageText/ColumnsImageText";
import ColumnsTextImage from "../../ColumnsTextImage/ColumnsTextImage";

import * as P from "./TabbedGallery.parts";
import { hasPart } from "./TabbedGallery.utils";

interface TabbedGalleryProps {
    source: GalleryProject;
}

export default function TabbedGallery({ source }: TabbedGalleryProps) {
    const [activeTab, setActiveTab] = useState(0);

    const featureMap = {
        ColumnsTextText,
        ColumnsTextImage,
        ColumnsImageImage,
        ColumnsImageText,
    };
    const features = source.content[activeTab].features;

    function handleClick(idx: number) {
        setActiveTab(idx);
    }

    function renderFeatures(features: Features) {
        return (Object.keys(features) as Array<keyof typeof features>).map((feature) => {
            const Component = featureMap[features[feature].component];

            return (
                <Component
                    withH1={hasPart("headerH1", features[feature])}
                    withH3={hasPart("headerH3", features[feature])}
                    withSideDescription={hasPart("sideDescription", features[feature])}
                    withTopDescription={hasPart("topDescription", features[feature])}
                    withBottomDescription={hasPart("bottomDescription", features[feature])}
                    source={source.content[activeTab].features[feature]}
                />
            );
        });
    }

    return (
        <P.GalleryWrapper>
            <TabNavigation source={source.content} activeTab={activeTab} onClick={handleClick} />
            <Highlight source={source.content[activeTab].highlight} />
            {renderFeatures(features)}
        </P.GalleryWrapper>
    );
}
