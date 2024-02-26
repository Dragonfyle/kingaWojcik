// import { PropsWithChildren } from "react";
import { useState } from "react";
import { Feature, FeatureConfig, Features, GalleryProject } from "../../../../types/tabbedGallery.types";
import Highlight from "../Highlight/Highlight";
import TabNavigation from "../TabNavigation/TabNavigation";
import ColumnsTextText from "../../ColumnsTextText/ColumnsTextText";
import ColumnsImageImage from "../../ColumnsImageImage/ColumnsImageImage";
import ColumnsImageText from "../../ColumnsImageText/ColumnsImageText";
import ColumnsTextImage from "../../ColumnsTextImage/ColumnsTextImage";

import * as P from "./TabbedGallery.parts";

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
    const projectFeatures = source.tabbedGalleryContent[activeTab].features;

    function handleClick(idx: number) {
        setActiveTab(idx);
    }

    function renderFeatures(features: Features) {
        return (Object.keys(features) as Array<keyof typeof features>).map((feature) => {
            const Component = featureMap[features[feature].component];
            const config: FeatureConfig<Feature["component"]> = projectFeatures[feature].configuration;
            const props: FeatureConfig<Feature["component"]> = { ...config };

            return <Component source={projectFeatures[feature]} {...props} />;
        });
    }

    return (
        <P.GalleryWrapper>
            <TabNavigation source={source.tabbedGalleryContent} activeTab={activeTab} onClick={handleClick} />
            <Highlight source={source.tabbedGalleryContent[activeTab].highlight} />
            {renderFeatures(projectFeatures)}
        </P.GalleryWrapper>
    );
}
