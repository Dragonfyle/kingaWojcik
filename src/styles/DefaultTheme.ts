import { DefaultTheme } from "styled-components";
import { colorDefinitions as colors } from "./colorDefinitions";

const defaultTheme = {
    colors: {
        leading: {
            main: {
                1: colors.yellow.default,
                2: colors.yellow.lighter,
                3: colors.yellow.lightest,
                trans: {
                    1: colors.yellow.trans.default,
                },
            },
            secondary: {
                1: colors.gray.default,
                2: colors.gray.lighter,
                3: colors.gray.lightest,
            },
        },
        supplementary: {
            1: colors.supplementary.yellow,
            2: colors.supplementary.dirty,
            3: colors.supplementary.black,
            4: colors.supplementary.yellowDark,
            5: colors.supplementary.greenTrans,
            6: colors.supplementary.spacje,
        },
        white: {
            1: colors.white.main,
            2: colors.white.darker,
            3: colors.white.darkest,
            trans: {
                1: colors.white.trans.main,
                2: colors.white.trans.secondary,
            },
        },
    },
    fontWeight: {
        normal: 600,
        bold: 800,
        black: 800,
    },
    borderRadius: {
        s: "2px",
        m: "4px",
        l: "10px",
    },
    fontSize: {
        xs: "10px",
        s: "14px",
        ms: "14px",
        m: "16px",
        l: "16px",
        xl: "18px",
        "2xl": "24px",
        "3xl": "30px",
        "4xl": "40px",
        "5xl": "60px",

        // xs: "9px",
        // s: "10px",
        // ms: "11px",
        // m: "12px",
        // l: "14px",
        // xl: "16px",
        // "2xl": "20px",
        // "3xl": "30px",
        // "4xl": "40px",
        // "5xl": "60px",
    },
} as unknown as DefaultTheme;

export { defaultTheme };
