// import { PropsWithChildren } from "react";
import { useState } from "react";
import { Feature, Features, TabbedGalleryProject } from "../../../../types/tabbedGallery.types";
import Highlight from "../Highlight/Highlight";
import TabNavigation from "../../../generics/TabNavigation/TabNavigation";
import SingleImage from "../../SingleImage/SingleImage";
import SingleText from "../../SingleText/SingleText";
import ColumnsTextText from "../../ColumnsTextText/ColumnsTextText";
import ColumnsImageImage from "../../ColumnsImageImage/ColumnsImageImage";
import ColumnsImageText from "../../ColumnsImageText/ColumnsImageText";
import ColumnsTextImage from "../../ColumnsTextImage/ColumnsTextImage";

import * as P from "./TabbedGallery.parts";

interface TabbedGalleryProps {
    source: TabbedGalleryProject;
}

export default function TabbedGallery({ source }: TabbedGalleryProps) {
    const [activeTab, setActiveTab] = useState(0);

    const featureMap = {
        SingleText,
        SingleImage,
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
            const config: Feature["configuration"] = projectFeatures[feature].configuration;
            const props: Feature["configuration"] = { ...config };

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
