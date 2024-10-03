import PlainGallery from "./PlainGallery/";
import ProjectIntroduction from "./ProjectIntroduction/";
import { ProjectPageProps } from "./ProjectPage.types";

export default function ProjectPage({ projectData }: ProjectPageProps) {
    const hasTitle = !!projectData.title;
    const hasIntro = projectData.intro.children.length > 0;
    const shouldRenderIntro = hasTitle || hasIntro;

    return (
        <div className="max-w-project-max-s m-auto flex flex-col items-center justify-center l:max-w-project-max">
            {shouldRenderIntro && <ProjectIntroduction projectData={projectData} />}
            <PlainGallery projectData={projectData} />
        </div>
    );
}
