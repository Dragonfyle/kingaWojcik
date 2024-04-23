import { projectUrlList, findCurrentUrlIndex, handleChangeProject } from "./ProjectNavigation.utils";
import ProjectNavButtons from "../ProjectNavButtons/";

const MIN_IDX = 0;
const maxIdx = projectUrlList.length - 1;

export default function ProjectNavigation() {
    const currentUrlIndex = findCurrentUrlIndex();
    const nextUrlIndex = (currentUrlIndex + 1) % projectUrlList.length;
    const previousUrlIndex = currentUrlIndex - 1 < MIN_IDX ? maxIdx : currentUrlIndex - 1;

    return (
        <ProjectNavButtons
            onNextProject={() => handleChangeProject(nextUrlIndex)}
            onPreviousProject={() => handleChangeProject(previousUrlIndex)}
        />
    );
}
