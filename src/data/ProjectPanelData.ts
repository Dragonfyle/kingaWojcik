import { CONFIG } from "../constants/config";

type ProjectPanelData = typeof ProjectPanelData;

type ProjectPanelDataSection = ProjectPanelData[keyof ProjectPanelData];

const ProjectPanelData = {
    branding: {
        header: "Officia ullamco",
        intro: "Mollit anim ex commodo occaecat et cupidatat.Ut commodo voluptate elit est aliquip ea nulla id non.",
        content: [
            {
                thumbnail: "https://picsum.photos/seed/123/640/360",
                title: "Et mollit",
                description:
                    "Nostrud ea tempor tempor proident esse dolore labore consequat nisi anim. Veniam eiusmod Lorem fugiat cupidatat.",
                projectUrl: CONFIG.PATHS.PROJECTS.BRANDING[1],
            },
            {
                thumbnail: "https://picsum.photos/seed/1245/640/360",
                title: "Enim commodo",
                description:
                    "Aliquip pariatur eiusmod occaecat cillum. Amet velit commodo laboris tempor laborum do aliquip adipisicing veniam eiusmod velit adipisicing.",
                projectUrl: CONFIG.PATHS.PROJECTS.BRANDING[2],
            },
            {
                thumbnail: "https://picsum.photos/seed/sdag/640/360",
                title: "Occaecat magna",
                description: "Dolor est cupidatat mollit veniam minim amet deserunt do amet sunt.",
                projectUrl: CONFIG.PATHS.PROJECTS.BRANDING[3],
            },
        ],
    },
    editorial: {
        header: "Officia ullamco",
        intro: "Mollit anim ex commodo occaecat et cupidatat.Ut commodo voluptate elit est aliquip ea nulla id non.",
        content: [
            {
                thumbnail: "https://picsum.photos/seed/sdag/640/360",
                title: "Excepteur",
                description: "Ea eiusmod est laboris aliqua nostrud dolor esse consectetur.",
                projectUrl: CONFIG.PATHS.PROJECTS.EDITORIAL[1],
            },
            {
                thumbnail: "https://picsum.photos/seed/h53q/640/360",
                title: "Laboris",
                description: "Quis id in commodo cupidatat tempor in magna aliqua consectetur excepteur Lorem.",
                projectUrl: CONFIG.PATHS.PROJECTS.EDITORIAL[2],
            },
        ],
    },
} as const;

export { ProjectPanelData };

export type { ProjectPanelDataSection };
