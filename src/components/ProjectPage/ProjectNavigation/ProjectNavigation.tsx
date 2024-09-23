"use client";

import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

import { useDeviceContext } from "$contexts/DeviceContext";

import ProjectNavButtons from "../ProjectNavButtons/";
import { fetchProjects, findCurrentProjectIndex, getAdjacentProjects } from "./ProjectNavigation.utils";

export default function ProjectNavigation() {
    const [projectData, setProjectData] = useState<{ url: string; title: string }[]>([]);

    const { isMobile } = useDeviceContext();
    const { push } = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        fetchProjects().then(setProjectData);
    }, []);

    const currentProjectIndex = findCurrentProjectIndex(projectData, pathname);
    const { nextProject, previousProject } = getAdjacentProjects(projectData, currentProjectIndex);

    if (projectData.length === 0) return null;

    return !isMobile ? (
        <ProjectNavButtons
            onNextProject={() => push(nextProject.url)}
            onPreviousProject={() => push(previousProject.url)}
            nextProjectName={nextProject.title}
            previousProjectName={previousProject.title}
        />
    ) : null;
}
