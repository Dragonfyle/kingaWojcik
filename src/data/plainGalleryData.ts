import wstepneSzkice from "/wstepne-szkice.png";
import logoPropozycja4spacje from "/logo-propozycja.png";
import logo4spacje from "/logo.png";

import kawaIntro from "/kawa_1.png";
import kawa2 from "/kawa_2.png";
import kawa3 from "/kawa_3.png";
import kawa4 from "/kawa_4.png";
import kawa5 from "/kawa_5.png";
import kawa6 from "/kawa_6.png";
import kawa7 from "/kawa_7.png";
import kawa8 from "/kawa_8.png";
import kawa9 from "/kawa_9.png";
import kawa10 from "/kawa_10.png";

import ukenDokument from "/uken_dokument.jpg";
import ukenKalendarz from "/uken_kalendarz.jpg";
import ukenTshirt from "/uken_tshirt.jpg";
import ukenWizytowki from "/uken_wizytowki.jpg";
import ukenKolorystyka from "/uken_kolorystyka.png";
import ukenLogoPelneCzarne from "/uken_logo_pelne.jpg";
import ukenLogoPelneBiale from "/uken_logo_pelne_biale.png";
import ukenLogoSkroconeCzarne from "/uken_logo_skrocone.jpg";
import ukenLogoSkroconeBiale from "/uken_logo_skrocone_biale.png";
import ukenLogoSkroconeCzerwone from "/uken_logo_skrocone_czerwone.png";
import ukenLogoPelneCzerwone from "/uken_logo_pelne_czerwone.png";

import goslinaLogo from "/goslina_sygnet.png";
import goslinaMockups from "/goslina_mockups.png";
import goslinaColors from "/goslina_kolorystyka.png";

import okladkiEgiptFront from "/okladki_egipt_front.jpg";
import okladkiEgiptBack from "/okladki_egipt_back.jpg";
import okladkiPodworkoFront from "/okladki_podworko_front.jpg";
import okladkiPodworkoBack from "/okladki_podworko_back.jpg";
import okladkiMitologiaFront from "/okladki_mitologia_front.jpg";
import okladkiMitologiaBack from "/okladki_mitologia_back.jpg";
import okladkiPsychoFront from "/okladki_psycho_front.jpg";
import okladkiPsychoBack from "/okladki_psycho_back.jpg";
import okladkiAstrologiaFront from "/okladki_astrologia_front.jpg";
import okladkiAstrologiaBack from "/okladki_astrologia_back.jpg";
import okladkiRewolucjaFront from "/okladki_rewolucja_front.jpg";
import okladkiRewolucjaBack from "/okladki_rewolucja_back.jpg";
import okladkiCosmicrayFront from "/okladki_cosmicray_front.jpg";
import okladkiCosmicrayBack from "/okladki_cosmicray_back.jpg";

import { PlainGalleryData } from "../types/plainGallery.types";

const plainGalleryData: PlainGalleryData = {
    project1: {
        header: "",
        intro: "",

        plainGalleryContent: [
            {
                component: "Image",

                configuration: {
                    withH1: false,
                    withDescription: false,
                },

                content: {
                    img: kawaIntro,
                    h1: "",
                    description:
                        "",
                },
            },
            {
                component: "Image",

                configuration: {
                    withH1: false,
                    withDescription: true,
                },

                content: {
                    img: kawa2,
                    h1: "",
                    description:
                        "W swoich ilustracjach staram się przede wszystkim skupiać na emocjach i relacjach. Myślę, że kluczową cechą dobrego ilustratora jest umiejętność ukazania czegoś poza czysto wizualnymi, estetycznymi aspektami obrazu czyli działań, nastrojów czy charakterów postaci. Dlatego zawsze staram się, aby moje prace wywoływały u odbiorców określone odczucia.",
                },
            },
            {
                component: "Image",

                configuration: {
                    withH1: false,
                    withDescription: false,
                },

                content: {
                    img: kawa3,
                    h1: "",
                    description:
                        "",
                },
            },
            {
                component: "Image",

                configuration: {
                    withH1: false,
                    withDescription: false,
                },

                content: {
                    img: kawa4,
                    h1: "",
                    description:
                        "",
                },
            },
            {
                component: "Image",

                configuration: {
                    withH1: false,
                    withDescription: false,
                },

                content: {
                    img: kawa5,
                    h1: "",
                    description:
                        "",
                },
            },
            {
                component: "Image",

                configuration: {
                    withH1: false,
                    withDescription: false,
                },

                content: {
                    img: kawa6,
                    h1: "",
                    description:
                        "",
                },
            },
            {
                component: "Image",

                configuration: {
                    withH1: false,
                    withDescription: false,
                },

                content: {
                    img: kawa7,
                    h1: "",
                    description:
                        "",
                },
            },
            {
                component: "Image",

                configuration: {
                    withH1: false,
                    withDescription: false,
                },

                content: {
                    img: kawa8,
                    h1: "",
                    description:
                        "",
                },
            },
            {
                component: "Image",

                configuration: {
                    withH1: false,
                    withDescription: false,
                },

                content: {
                    img: kawa9,
                    h1: "",
                    description:
                        "",
                },
            },
            {
                component: "Image",

                configuration: {
                    withH1: false,
                    withDescription: true,
                },

                content: {
                    img: kawa10,
                    h1: "",
                    description:
                        "Projekt powstał we współpracy z Małgorzatą Jaworską (pisarzowiczka.pl)",
                },
            },


        ],
    },
    project2: {
        header: "",
        intro: "",

        plainGalleryContent: [
            {
                component: "Text",

                configuration: {
                    withH1: true,
                },

                content: {
                    h1: "Logo dla Uniwersytetu Komisji Edukacji Narodowej w Krakowie (dawniej Uniwersytet Pedagogiczny)",
                    description:
                        "",
                },
            },
            {
                component: "ImageImage",

                configuration: {
                    leftColumnWidth: 50,
                    withRightH1: false,
                    withLeftH1: false,
                    withLeftDescription: false,
                    withRightDescription: false,
                    descriptionPosition: "bottom",
                },

                content: {
                    leftImg: ukenLogoPelneCzerwone,
                    rightImg: ukenLogoSkroconeCzerwone,
                    leftH1: "",
                    rightH1: "",
                    leftDescription: "",
                    rightDescription: "",
                },
            },
            {
                component: "Image",

                configuration: {
                    withH1: false,
                    withDescription: false,
                },

                content: {
                    img: ukenKolorystyka,
                    h1: "",
                    description:
                        "",
                },
            },
            {
                component: "ImageImage",

                configuration: {
                    leftColumnWidth: 50,
                    withRightH1: false,
                    withLeftH1: false,
                    withLeftDescription: false,
                    withRightDescription: false,
                    descriptionPosition: "bottom",
                },

                content: {
                    leftImg: ukenLogoPelneBiale,
                    rightImg: ukenLogoSkroconeBiale,
                    leftH1: "",
                    rightH1: "",
                    leftDescription: "",
                    rightDescription: "",
                },
            },
            {
                component: "ImageImage",

                configuration: {
                    leftColumnWidth: 50,
                    withRightH1: false,
                    withLeftH1: false,
                    withLeftDescription: false,
                    withRightDescription: false,
                    descriptionPosition: "bottom",
                },

                content: {
                    leftImg: ukenLogoPelneCzarne,
                    rightImg: ukenLogoSkroconeCzarne,
                    leftH1: "",
                    rightH1: "",
                    leftDescription: "",
                    rightDescription: "",
                },
            },
            {
                component: "ImageImage",

                configuration: {
                    leftColumnWidth: 50,
                    withRightH1: false,
                    withLeftH1: false,
                    withLeftDescription: false,
                    withRightDescription: false,
                    descriptionPosition: "bottom",
                },

                content: {
                    leftImg: ukenTshirt,
                    rightImg: ukenKalendarz,
                    leftH1: "",
                    rightH1: "",
                    leftDescription: "",
                    rightDescription: "",
                },
            },
            {
                component: "ImageImage",

                configuration: {
                    leftColumnWidth: 50,
                    withRightH1: false,
                    withLeftH1: false,
                    withLeftDescription: false,
                    withRightDescription: false,
                    descriptionPosition: "bottom",
                },

                content: {
                    leftImg: ukenWizytowki,
                    rightImg: ukenDokument,
                    leftH1: "",
                    rightH1: "",
                    leftDescription: "",
                    rightDescription: "",
                },
            },




        ],
    },
    project3: {
        header: "",
        intro: "",

        plainGalleryContent: [
            {
                component: "Image",

                configuration: {
                    withH1: false,
                    withDescription: false,
                },

                content: {
                    img: goslinaLogo,
                    h1: "",
                    description:
                        "",
                },
            },
            {
                component: "Image",

                configuration: {
                    withH1: false,
                    withDescription: false,
                },

                content: {
                    img: goslinaColors,
                    h1: "",
                    description:
                        "",
                },
            },
            {
                component: "Image",

                configuration: {
                    withH1: false,
                    withDescription: false,
                },

                content: {
                    img: goslinaMockups,
                    h1: "",
                    description:
                        "",
                },
            },



        ],
    },
    project4: {
        header: "",
        intro: "",

        plainGalleryContent: [

            {
                component: "ImageImage",

                configuration: {
                    leftColumnWidth: 50,
                    withRightH1: false,
                    withLeftH1: false,
                    withLeftDescription: false,
                    withRightDescription: false,
                    descriptionPosition: "bottom",
                },

                content: {
                    leftImg: okladkiPsychoFront,
                    rightImg: okladkiPsychoBack,
                    leftH1: "",
                    rightH1: "",
                    leftDescription: "",
                    rightDescription: "",
                },
            },
            {
                component: "ImageImage",

                configuration: {
                    leftColumnWidth: 50,
                    withRightH1: false,
                    withLeftH1: false,
                    withLeftDescription: false,
                    withRightDescription: false,
                    descriptionPosition: "bottom",
                },

                content: {
                    leftImg: okladkiRewolucjaFront,
                    rightImg: okladkiRewolucjaBack,
                    leftH1: "",
                    rightH1: "",
                    leftDescription: "",
                    rightDescription: "",
                },
            },
            {
                component: "ImageImage",

                configuration: {
                    leftColumnWidth: 50,
                    withRightH1: false,
                    withLeftH1: false,
                    withLeftDescription: false,
                    withRightDescription: false,
                    descriptionPosition: "bottom",
                },

                content: {
                    leftImg: okladkiMitologiaFront,
                    rightImg: okladkiMitologiaBack,
                    leftH1: "",
                    rightH1: "",
                    leftDescription: "",
                    rightDescription: "",
                },
            },
            {
                component: "ImageImage",

                configuration: {
                    leftColumnWidth: 50,
                    withRightH1: false,
                    withLeftH1: false,
                    withLeftDescription: false,
                    withRightDescription: false,
                    descriptionPosition: "bottom",
                },

                content: {
                    leftImg: okladkiAstrologiaFront,
                    rightImg: okladkiAstrologiaBack,
                    leftH1: "",
                    rightH1: "",
                    leftDescription: "",
                    rightDescription: "",
                },
            },
            {
                component: "ImageImage",

                configuration: {
                    leftColumnWidth: 50,
                    withRightH1: false,
                    withLeftH1: false,
                    withLeftDescription: false,
                    withRightDescription: false,
                    descriptionPosition: "bottom",
                },

                content: {
                    leftImg: okladkiPodworkoFront,
                    rightImg: okladkiPodworkoBack,
                    leftH1: "",
                    rightH1: "",
                    leftDescription: "",
                    rightDescription: "",
                },
            },
            {
                component: "ImageImage",

                configuration: {
                    leftColumnWidth: 50,
                    withRightH1: false,
                    withLeftH1: false,
                    withLeftDescription: false,
                    withRightDescription: false,
                    descriptionPosition: "bottom",
                },

                content: {
                    leftImg: okladkiEgiptFront,
                    rightImg: okladkiEgiptBack,
                    leftH1: "",
                    rightH1: "",
                    leftDescription: "",
                    rightDescription: "",
                },
            },
            {
                component: "ImageImage",

                configuration: {
                    leftColumnWidth: 50,
                    withRightH1: false,
                    withLeftH1: false,
                    withLeftDescription: false,
                    withRightDescription: false,
                    descriptionPosition: "bottom",
                },

                content: {
                    leftImg: okladkiCosmicrayFront,
                    rightImg: okladkiCosmicrayBack,
                    leftH1: "",
                    rightH1: "",
                    leftDescription: "",
                    rightDescription: "",
                },
            },

        ],
    },
};

export { plainGalleryData };
