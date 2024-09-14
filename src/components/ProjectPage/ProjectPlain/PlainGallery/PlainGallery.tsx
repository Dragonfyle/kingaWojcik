import FeatureImage from "$components/ProjectPage/FeatureImage/FeatureImage";
import FeatureVideo from "$components/ProjectPage/FeatureVideo/FeatureVideo";
import FeatureText from "$components/ProjectPage/FeatureText/FeatureText";
import FeatureTextText from "$components/ProjectPage/FeatureTextText/FeatureTextText";
import FeatureImageImage from "$components/ProjectPage/FeatureImageImage/FeatureImageImage";
import FeatureImageText from "$components/ProjectPage/FeatureImageText/FeatureImageText";
import FeatureTextImage from "$components/ProjectPage/FeatureTextImage/FeatureTextImage";

import { IllustrationsProjectSections } from "tina/__generated__/types";
import { PlainGalleryProps } from "$types/plainGallery.types";
import * as P from "./PlainGallery.parts";

export default function PlainGallery({ projectData }: PlainGalleryProps) {
    const featureMap = {
        IllustrationsProjectSectionsText: FeatureText,
        IllustrationsProjectSectionsImage: FeatureImage,
        IllustrationsProjectSectionsVideo: FeatureVideo,
        IllustrationsProjectSectionsTextText: FeatureTextText,
        IllustrationsProjectSectionsTextImage: FeatureTextImage,
        IllustrationsProjectSectionsImageImage: FeatureImageImage,
        IllustrationsProjectSectionsImageText: FeatureImageText,
    } as const;

    const projectSections = projectData.projectSections;

    function renderSections(sections: IllustrationsProjectSections[] | undefined) {
        if (sections === undefined) {
            return;
        }

        return sections.map((feature, idx) => {
            const componentName = feature.__typename;

            if (!componentName) {
                return;
            }

            const Component = featureMap[componentName];

            //TODO: find a way to fix this
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            return <Component key={idx} featureData={feature as any} />;
        });
    }

    //TODO: find a way to fix this
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return <P.GalleryWrapper>{renderSections(projectSections as any)}</P.GalleryWrapper>;
}
