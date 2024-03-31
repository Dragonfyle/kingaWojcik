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
        normal: 400,
        bold: 700,
        black: 700,
    },
    borderRadius: {
        s: "2px",
        m: "4px",
        l: "10px",
    },
    fontSize: {
        xs: "10px",
        s: "12px",
        ms: "14px",
        m: "16px",
        l: "18px",
        xl: "21px",
        "2xl": "24px",
        "3xl": "30px",
        "4xl": "40px",
        "5xl": "60px",
    },
} as unknown as DefaultTheme;

export { defaultTheme };
