import wstepneSzkice from "/wstepne-szkice.png";
import logoPropozycja4spacje from "/logo-propozycja.png";
import logo4spacje from "/logo.png";
import { PlainGalleryData } from "../types/plainGallery.types";

const plainGalleryData: PlainGalleryData = {
    project1: {
        header: "Strona internetowa i logo dla 4spacje",
        intro: `4spacje.pl to blog o technologiach internetowych. Celem autorów jest dzielenie się wiedzą dotyczącą tworzenia i projektowania stron internetowych, a także zbudowanie przestrzeni sprzyjającej nauce.

        Poprosiłam zespół, pracujący nad blogiem, o szczegółowe informacje, dotyczące tego projektu. Każdy z nich otrzymał do wypełnienia ankietę (brief) z pytaniami dotyczącymi celu powstania bloga, misji, jaką ma spełniać strona, jej grupy docelowej oraz wielu pokrewnych kwestii. Dzięki temu byłam w stanie przygotować propozycje logo i projektu redesignu strony adekwatnie do roli, jaką mają one spełniać.
        `,

        plainGalleryContent: [
            {
                component: "ImageText",

                configuration: {
                    leftColumnWidth: 10,
                    descriptionPosition: "top",
                    withH1: false,
                    withDescription: false,
                },

                content: {
                    img: wstepneSzkice,
                    h1: "",
                    description:
                        "Na blogu staramy się opisywać, tłumaczyć i komentować świat technologii internetowych. Projekt logo wykorzystuje więc dwa ukośniki, które w programowaniu wprowadzają komentarz.",
                },
            },
            {
                component: "ImageText",

                configuration: {
                    leftColumnWidth: 10,
                    descriptionPosition: "top",
                    withH1: false,
                    withDescription: false,
                },

                content: {
                    img: wstepneSzkice,
                    h1: "",
                    description:
                        "Jednocześnie jest to też cudzysłów otwierający, nawiązujący do dzielenia się wiedzą i opiniami.",
                },
            },
            {
                component: "ImageText",

                configuration: {
                    leftColumnWidth: 10,
                    descriptionPosition: "top",
                    withH1: false,
                    withDescription: false,
                },

                content: {
                    img: wstepneSzkice,
                    h1: "",
                    description: "Dwa ukośniki tworzą cyfrę 4, stanowiącą pierwszy człon nazwy bloga.",
                },
            },
            {
                component: "ImageImage",

                configuration: {
                    leftColumnWidth: 50,
                    descriptionPosition: "bottom",
                    withLeftH1: true,
                    withRightH1: true,
                    withLeftDescription: true,
                    withRightDescription: true,
                },

                content: {
                    leftImg: logoPropozycja4spacje,
                    rightImg: logo4spacje,
                    leftH1: "Wstępna propozycja logo",
                    rightH1: "Konieczne okazały się poprawki",
                    leftDescription: `Na blogu staramy się opisywać, tłumaczyć i komentować świat technologii internetowych. Projekt logo wykorzystuje więc dwa ukośniki, które w programowaniu wprowadzają komentarz.
                                
                            Jednocześnie jest to też cudzysłów otwierający, nawiązujący do dzielenia się wiedzą i opiniami.
                               
                            Dwa ukośniki tworzą cyfrę 4, stanowiącą pierwszy człon nazwy bloga.
                                `,
                    rightDescription: `Jak się okazało, czwórka w sygnecie nie była na tyle oczywista, aby odczytywać ją jako część nazwy. A jest to istotne dla rozpoznawalności marki.

                            Dodałam czwórkę do logotypu i poszerzyłam ukośniki w sygnecie. W ten sposób wprowadzony został też motyw kart tarota, co nawiązuje do genezy nazwy.

                                Zmieniony został także font, by bardziej współgrał ze szkoleniowym charakterem bloga.
                                Gruba linia fontu sugeruje solidność, autorytet, rzetelność. Font jednoelementowy stanowi symbol męskości i stabilności.
                                Połączenie minuskuły i majuskuły: małe litery sprawiają, że logo jest bardziej przyjazne, komunikują otwartość na ludzi i chęć budowania relacji, wielkie litery dają wrażenie wiarygodności, profesjonalizmu. Ich połączenie tworzy balans między tymi wartościami.
                                `,
                },
            },
        ],
    },
};

export { plainGalleryData };
