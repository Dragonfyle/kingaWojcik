import { Feature } from "../../../../data/TabbedGalleryData";

function hasPart(part: keyof Feature, feature: Feature) {
    return feature[part] !== "";
}

export { hasPart };
