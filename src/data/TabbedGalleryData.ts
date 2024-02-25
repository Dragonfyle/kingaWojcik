interface Feature {
    img: string;
    headerH1: string;
    headerH3: string;
    sideDescription: string;
    topDescription: string;
    bottomDescription: string;
}

type Features = { [key: `feature${number}`]: Feature };

interface ProjectContent {
    tabName: string;
    highlight: string;
    features: Features;
}

interface GalleryProject {
    header: string;
    intro: string;
    content: ProjectContent[];
}

interface TabbedGalleryData {
    [key: `project${number}`]: GalleryProject;
}

const tabbedGalleryData: TabbedGalleryData = {
    project1: {
        header: "Officia ullamco",
        intro: "Mollit anim ex commodo occaecat et cupidatat.Ut commodo voluptate elit est aliquip ea nulla id non.",
        content: [
            {
                tabName: "brief",
                highlight: "Sint in eiusmod culpa ex nostrud fugiat do non eiusmod veniam laboris nostrud excepteur.",
                features: {
                    feature1: {
                        img: "https://picsum.photos/seed/6353/1200/640",
                        headerH1: "",
                        headerH3: "",
                        sideDescription: "",
                        topDescription: "",
                        bottomDescription: "",
                    },
                    feature2: {
                        img: "https://picsum.photos/seed/17773/850/640",
                        headerH1: "Et mollit",
                        headerH3: "Sit nisi",
                        sideDescription:
                            "Nostrud ea tempor tempor proident esse dolore labore consequat nisi anim. Veniam eiusmod Lorem fugiat cupidatat.",
                        topDescription: "Deserunt nostrud sint ex occaecat aliquip duis veniam culpa tempor elit.",
                        bottomDescription:
                            "Nulla in consectetur nostrud deserunt.Dolor officia veniam sunt proident magna.Nostrud voluptate tempor est fugiat sint cillum nisi veniam do magna amet esse excepteur.",
                    },
                },
            },
            {
                tabName: "logo",
                highlight:
                    "Cillum velit amet aute amet voluptate amet quis.Eu eu elit ea reprehenderit aliquip fugiat non eiusmod consectetur.",
                features: {
                    feature1: {
                        img: "https://picsum.photos/seed/12fds3/850/640",
                        headerH1: "Tempor",
                        headerH3: "Dolore anim anim",
                        sideDescription:
                            "Nostrud ea tempor tempor proident esse dolore labore consequat nisi anim. Veniam eiusmod Lorem fugiat cupidatat.",
                        topDescription:
                            "Amet quis occaecat incididunt quis excepteur fugiat id cillum velit nulla in irure dolor exercitation.",
                        bottomDescription: "",
                    },
                    feature2: {
                        img: "https://picsum.photos/seed/199dgs3/1200/640",
                        headerH1: "Et mollit",
                        headerH3: "",
                        sideDescription: "",
                        topDescription: "",
                        bottomDescription: "",
                    },
                },
            },
            {
                tabName: "strona internetowa",
                highlight: "Veniam cupidatat laboris ut aute eiusmod.",
                features: {
                    feature1: {
                        img: "https://picsum.photos/seed/11/1200/640",
                        headerH1: "Lorem Aute",
                        headerH3: "",
                        sideDescription: "",
                        topDescription: "",
                        bottomDescription: "",
                    },
                    feature2: {
                        img: "https://picsum.photos/seed/hs89/850/640",
                        headerH1: "Et mollit",
                        headerH3: "Sit nisi",
                        sideDescription:
                            "Nostrud ea tempor tempor proident esse dolore labore consequat nisi anim. Veniam eiusmod Lorem fugiat cupidatat.",
                        topDescription: "",
                        bottomDescription:
                            "Id labore anim est laboris commodo esse mollit nulla laboris irure occaecat velit aute.Voluptate officia proident dolor ipsum irure cillum est excepteur.",
                    },
                },
            },
            {
                tabName: "moje propozycje",
                highlight: "Do incididunt dolore elit eu esse.Mollit eu ipsum non mollit cupidatat enim.",
                features: {
                    feature1: {
                        img: "https://picsum.photos/seed/j1230th/850/640",
                        headerH1: "Dolore ad ",
                        headerH3: "Ullamco",
                        sideDescription:
                            "Reprehenderit excepteur aliquip sit deserunt reprehenderit sit laboris velit.Do qui reprehenderit sit dolor magna.Quis consequat irure nisi ullamco pariatur aliqua eiusmod esse deserunt.",
                        topDescription: "",
                        bottomDescription: "",
                    },
                    feature2: {
                        img: "https://picsum.photos/seed/jg248/1200/640",
                        headerH1: "Et mollit",
                        headerH3: "",
                        sideDescription: "",
                        topDescription: "",
                        bottomDescription: "",
                    },
                },
            },
        ],
    },
};

export { tabbedGalleryData };

export type { Feature, Features, ProjectContent, GalleryProject, TabbedGalleryData };
