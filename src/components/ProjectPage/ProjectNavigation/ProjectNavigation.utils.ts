import { ProjectPanelData } from "$data/ProjectPanelData";

const projectUrlList = [
    ...ProjectPanelData.branding.content.map((project) => ({ url: project.projectUrl, name: project.name })),
    ...ProjectPanelData.editorial.content.map((project) => ({ url: project.projectUrl, name: project.name })),
];

function findCurrentUrlIndex() {
    return projectUrlList.map(({ url }) => url).indexOf(window.location.pathname.slice(1));
}

function handleChangeProject(index: number) {
    window.location.pathname = projectUrlList[index].url;
}

export { projectUrlList, findCurrentUrlIndex, handleChangeProject };
