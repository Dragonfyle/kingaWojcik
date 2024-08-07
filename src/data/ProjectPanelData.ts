import { CONFIG } from "$constants/config";
import czteryspacjeMiniaturka from "$img/projects/4spacje/ProjectPanel_4spacje_miniaturka.png";
import ukenMiniaturka from "$img/projects/uken/ProjectPanel_uken_miniaturka.png";
import goslinaMiniaturka from "$img/projects/goslina/ProjectPanel_goslina_miniaturka.png";
import kawaMiniaturka from "$img/projects/kawa/ProjectPanel_kawa_miniaturka.png";
import okladkiMiniaturka from "$img/projects/okladki/ProjectPanel_okladki_miniaturka.png";
import renaultMiniaturka from "$img/projects/renault/renault_design_contest_kinga_wojcik.jpg";
import fontyPisankowe from "$img/articles/fonty_pisankowe.jpg";
import kontrast from "$img/articles/jak_dobrac_wlasniwy_kontrast.jpg";
import projektowanieStron from "$img/articles/projektowanie_stron_internetowych.jpg";
import typografia from "$img/articles/typografia_w_projektowaniu_graficznym.jpg";
import ucielesnienie from "$img/articles/ucielesnienie-kompozycja.jpg";

type ProjectPanelData = typeof ProjectPanelData;

type ProjectPanelDataSection = ProjectPanelData[keyof ProjectPanelData];

const ProjectPanelData = {
    branding: {
        header: "Projekty brandingowe",
        intro: `Staram się najpierw zrozumieć potrzeby marki oraz oczekiwania klienta. 
        Z reguły proponuję wypełnienie briefu, dotyczącego firmy, co ułatwia mi określenie odpowiedniego kierunku działań.`,
        content: [
            {
                thumbnail: renaultMiniaturka,
                title: "Zwycięski projekt w konkursie Renault Trucks Design Contest",
                description: `Projekt grafiki na ciężarówkę, który został wyróżniony przez Renault Trucks, a następnie zwyciężył w głosowaniu publiczności.`,
                projectUrl: CONFIG.PATHS.PROJECTS.BRANDING[4],
                name: "Renault",
            },
            {
                thumbnail: czteryspacjeMiniaturka,
                title: "Logo i strona internetowa dla 4spacje.pl",
                description: `4spacje.pl to blog o technologiach internetowych. Celem autorów jest dzielenie się wiedzą dotyczącą tworzenia i projektowania stron internetowych, a także zbudowanie przestrzeni sprzyjającej nauce.`,
                projectUrl: CONFIG.PATHS.PROJECTS.BRANDING[1],
                name: "4spacje",
            },
            {
                thumbnail: ukenMiniaturka,
                title: "Logo dla Uniwersytetu Komisji Edukacji Narodowej w Krakowie",
                description:
                    "Jest to projekt przygotowany na konkurs, zorganizowany w celu stworzenia nowego logo dla zmieniającego nazwę Uniwersytetu Pedagogicznego.",
                projectUrl: CONFIG.PATHS.PROJECTS.BRANDING[2],
                name: "Logo UKEN",
            },
            {
                thumbnail: goslinaMiniaturka,
                title: "Logo Miasta i Gminy Murowana Goślina",
                description:
                    "Projekt logo, które w reprezentatywny sposób zakomunikuje odbiorcom najważniejsze walory Gminy Murowana Goślina. Projekt konkursowy",
                projectUrl: CONFIG.PATHS.PROJECTS.BRANDING[3],
                name: "Murowana Goślina",
            },
        ],
    },
    editorial: {
        header: "Projekty Wydawnicze",
        intro: "Projekty przygotowane do druku oraz ilustracje: projekty prywatne i komercyjne",
        content: [
            {
                thumbnail: kawaMiniaturka,
                title: "Krótka historia kawy",
                description:
                    "Ilustrowana książeczka przedstawiająca w zabawny, wierszowany sposób proces powstawania kawy. Projekt we współpracy z Małgorzatą Jaworską",
                projectUrl: CONFIG.PATHS.PROJECTS.EDITORIAL[1],
                name: "Krótka historia kawy",
            },
            {
                thumbnail: okladkiMiniaturka,
                title: "Projekty okładek książkowych",
                description:
                    "Zbiór moich projektów okładek książek, które w ciekawy sposób ilustrują zawartość każdej z nich",
                projectUrl: CONFIG.PATHS.PROJECTS.EDITORIAL[2],
                name: "Okładki książek",
            },
        ],
    },
    articles: {
        header: "Moje publikacje",
        intro: "Zdarza mi się coś napisać, więc tutaj znajdziesz moje przemyślenia dotyczące m.in. typografii, kompozycji czy doboru kolorów.",
        content: [
            {
                thumbnail: projektowanieStron,
                title: "Paleta kolorów na stronę internetową",
                description: "Jak wybrać odpowiednią paletę kolorów na stronę internetową",
                projectUrl:
                    "https://www.4spacje.pl/article/projektowanie-stron-internetowych-jak-wybrac-palete-kolorow",
            },
            {
                thumbnail: kontrast,
                title: "Właściwy kontrast w projektowaniu stron internetowych",
                description: "Jak dobrać odpowiedni kontrast",
                projectUrl: "https://www.4spacje.pl/article/kontrast-na-stronach-internetowych",
            },
            {
                thumbnail: typografia,
                title: "Podstawy typografii - font u psychologa",
                description: "Neuro-psychologiczne podstawy typografii",
                projectUrl: "https://www.4spacje.pl/article/typografia-font-u-psychologa",
            },
            {
                thumbnail: ucielesnienie,
                title: "Kompozycja w projektowaniu graficznym",
                description: "Czym jest ucieleśnienie i jak wpływa na kompozycję projektu",
                projectUrl: "https://www.4spacje.pl/article/ucielesnienie-kompozycja-w-projektowaniu-graficznym",
            },
            {
                thumbnail: fontyPisankowe,
                title: "Fonty pisankowe",
                description: "Wielkanocny artykuł typograficzny :)",
                projectUrl: "https://www.4spacje.pl/article/fonty-pisankowe-definicja-rodzaje-zastosowanie",
            },
        ],
    },
} as const;

export { ProjectPanelData };

export type { ProjectPanelDataSection };
