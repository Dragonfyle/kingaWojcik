import NextIcon from "$components/generics/NavIcon/Next/Next";
import PreviousIcon from "$components/generics/NavIcon/Previous/Previous";

import { ProjectNavigationProps } from "../ProjectNavigation/ProjectNavigation.types";

export default function ProjectNavButtons({
    onNextProject,
    onPreviousProject,
    nextProjectName,
    previousProjectName,
}: ProjectNavigationProps) {
    return (
        <div className="left-[1%] right-[1%] top-1/2 flex -translate-y-1/2 transform justify-between">
            <PreviousIcon onClick={onPreviousProject} tooltipValue={previousProjectName} />
            <NextIcon onClick={onNextProject} tooltipValue={nextProjectName} />
        </div>
    );
}
