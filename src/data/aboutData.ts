import { AboutGalleryData } from "$types/AboutGallery.types";

const aboutGalleryData: AboutGalleryData = {
    header: "Kinga Ewa Wójcik BIO",

    aboutGalleryContent: [
        {
            tabName: "wykształcenie",
            component: "List",

            configuration: {
                leftColumnWidth: 10,
                descriptionPosition: "top",
                withH1: false,
                withDescription: false,
            },

            tabContent: {
                h1: "Wykształcenie",
                listContent: [
                    {
                        header: {
                            1: "09.2017 - 08.2018",
                            2: "Wrocław",
                        },
                        description: {
                            1: "Grafik komputerowa - roczny kurs zawodowy w TEB Edukacja Centrum Kształcenia Praktycznego",
                            2: `Zrealizowane przedmioty: grafika rastrowa  /  grafika wektorowa  /  projektowanie graficzne  /  podstawy fotografii cyfrowej  /  podstawy typografii  /  podstawy DTP  /  systemy CMS  /   podstawy animacji komputerowej  /  podstawy grafiki 3D`,
                            3: "prowadzący: Tomasz Rodakiewicz",
                        },
                    },
                    {
                        header: {
                            1: "10.2012 - 06.2015",
                            2: "Lublin",
                        },
                        description: {
                            1: "licencjat z kognitywistyki na Uniwersytecie Marii Curie-Skłodowskiej",
                            2: "Kognitywistyka jest dziedziną  zorientowaną wokół problemów ludzkiego poznania, komunikacji czy zdolności do posługiwania się symbolami. Na studiach miałam okazję zgłębić właśnie te problemy, co zaowocowało pracą dyplomową z dziedziny semiotyki (znaków), która dotyczyła mechanizmu rozumienia języka z perspektywy psychologii, neurologii oraz językoznawstwa.",
                            3: "",
                        },
                    },
                ],
            },
        },
        {
            tabName: "kursy i szkolenia",
            component: "List",

            configuration: {
                leftColumnWidth: 10,
                descriptionPosition: "top",
                withH1: false,
                withDescription: false,
            },

            tabContent: {
                h1: "Kursy i szkolenia",
                listContent: [
                    {
                        header: {
                            1: "01.2024 - obecnie",
                            2: "kurs online (Udemy)",
                        },
                        description: {
                            1: "Complete Web & Mobile Designer: UI/UX, Figma",
                            2: "(28h wykładów + ćwiczenia)",
                            3: "prowadzący: Andrei Neagoie, Daniel Schifano",
                        },
                    },
                    {
                        header: {
                            1: "11.2023 - obecnie",
                            2: "kurs online (Udemy)",
                        },
                        description: {
                            1: "The Ultimate Digital Painting Course - Beginner to Advanced",
                            2: "(27h wykładów + ćwiczenia)",
                            3: "prowadzący: Jaysen Batchelor, Austin Batchelor",
                        },
                    },
                    {
                        header: {
                            1: "10 - 11.2023",
                            2: "kurs online (Udemy)",
                        },
                        description: {
                            1: "Graphic Design Masterclass Intermediate: The NEXT Level",
                            2: "(30h wykładów + ćwiczenia)",
                            3: "prowadzący: Lindsay Marsh",
                        },
                    },
                    {
                        header: {
                            1: "09.2023",
                            2: "kurs online (Udemy)",
                        },
                        description: {
                            1: "The Complete Graphic Design Theory for Beginners Course",
                            2: "(10h wykładów + ćwiczenia)",
                            3: "prowadzący: Lindsay Marsh, Jeremy Deighan",
                        },
                    },
                ],
            },
        },
    ],
};

export { aboutGalleryData };
