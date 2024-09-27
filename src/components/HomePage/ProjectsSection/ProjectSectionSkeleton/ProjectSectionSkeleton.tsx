import ProjectPanelItemSkeleton from "../ProjectPanel/ProjectPanelItem/ProjectPanelItemSkeleton";

export default function ProjectSectionSkeleton() {
    return (
        <section className="w-95% l:89% site-padding m:h-project-section-s relative flex h-auto flex-col py-10">
            <div className="flex flex-col">
                <div className="h-12 w-20 rounded-full border-2 border-black"></div>
                <div className="mt-12 flex snap-x flex-nowrap gap-x-12 overflow-x-auto pr-12 scrollbar-none l:mt-8 l:pr-[300px]">
                    <div className="flex gap-x-12">
                        <ProjectPanelItemSkeleton />
                        <ProjectPanelItemSkeleton />
                        <ProjectPanelItemSkeleton />
                        <ProjectPanelItemSkeleton />
                    </div>
                </div>
            </div>
        </section>
    );
}
