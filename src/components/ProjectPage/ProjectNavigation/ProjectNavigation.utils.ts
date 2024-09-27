import client from "tina/__generated__/client";

type Project = { url: string; title: string };

export async function fetchProjects(): Promise<Project[]> {
    const [illustrations, branding] = await Promise.all([fetchIllustrations(), fetchBranding()]);

    return [...illustrations, ...branding];
}

async function fetchIllustrations(): Promise<Project[]> {
    const response = await client.queries.illustrationsThumbnailsConnection();

    return (
        response.data?.illustrationsThumbnailsConnection?.edges?.map((edge) => ({
            url: edge?.node?.url ?? "",
            title: edge?.node?.title ?? "",
        })) ?? []
    );
}

async function fetchBranding(): Promise<Project[]> {
    const response = await client.queries.brandingThumbnailsConnection();

    return (
        response.data?.brandingThumbnailsConnection?.edges?.map((edge) => ({
            url: edge?.node?.url ?? "",
            title: edge?.node?.title ?? "",
        })) ?? []
    );
}

export function findCurrentProjectIndex(projects: Project[], pathname: string | null): number {
    if (!pathname) return -1;

    return projects.findIndex((project) => project.url === pathname);
}

export function getAdjacentProjects(
    projects: Project[],
    currentIndex: number
): { nextProject: Project; previousProject: Project } {
    const maxIdx = projects.length - 1;
    const nextIndex = (currentIndex + 1) % projects.length;
    const previousIndex = currentIndex - 1 < 0 ? maxIdx : currentIndex - 1;

    return {
        nextProject: projects[nextIndex],
        previousProject: projects[previousIndex],
    };
}
