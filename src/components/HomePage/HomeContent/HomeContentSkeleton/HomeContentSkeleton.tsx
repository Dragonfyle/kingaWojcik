import ProjectSectionSkeleton from "../../ProjectsSection/ProjectSectionSkeleton";

export default function HomeContentSkeleton() {
    return (
        <div className="flex flex-col justify-center gap-y-24 bg-white-1 m:gap-y-0">
            <ProjectSectionSkeleton />
            <ProjectSectionSkeleton />
            <ProjectSectionSkeleton />
        </div>
    );
}
