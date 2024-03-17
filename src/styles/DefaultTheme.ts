import { DefaultTheme } from "styled-components";
import { colorDefinitions as colors } from "./colorDefinitions";

const defaultTheme = {
    colors: {
        leading: {
            main: {
                1: colors.yellow.default,
                2: colors.yellow.lighter,
                3: colors.yellow.lightest,
            },
            secondary: {
                1: colors.gray.default,
                2: colors.gray.lighter,
                3: colors.gray.lightest,
            },
            supplementary: {
                1: colors.supplementary.yellow,
                2: colors.supplementary.black,
            },
            white: {
                1: colors.white.main,
                2: colors.white.darker,
            },
        },
    },
    fontWeight: {
        normal: 400,
        bold: 600,
        bolder: 700,
        boldest: 900,
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
        "2xl": "30px",
        "3xl": "40px",
        "4xl": "50px",
        "5xl": "60px",
    },
} as unknown as DefaultTheme;

export { defaultTheme };
