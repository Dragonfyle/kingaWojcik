import { AboutGalleryData } from "$types/AboutGallery.types";

const aboutGalleryData: AboutGalleryData = {
    header: "Kinga Ewa Wójcik BIO",

    aboutGalleryContent: [
        {
            tabName: "nagrody i wyróżnienia",
            component: "List",

            configuration: {
                leftColumnWidth: 10,
                descriptionPosition: "top",
                withH1: false,
                withDescription: false,
            },

            tabContent: {
                h1: "Nagrody i wyróżnienia",
                listContent: [
                    {
                        header: {
                            1: "07.2024",
                            2: "Renault Trucks",
                        },
                        description: {
                            1: "Zwycięstwo w międzynarodowym konkursie Renault Trucks Design Contest",
                            2: "Zwycięski projekt w konkursie na stworzenie grafiki na elektryczny ciągnik siodłowy Renault",
                            3: "",
                        },
                    },
                    {
                        header: {
                            1: "10.2023",
                            2: "Agora",
                        },
                        description: {
                            1: `Wyróżnienie w konkursie "Moja Wolność - Moja Sprawa"`,
                            2: `Plakat wyróżniony w konkursie z okazji rocznicy odzyskania niepodległości, zakwalifikowany do wystawy pokonkursowej`,
                            3: "",
                        },
                    },
                ],
            },
        },
        {
            tabName: "Współpraca",
            component: "List",

            configuration: {
                leftColumnWidth: 10,
                descriptionPosition: "top",
                withH1: false,
                withDescription: false,
            },

            tabContent: {
                h1: "Współpraca",
                listContent: [
                    {
                        header: {
                            1: "Zawsze",
                            2: "Wszędzie",
                        },
                        description: {
                            1: "Napisz do mnie",
                            2: `Skontaktuj się, jeśli chciałbyś podjąć współpracę w zakresie projektowania grafiki lub analizy istniejących kreacji. Masz inną propozycję? Nie powstrzymuj się od napisania wiadomości. Wszelkie wspólne projekty są mile widziane. Staram się odpowiadać w ciągu kilku dni.`,
                            3: "wojcik.kinga.ewa@gmail.com",
                        },
                    },

                ],
            },
        },

    ],
};

export { aboutGalleryData };
