import { lazy } from "react";

import { BrandingProjectSections, IllustrationsProjectSections } from "tina/__generated__/types";
import { PlainGalleryProps } from "$types/plainGallery.types";
import * as P from "./PlainGallery.parts";

const FeatureText = lazy(() => import("$components/ProjectPage/FeatureText/FeatureText"));
const FeatureImage = lazy(() => import("$components/ProjectPage/FeatureImage/FeatureImage"));
const FeatureVideo = lazy(() => import("$components/ProjectPage/FeatureVideo/FeatureVideo"));
const FeatureTextText = lazy(() => import("$components/ProjectPage/FeatureTextText/FeatureTextText"));
const FeatureImageImage = lazy(() => import("$components/ProjectPage/FeatureImageImage/FeatureImageImage"));
const FeatureImageText = lazy(() => import("$components/ProjectPage/FeatureImageText/FeatureImageText"));
const FeatureTextImage = lazy(() => import("$components/ProjectPage/FeatureTextImage/FeatureTextImage"));

export default function PlainGallery({ projectData }: PlainGalleryProps) {
    const featureMap = {
        projectSectionsText: FeatureText,
        projectSectionsImage: FeatureImage,
        projectSectionsVideo: FeatureVideo,
        projectSectionsTextText: FeatureTextText,
        projectSectionsTextImage: FeatureTextImage,
        projectSectionsImageImage: FeatureImageImage,
        projectSectionsImageText: FeatureImageText,
    } as const;

    const projectSections = projectData.projectSections;

    function convertNameToKey(name: string | undefined) {
        if (!name) return "";

        return name.replace(/^(Illustrations|Branding)ProjectSections/, "projectSections");
    }

    function renderSections(sections: IllustrationsProjectSections[] | BrandingProjectSections[] | undefined) {
        if (sections === undefined) {
            return null; // Return null instead of undefined
        }

        return sections.map((feature, idx) => {
            const componentName = convertNameToKey(feature.__typename);

            if (!componentName) {
                return null; // Return null for invalid components
            }

            const Component = featureMap[componentName as keyof typeof featureMap];

            //TODO: find a way to fix this
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            return <Component key={idx} featureData={feature as any} />;
        });
    }

    //TODO: find a way to fix this
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return <P.GalleryWrapper>{renderSections(projectSections as any)}</P.GalleryWrapper>;
}
