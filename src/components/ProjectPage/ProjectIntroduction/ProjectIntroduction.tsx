import { ProjectIntroductionProps } from "./ProjectIntroduction.types";
import StyledTinaMarkup from "$components/generics/StyledTinaMarkup";

export default function ProjectIntroduction({ projectData }: ProjectIntroductionProps) {
    const withDescription = "intro" in projectData;

    return (
        <header className="xxl:max-w-auto flex w-full max-w-[1200px] flex-col justify-start px-4 py-8 s:px-8">
            <h1 className="text-2xl font-bold">{projectData.title}</h1>

            {withDescription && (
                <div className="flex flex-col items-center gap-4 py-5">
                    <StyledTinaMarkup
                        content={projectData.intro}
                    />
                </div>
            )}
        </header>
    );
}
