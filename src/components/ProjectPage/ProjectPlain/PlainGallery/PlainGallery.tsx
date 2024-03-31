import { Feature } from "../../../../types/Project.types";
import FeatureImage from "../../SingleImage/SingleImage";
import FeatureText from "../../SingleText/SingleText";
import FeatureTextText from "../../ColumnsTextText/ColumnsTextText";
import FeatureImageImage from "../../ColumnsImageImage/ColumnsImageImage";
import FeatureImageText from "../../ColumnsImageText/ColumnsImageText";
import FeatureTextImage from "../../ColumnsTextImage/ColumnsTextImage";

import * as P from "./PlainGallery.parts";
import { PlainGalleryProject } from "../../../../types/plainGallery.types";

interface PlainGalleryProps {
    source: PlainGalleryProject;
}

export default function PlainGallery({ source }: PlainGalleryProps) {
    const featureMap: Record<string, React.ComponentType<any>> = {
        FeatureText,
        FeatureImage,
        FeatureTextText,
        FeatureTextImage,
        FeatureImageImage,
        FeatureImageText,
    };

    const projectFeatures = source.plainGalleryContent;

    function renderFeatures(features: Feature[]) {
        return features.map((feature, idx) => {
            const componentName = feature.component;
            const Component = featureMap[`Feature${componentName}`];
            const config: Feature["configuration"] = feature.configuration;
            const props = config;

            return <Component key={idx} source={feature} {...props} />;
        });
    }

    return <P.GalleryWrapper>{renderFeatures(projectFeatures)}</P.GalleryWrapper>;
}
