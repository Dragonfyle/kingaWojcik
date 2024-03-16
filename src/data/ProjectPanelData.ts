import { CONFIG } from "../constants/config";
import czteryspacjeMiniaturka from "/ProjectPanel_4spacje_miniaturka.png";
import ukenMiniaturka from "/ProjectPanel_uken_miniaturka.png";
import goslinaMiniaturka from "/ProjectPanel_goslina_miniaturka.png";
import kawaMiniaturka from "/ProjectPanel_kawa_miniaturka.png";
import okladkiMiniaturka from "/ProjectPanel_okladki_miniaturka.png";

type ProjectPanelData = typeof ProjectPanelData;

type ProjectPanelDataSection = ProjectPanelData[keyof ProjectPanelData];

const ProjectPanelData = {
    branding: {
        header: "Projekty brandingowe",
        intro: `Zawsze staram się najpierw zrozumieć potrzeby marki oraz oczekiwania klienta. 
        Z reguły proponuję wypełnienie briefu, dotyczącego firmy oraz jej klientów, co ułatwia mi określenie odpowiedniego 
        kierunku.`,
        content: [
            {
                thumbnail: czteryspacjeMiniaturka,
                title: "Logo i strona internetowa dla 4spacje.pl",
                description:
                    `4spacje.pl to blog o technologiach internetowych. Celem autorów jest dzielenie się wiedzą dotyczącą tworzenia i projektowania stron internetowych, a także zbudowanie przestrzeni sprzyjającej nauce.`,
                projectUrl: CONFIG.PATHS.PROJECTS.BRANDING[1],
            },
            {
                thumbnail: ukenMiniaturka,
                title: "Logo dla Uniwersytetu Komisji Edukacji Narodowej w Krakowie",
                description:
                    "Jest to projekt przygotowany na konkurs, zorganizowany w celu stworzenia nowego logo dla zmieniającego nazwę Uniwersytetu Pedagogicznego.",
                projectUrl: CONFIG.PATHS.PROJECTS.BRANDING[2],
            },
            {
                thumbnail: goslinaMiniaturka,
                title: "Logo Miasta i Gminy Murowana Goślina",
                description:
                    "Projekt logo, które w reprezentatywny sposób zakomunikuje odbiorcom najważniejsze walory Gminy Murowana Goślina. Projekt konkursowy",
                projectUrl: CONFIG.PATHS.PROJECTS.BRANDING[3],
            },
        ],
    },
    editorial: {
        header: "Projekty Wydawnicze",
        intro: "W tej sekcji znajdują się stworzone przeze mnie projekty okładek a także moje kawowe dziecko - ilustrowana rymowanka o naszych ulubionych ziarnach.",
        content: [
            {
                thumbnail: kawaMiniaturka,
                title: "Krótka historia kawy",
                description: "Ilustrowana książeczka przedstawiająca w zabawny, wierszowany sposób proces powstawania naszego ulubionego napoju. Projekt we współpracy z Małgorzatą Jaworską",
                projectUrl: CONFIG.PATHS.PROJECTS.EDITORIAL[1],
            },
            {
                thumbnail: okladkiMiniaturka,
                title: "Projekty okładek książkowych",
                description: "",
                projectUrl: CONFIG.PATHS.PROJECTS.EDITORIAL[2],
            },
        ],
    },
} as const;

export { ProjectPanelData };

export type { ProjectPanelDataSection };
