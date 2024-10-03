import ProjectNavigation from "$components/ProjectPage/ProjectNavigation";

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            {children}
            <ProjectNavigation />
        </>
    );
}
