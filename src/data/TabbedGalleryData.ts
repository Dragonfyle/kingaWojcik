import wstepneSzkice from "/czteryspacje_wstepne_szkice.png";
import logoPropozycja4spacje from "/logo-propozycja.png";
import logo4spacje from "/logo.png";
import wyszukiwarkaTeraz from "/wyszukiwarka-teraz.png";
import rekrutacjaArtykuly from "/czteryspacje_rekrutacja-artykuly.jpg";
import rekrutacjaZadania from "/czteryspacje_rekrutacja-zadania.jpg";
import naglowki from "/czteryspacje_naglowki.gif";
import stronaGlowna from "/czteryspacje_glowna.png";
import { TabbedGalleryData } from "../types/tabbedGallery.types";

const tabbedGalleryData: TabbedGalleryData = {
    project1: {
        header: "Projekt logo i strony internetowej dla 4spacje.pl",
        intro: ``,

        tabbedGalleryContent: [
            {
                tabName: "brief",
                highlight: `4spacje.pl to blog o technologiach internetowych. Celem autorów jest dzielenie się wiedzą dotyczącą tworzenia i projektowania stron internetowych, a także zbudowanie przestrzeni sprzyjającej nauce.
                Każdy członek zespołu otrzymał do wypełnienia ankietę (brief) z pytaniami dotyczącymi celu powstania bloga, misji, jaką ma spełniać strona, jej grupy docelowej oraz wielu pokrewnych kwestii. Dzięki temu byłam w stanie przygotować propozycje logo i projektu redesignu strony adekwatnie do roli, jaką mają one spełniać`,

                features: {
                    feature1: {
                        component: "Text",

                        configuration: {
                            withH1: true,
                        },

                        content: {
                            h1: "Co wynikło z briefów?",
                            description: `Zebrałam najważniejsze, powtarzające się informacje, które posłużyły za tło koncepcyjne dla projektu.
                            
                            -chcemy kreować wizerunek ekspertów, mentorów chętnych do pomocy, ludzi z pasją. Trzy najlepiej określające nas słowa to: profesjonalni, nietuzinkowi, rzetelni
                            -naszym celem jest poszerzanie kręgu odbiorców, dzielenie się wiedzą, stworzenie solidnej bazy informacji i coraz większe angażowanie użytkowników
                            -grupą docelową są głównie młodzi programiści i designerzy, stąd też potrzeba pójścia w kierunku nowoczesnego projektu witryny`,
                        },
                    },
                },
            },
            {
                tabName: "logo",
                highlight:
                    "Wykorzystując jak najprostsze środki wyrazu staralam się oddać najważniejsze wartości marki: profesjonalizm i edukacyjny charakter bloga.",

                features: {
                    feature1: {
                        component: "Image",
                        configuration: {
                            withH1: false,
                            withDescription: true,
                        },
                        content: {
                            img: wstepneSzkice,
                            h1: "",
                            description: "Wstępne szkice",
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
                },
            },
            {
                tabName: "strona internetowa",
                highlight: "Sint in eiusmod culpa ex nostrud fugiat do non eiusmod veniam laboris nostrud excepteur.",

                features: {
                    feature1: {
                        component: "Image",
                        configuration: {
                            withH1: true,
                            withDescription: true,
                        },
                        content: {
                            img: stronaGlowna,
                            h1: "Najważniejsze zmiany",
                            description: `Zmiany obejmują przede wszystkim kwestie estetyczne, ale także modyfikacje niektórych funkcjonalności i sposobu działania strony.
                            
                            Witryna została ożywiona odcieniami limonki, wybranej jako główny kolor brandowy. Przygotowałam projekt zarówno dla jasnego, jak i ciemnego motywu z uwagi na to, że programiści często skłaniają się ku temu drugiemu.
                        
                            Zmieniona została cała kolorystyka, która dotąd była rozbałaganiona (np. funkcjonowało kilkanaście bardzo zbliżonych do siebie odcieni, elementy na stronie kolorowane były w niekonsekwentny sposób: ta sama funkcja - za każdym razem inny kolor) i nieharmonijna (brak koloru akcentującego, wszystkie barwy jednakowo przygaszone).
                            
                            Slogan został przyłączony do nawigacji, by właściwa treść mogła zostać podniesiona wyżej.
                            
                            „Codzienną porcję kodu” umieściłam na samej górze, bo sekcja ta bardzo dobrze oddaje charakter bloga i bez słów mówi użytkownikom, gdzie się znajdują. Dodatkowo jest to element, który może angażować ich już od samego początku.
                            
                            Tagi artykułów zostały pochylone, by wprowadzić element dynamiki
                            
                            W starej wersji profil autora pod artykułem pozostawał nieklikalny. Teraz będzie on przekierowywał do podstrony „o nas”
                            
                            Tłem dla kontenerów jest półprzezroczysty, biały gradient, który kojarzy się z luminacją i technologią.
                            `,
                        },
                    },
                    feature2: {
                        component: "Image",
                        configuration: {
                            withH1: true,
                            withDescription: true,
                        },
                        content: {
                            img: wyszukiwarkaTeraz,
                            h1: "Zaproponowałam przebudowę wyszukiwarki",
                            description: `Zaproponowałam przebudowę wyszukiwarki artykułów pod kątem poprawy jej użyteczności, a także wyglądu.

                            Dotąd opierała się ona na rozwijanej liście tagów, a filtry wyszukiwania aplikowane były po zaznaczeniu wybranych i zamknięciu pola “select”. Wtedy dopiero lista artykułów była aktualizowana, uwzględniając wybory użytkownika. Mogło to powodować zakłopotanie korzystających ze strony osób, które spodziewałyby się natychmiastowego działania zaznaczonych przez nich tagów.
                            
                            W zaprojektowanym przeze mnie rozwiązaniu najważniejsze tagi są widoczne od razu. Eliminuje to konieczność kliknięcia w celu otwarcia listy. Wyszukiwarka zajmuje całą szerokość strony, dzięki czemu jest lepiej widoczna. Okno z tagami można rozwinąć, by zobaczyć więcej filtrów. Mają one być aplikowane od razu po zaznaczeniu. Usunięte zostały wszelkie zbędne elementy i teksty, biorąc pod uwagę, że użytkownicy naszej strony to osoby obeznane z internetem.`,
                        },
                    },
                },
            },
            {
                tabName: "moje propozycje",
                highlight: `Zaproponowałam dodanie zakładki REKRUTACJA, w której zamieszczane będą artykuły dotyczące poszukiwania pracy i możliwych ścieżek rozwoju, a także pytania i zadania rekrutacyjne.

                Przygotowałam projekt podstrony, która jest w trakcie wdrażania.`,

                features: {
                    feature1: {
                        component: "Image",
                        configuration: {
                            withH1: false,
                            withDescription: true,
                        },
                        content: {
                            img: rekrutacjaZadania,
                            h1: "",
                            description: "Przygotowałam projekt zakładki",
                        },
                    },
                    feature2: {
                        component: "Image",
                        configuration: {
                            withH1: false,
                            withDescription: true,
                        },
                        content: {
                            img: rekrutacjaArtykuly,
                            h1: "",
                            description: "Przygotowałam projekt zakładki",
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
        ],
    },
};

export { tabbedGalleryData };
