import wstepneSzkice from "/wstepne-szkice.png";

type FeatureComponent = "ColumnsTextText" | "ColumnsTextImage" | "ColumnsImageImage" | "ColumnsImageText";

interface Feature {
    component: FeatureComponent;
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
        header: "Strona internetowa i logo dla 4spacje",
        intro: "Mollit anim ex commodo occaecat et cupidatat.Ut commodo voluptate elit est aliquip ea nulla id non.",
        content: [
            {
                tabName: "brief",
                highlight: "Sint in eiusmod culpa ex nostrud fugiat do non eiusmod veniam laboris nostrud excepteur.",
                features: {
                    feature1: {
                        component: "ColumnsImageImage",
                        img: wstepneSzkice,
                        headerH1: "Podsumowanie briefów wypełnionych przez zespół",
                        headerH3: "",
                        sideDescription: "",
                        topDescription: `\n- chcemy kreować wizerunek ekspertów, mentorów chętnych do pomocy, ludzi z pasją. Trzy najlepiej określające nas słowa to: profesjonalni, nietuzinkowi, rzetelni
                        \n-naszym celem jest poszerzanie kręgu odbiorców, dzielenie się wiedzą, stworzenie solidnej bazy informacji i coraz większe angażowanie użytkowników
                        \n-grupą docelową są głównie młodzi programiści i designerzy, stąd też potrzeba pójścia w kierunku nowoczesnego projektu witryny
                        `,
                        bottomDescription: "",
                    },
                    feature2: {
                        component: "ColumnsTextImage",
                        img: "https://picsum.photos/seed/17773/850/640",
                        headerH1: "Et mollit",
                        headerH3: "Sit nisi",
                        sideDescription:
                            "Nostrud ea tempor tempor proident esse dolore labore consequat nisi anim. Veniam eiusmod Lorem fugiat cupidatat.",
                        topDescription:
                            "Deserunt nostrud sint ex occaecat aliquip duis veniam culpa tempor elit.Officia ea eiusmod minim cillum.Veniam culpa do aute laboris ex minim.Velit labore pariatur commodo enim.Exercitation ad adipisicing nisi velit consectetur duis Lorem deserunt magna non.Amet incididunt ullamco exercitation dolor exercitation aute occaecat.Consectetur ullamco pariatur reprehenderit mollit exercitation enim exercitation tempor sunt qui dolore aliquip aute ullamco.Mollit velit enim consequat Lorem ipsum laborum excepteur consectetur reprehenderit ipsum sint sunt mollit.Cupidatat cupidatat duis ex ad ut magna cupidatat sint dolore.",
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
                        component: "ColumnsImageText",
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
                        component: "ColumnsImageText",
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
                        component: "ColumnsImageText",
                        img: "https://picsum.photos/seed/11/1200/640",
                        headerH1: "Lorem Aute",
                        headerH3: "",
                        sideDescription: "",
                        topDescription: "",
                        bottomDescription: "",
                    },
                    feature2: {
                        component: "ColumnsImageText",
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
                        component: "ColumnsImageText",
                        img: "https://picsum.photos/seed/j1230th/850/640",
                        headerH1: "Dolore ad ",
                        headerH3: "Ullamco",
                        sideDescription:
                            "Reprehenderit excepteur aliquip sit deserunt reprehenderit sit laboris velit.Do qui reprehenderit sit dolor magna.Quis consequat irure nisi ullamco pariatur aliqua eiusmod esse deserunt.",
                        topDescription: "",
                        bottomDescription: "",
                    },
                    feature2: {
                        component: "ColumnsImageText",
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
