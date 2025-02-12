import FeatureImage from "$components/ProjectPage/FeatureImage/FeatureImage";
import FeatureVideo from "$components/ProjectPage/FeatureVideo/FeatureVideo";
import FeatureVideoVideo from "$components/ProjectPage/FeatureVideoVideo/FeatureVideoVideo";
import FeatureText from "$components/ProjectPage/FeatureText/FeatureText";
import FeatureTextText from "$components/ProjectPage/FeatureTextText/FeatureTextText";
import FeatureImageImage from "$components/ProjectPage/FeatureImageImage/FeatureImageImage";
import FeatureImageText from "$components/ProjectPage/FeatureImageText/FeatureImageText";
import FeatureTextImage from "$components/ProjectPage/FeatureTextImage/FeatureTextImage";

import { BrandingProjectSections, IllustrationsProjectSections, PortraitsProjectSections } from "tina/__generated__/types";
import { PlainGalleryProps } from "$types/plainGallery.types";

export default function PlainGallery({ projectData }: PlainGalleryProps) {
    const featureMap = {
        projectSectionsText: FeatureText,
        projectSectionsImage: FeatureImage,
        projectSectionsVideo: FeatureVideo,
        projectSectionsVideoVideo: FeatureVideoVideo,
        projectSectionsTextText: FeatureTextText,
        projectSectionsTextImage: FeatureTextImage,
        projectSectionsImageImage: FeatureImageImage,
        projectSectionsImageText: FeatureImageText,
    } as const;

    const projectSections = projectData.projectSections;

    function convertNameToKey(name: string | undefined) {
        if (!name) return "";

        return name.replace(/^(Illustrations|Branding|Portraits)ProjectSections/, "projectSections");
    }

    function renderSections(sections: IllustrationsProjectSections[] | BrandingProjectSections[] | PortraitsProjectSections[] | undefined) {
        if (sections === undefined) {
            return null;
        }

        return sections.map((feature, idx) => {
            const componentName = convertNameToKey(feature.__typename);

            if (!componentName) {
                return null;
            }

            const Component = featureMap[componentName as keyof typeof featureMap];

            //TODO: find a way to fix this
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            return <Component key={idx} featureData={feature as any} />;
        });
    }

    return (
        <div className="flex max-w-project-max flex-col items-center justify-center gap-12 p-4 pb-project-bottom s:p-8 xxl:max-w-project-max-l">
            {/* TODO: find a way to fix this */}
            {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
            {renderSections(projectSections as any)}
        </div>
    );
}
