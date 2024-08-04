import { Feature } from "$types/Project.types";
import FeatureImage from "$components/ProjectPage/FeatureImage/FeatureImage";
import FeatureVideo from "$components/ProjectPage/FeatureVideo/FeatureVideo";
import FeatureText from "$components/ProjectPage/FeatureText/FeatureText";
import FeatureTextText from "$components/ProjectPage/FeatureTextText/FeatureTextText";
import FeatureImageImage from "$components/ProjectPage/FeatureImageImage/FeatureImageImage";
import FeatureImageText from "$components/ProjectPage/FeatureImageText/FeatureImageText";
import FeatureTextImage from "$components/ProjectPage/FeatureTextImage/FeatureTextImage";

import * as P from "./PlainGallery.parts";
import { PlainGalleryProject } from "$types/plainGallery.types";

interface PlainGalleryProps {
    source: PlainGalleryProject;
}

export default function PlainGallery({ source }: PlainGalleryProps) {
    const featureMap: Record<string, React.ComponentType<any>> = {
        FeatureText,
        FeatureImage,
        FeatureVideo,
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
