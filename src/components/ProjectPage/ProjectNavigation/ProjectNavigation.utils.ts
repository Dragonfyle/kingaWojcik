import { ProjectPanelData } from "$data/projectPanelData";

const projectUrlList = [
    ...ProjectPanelData.branding.content.map((project) => project.projectUrl),
    ...ProjectPanelData.editorial.content.map((project) => project.projectUrl),
];

function findCurrentUrlIndex() {
    return projectUrlList.indexOf(window.location.pathname.slice(1));
}

function handleChangeProject(index: number) {
    window.location.pathname = projectUrlList[index];
}

export { projectUrlList, findCurrentUrlIndex, handleChangeProject };
