import wstepneSzkice from "$img/projects/4spacje/czteryspacje_wstepne_szkice.png";
import logoPropozycja4spacje from "$img/projects/4spacje/logo-propozycja.png";
import logo4spacje from "$img/projects/4spacje/logo.png";
import wyszukiwarkaTeraz from "$img/projects/4spacje/wyszukiwarka-teraz.png";
import rekrutacjaArtykuly from "$img/projects/4spacje/czteryspacje_rekrutacja-artykuly.jpg";
import rekrutacjaZadania from "$img/projects/4spacje/czteryspacje_rekrutacja-zadania.jpg";
import naglowki from "$img/projects/4spacje/czteryspacje_naglowki.gif";
import stronaGlowna from "$img/projects/4spacje/czteryspacje_glowna.png";
import stronaGlownaLight from "$img/projects/4spacje/articleLightMode.png";
import mapyMysli from "$img/projects/4spacje/czteryspacje_mapy.jpg";
import staraLight from "$img/projects/4spacje/czteryspacje_stara-strona-light.jpg";
import staraDark from "$img/projects/4spacje/czteryspacje_stara-strona.jpg";
import { TabbedGalleryData } from "$types/tabbedGallery.types";

const tabbedGalleryData: TabbedGalleryData = {
    project1: {
        header: "Projekt logo i strony internetowej dla 4spacje.pl -redesign",
        intro: ``,

        tabbedGalleryContent: [
            {
                tabName: "brief",
                highlight: `4spacje.pl to blog o technologiach internetowych. Celem autorów jest dzielenie się wiedzą dotyczącą tworzenia i projektowania stron internetowych, a także zbudowanie przestrzeni sprzyjającej nauce.
                
                Projekty logo i strony internetowej powstały w oparciu o brief, wypełniony przez każdego członka zespołu. Pytania dotyczyły celu powstania bloga, misji, jaką ma spełniać strona, jej grupy docelowej oraz pokrewnych kwestii.
                
                Dzięki tym informacjom byłam w stanie przygotować propozycje logo i projekt nowej strony adekwatnie do roli, jaką mają one spełniać.`,

                features: {
                    feature1: {
                        component: "Text",

                        configuration: {
                            withH1: true,
                        },

                        content: {
                            h1: "Podsumowanie briefów",
                            description: `Zebrałam najważniejsze, powtarzające się informacje, które posłużyły za tło koncepcyjne dla projektu.
                            
                            -chcemy kreować wizerunek ekspertów, mentorów chętnych do pomocy, ludzi z pasją. Trzy najlepiej określające nas słowa to: profesjonalni, nietuzinkowi, rzetelni
                            -naszym celem jest poszerzanie kręgu odbiorców, dzielenie się wiedzą, stworzenie solidnej bazy informacji i coraz większe angażowanie użytkowników
                            -grupą docelową są głównie młodzi programiści i designerzy, stąd też potrzeba pójścia w kierunku nowoczesnego projektu witryny`,
                        },
                    },
                    feature2: {
                        component: "ImageText",

                        configuration: {
                            leftColumnWidth: 50,
                            withH1: true,
                            withDescription: false,
                            descriptionPosition: "bottom",
                        },

                        content: {
                            img: mapyMysli,
                            h1: "Na podstawie briefów powstały mapy myśli",
                            description: "",
                        },
                    },
                },
            },
            {
                tabName: "logo",
                highlight:
                    "Wykorzystując jak najprostsze środki wyrazu staralam się oddać najważniejsze wartości marki: profesjonalizm i edukacyjny charakter bloga. Poniżej zestawienie wstępnych szkiców, powstałych w oparciu o brief oraz przygotowane na jego podstawie mapy myśli, które pomogły mi uporządkować skojarzenia, a także odkryć te mniej oczywiste powiązania.",

                features: {
                    feature1: {
                        component: "Image",
                        configuration: {
                            withH1: true,
                            withDescription: true,
                        },
                        content: {
                            img: wstepneSzkice,
                            h1: "Wstępne szkice powstałe na podstawie briefów i map myśli",
                            description: "",
                        },
                    },

                    feature2: {
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
                            rightH1: "Ostateczny projekt logo",
                            leftDescription: `Na blogu staramy się opisywać, tłumaczyć i komentować świat technologii internetowych. Projekt logo wykorzystuje więc dwa ukośniki, które w niektórych językach programowania wprowadzają komentarz.
                                
                            Jednocześnie jest to też cudzysłów otwierający, nawiązujący do dzielenia się wiedzą i opiniami.
                               
                            Dwa ukośniki tworzą cyfrę 4, stanowiącą pierwszy człon nazwy bloga.`,

                            rightDescription: `Jak się okazało, czwórka w sygnecie nie była na tyle oczywista, aby odczytywać ją jako część nazwy. A jest to istotne dla rozpoznawalności marki.

                            Dodałam czwórkę do logotypu i poszerzyłam ukośniki w sygnecie. W ten sposób wprowadzony został też motyw kart tarota, co nawiązuje do genezy nazwy.

                                Zmieniony został także font, by bardziej współgrał ze szkoleniowym charakterem bloga.`,
                        },
                    },
                    feature3: {
                        component: "Text",

                        configuration: {
                            withH1: true,
                        },

                        content: {
                            h1: "Symbolika logotypu",
                            description: `Gruba linia fontu sugeruje solidność, autorytet i rzetelność. Krój jednoelementowy nawiązuje do cech, takich jak stabilność i przewidywalność.
                            Połączenie minuskuły i majuskuły: małe litery sprawiają, że logo jest bardziej przyjazne, komunikują otwartość na ludzi i chęć budowania relacji, wielkie litery dają wrażenie wiarygodności, profesjonalizmu. Ich połączenie tworzy balans między tymi wartościami.
                            `,
                        },
                    },
                },
            },
            {
                tabName: "nowy design strony",
                highlight: `Zmiany obejmują przede wszystkim kwestie estetyczne, ale także modyfikacje niektórych funkcjonalności i sposobu działania strony (z nastawieniem na użytkowników desktopowych, skąd pochodzi ponad 90% ruchu).
                
                Witryna została ożywiona odcieniami limonki, wybranej jako główny kolor brandowy. Projekt Ppzygotowałam zarówno dla jasnego, jak i ciemnego motywu. Zmieniona została cała kolorystyka, która dotąd była trochę rozbałaganiona (np. funkcjonowało kilkanaście bardzo zbliżonych do siebie odcieni, elementy na stronie kolorowane były w niekonsekwentny sposób: np. pełniły tę samą funkcję, ale za każdym razem miały inny kolor) i nieharmonijna (brak koloru akcentującego, wszystkie barwy jednakowo przygaszone).
                `,

                features: {
                    feature1: {
                        component: "ImageImage",
                        configuration: {
                            leftColumnWidth: 50,
                            withLeftH1: true,
                            withRightH1: true,
                            withLeftDescription: false,
                            withRightDescription: false,
                            descriptionPosition: "bottom",
                        },
                        content: {
                            leftImg: stronaGlowna,
                            rightImg: stronaGlownaLight,
                            leftH1: "",
                            rightH1: "",
                        },
                    },
                    feature2: {
                        component: "Text",
                        configuration: {
                            withH1: true,
                        },
                        content: {
                            h1: "Redesign wyszukiwarki",
                            description: `Zaproponowałam przebudowę wyszukiwarki artykułów pod kątem poprawy jej użyteczności, a także wyglądu.

                            Dotąd opierała się ona na rozwijanej liście tagów, a filtry wyszukiwania aplikowane były po zaznaczeniu wybranych i zamknięciu pola “select”. Wtedy dopiero lista artykułów była aktualizowana, uwzględniając wybory użytkownika. Mogło to powodować zakłopotanie korzystających ze strony osób, które spodziewałyby się natychmiastowego działania zaznaczonych przez nich tagów.
                            
                            W zaprojektowanym przeze mnie rozwiązaniu najważniejsze tagi są widoczne od razu. Eliminuje to konieczność kliknięcia w celu otwarcia listy. Wyszukiwarka zajmuje całą szerokość strony, dzięki czemu jest lepiej widoczna. Okno z tagami można rozwinąć, by zobaczyć więcej filtrów. Mają one być aplikowane od razu po zaznaczeniu. Usunięte zostały wszelkie zbędne elementy i teksty, biorąc pod uwagę, że użytkownicy naszej strony to osoby dobrze radzące sobie z technologiami`,
                        },
                    },
                    feature3: {
                        component: "Image",
                        configuration: {
                            withH1: false,
                            withDescription: false,
                        },
                        content: {
                            img: wyszukiwarkaTeraz,
                            h1: "",
                            description: "",
                        },
                    },
                },
            },
            {
                tabName: "moje propozycje",
                highlight: `Zaproponowałam dodanie zakładki REKRUTACJA, w której zamieszczane będą artykuły dotyczące poszukiwania pracy i możliwych ścieżek rozwoju, a także pytania i zadania rekrutacyjne.`,

                features: {
                    feature1: {
                        component: "Image",
                        configuration: {
                            withH1: false,
                            withDescription: false,
                        },
                        content: {
                            img: rekrutacjaZadania,
                            h1: "",
                            description: "",
                        },
                    },
                    feature2: {
                        component: "Image",
                        configuration: {
                            withH1: false,
                            withDescription: false,
                        },
                        content: {
                            img: rekrutacjaArtykuly,
                            h1: "",
                            description: "",
                        },
                    },

                    feature3: {
                        component: "Image",
                        configuration: {
                            withH1: false,
                            withDescription: true,
                        },
                        content: {
                            img: naglowki,
                            h1: "",
                            description: "Przygotowałam projekt nagłówków artykułów.",
                        },
                    },
                },
            },
            {
                tabName: "4spacje.pl przed redesignem",
                highlight: `Tak wyglądał blog zanim wdrożona została nowa szata graficzna. Zmieniona została cała kolorystyka. Jednak pracując nad projektem starałam się bazować na istniejących już schematach i układach elementów, by ułatwić zadanie zespołowi IT.`,

                features: {
                    feature1: {
                        component: "Image",
                        configuration: {
                            withH1: false,
                            withDescription: false,
                        },
                        content: {
                            img: staraLight,
                            h1: "",
                            description: "",
                        },
                    },
                    feature2: {
                        component: "Image",
                        configuration: {
                            withH1: false,
                            withDescription: false,
                        },
                        content: {
                            img: staraDark,
                            h1: "",
                            description: "",
                        },
                    },
                },
            },
        ],
    },
};

export { tabbedGalleryData };
