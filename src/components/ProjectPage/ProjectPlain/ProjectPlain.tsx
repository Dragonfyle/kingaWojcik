import PlainGallery from "./PlainGallery/";
import ProjectIntroduction from "../ProjectIntroduction/";
import { ProjectPlainProps } from "./ProjectPlain.types";

export default function ProjectPlain({ projectData }: ProjectPlainProps) {
    const hasTitle = !!projectData.title;
    const hasIntro = projectData.intro.children.length > 0;
    const shouldRenderIntro = hasTitle || hasIntro;

    return (
        <div className="m-auto flex max-w-project-max-s flex-col items-center justify-center l:max-w-project-max">
            {shouldRenderIntro && <ProjectIntroduction projectData={projectData} />}
            <PlainGallery projectData={projectData} />
        </div>
    );
}
