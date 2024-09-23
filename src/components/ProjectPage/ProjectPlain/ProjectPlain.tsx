import PlainGallery from "./PlainGallery/";
import ProjectIntroduction from "../ProjectIntroduction/";
import { ProjectPlainProps } from "./ProjectPlain.types";

export default function ProjectPlain({ projectData }: ProjectPlainProps) {
    return (
        <div className="m-auto flex max-w-project-max flex-col items-center justify-center">
            <ProjectIntroduction projectData={projectData} />
            <PlainGallery projectData={projectData} />
        </div>
    );
}
