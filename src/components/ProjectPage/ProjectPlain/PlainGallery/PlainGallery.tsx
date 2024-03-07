import { Feature } from "../../../../types/tabbedGallery.types";
import SingleImage from "../../SingleImage/SingleImage";
import SingleText from "../../SingleText/SingleText";
import ColumnsTextText from "../../ColumnsTextText/ColumnsTextText";
import ColumnsImageImage from "../../ColumnsImageImage/ColumnsImageImage";
import ColumnsImageText from "../../ColumnsImageText/ColumnsImageText";
import ColumnsTextImage from "../../ColumnsTextImage/ColumnsTextImage";

import * as P from "./PlainGallery.parts";
import { PlainGalleryProject } from "../../../../types/plainGallery.types";

interface PlainGalleryProps {
    source: PlainGalleryProject;
}

export default function PlainGallery({ source }: PlainGalleryProps) {
    const featureMap = {
        SingleText,
        SingleImage,
        ColumnsTextText,
        ColumnsTextImage,
        ColumnsImageImage,
        ColumnsImageText,
    };
    const projectFeatures = source.plainGalleryContent;

    function renderFeatures(features: Feature[]) {
        return features.map((feature) => {
            const Component = featureMap[feature.component];
            const config: Feature["configuration"] = feature.configuration;
            const props: Feature["configuration"] = { ...config };

            return <Component source={feature} {...props} />;
        });
    }

    return <P.GalleryWrapper>{renderFeatures(projectFeatures)}</P.GalleryWrapper>;
}
