import { useState } from "react";

import { Feature } from "$types/Project.types";
import { Features, TabbedGalleryProject } from "$types/tabbedGallery.types";
import Highlight from "$components/ProjectPage/ProjectWithTabs/Highlight/";
import TabNavigation from "$generics/TabNavigation/TabNavigation";
import FeatureImage from "$components/ProjectPage/SingleImage/SingleImage";
import FeatureText from "$components/ProjectPage/SingleText/SingleText";
import FeatureTextText from "$components/ProjectPage/ColumnsTextText/ColumnsTextText";
import FeatureImageImage from "$components/ProjectPage/ColumnsImageImage/ColumnsImageImage";
import FeatureImageText from "$components/ProjectPage/ColumnsImageText/ColumnsImageText";
import FeatureTextImage from "$components/ProjectPage/ColumnsTextImage/ColumnsTextImage";

import * as P from "./TabbedGallery.parts";

interface TabbedGalleryProps {
    source: TabbedGalleryProject;
}

export default function TabbedGallery({ source }: TabbedGalleryProps) {
    const [activeTab, setActiveTab] = useState(0);

    const featureMap: Record<string, React.ComponentType<any>> = {
        FeatureText,
        FeatureImage,
        FeatureTextText,
        FeatureTextImage,
        FeatureImageImage,
        FeatureImageText,
    };
    const projectFeatures = source.tabbedGalleryContent[activeTab].features;

    function handleClick(idx: number) {
        setActiveTab(idx);
    }

    function renderFeatures(features: Features) {
        return (Object.keys(features) as Array<keyof typeof features>).map((feature) => {
            const componentName = features[feature].component;
            const Component = featureMap[`Feature${componentName}`];
            const config: Feature["configuration"] = projectFeatures[feature].configuration;
            const props = config;

            return <Component key={feature} source={projectFeatures[feature]} {...props} />;
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
