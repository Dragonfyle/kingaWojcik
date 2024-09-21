"use client";

import { useDeviceContext } from "$contexts/DeviceContext";
import PlainGallery from "./PlainGallery/";
import ProjectIntroduction from "../ProjectIntroduction/";
import ProjectNavigation from "../ProjectNavigation/";
import { ProjectPlainProps } from "./ProjectPlain.types";

export default function ProjectPlain({ projectData }: ProjectPlainProps) {
    const { isMobile } = useDeviceContext();

    return (
        <div className="m-auto flex max-w-project-max flex-col items-center justify-center">
            <ProjectIntroduction projectData={projectData} />
            <PlainGallery projectData={projectData} />

            {!isMobile && <ProjectNavigation />}
        </div>
    );
}
