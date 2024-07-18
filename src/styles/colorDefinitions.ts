export const colorDefinitions = {
    yellow: {
        default: "rgb(255,232,20)",
        lighter: "rgb(255, 245, 155)",
        lightest: "rgb(255, 252,217)",
        trans: {
            default: "rgb(235, 225, 135, 0.95)",
        },
    },
    gray: {
        default: "rgb(15, 15, 14)",
        lighter: "rgb(85, 85, 85)",
        lightest: "rgb(115, 115, 115)",
    },
    supplementary: {
        yellow: "rgb(241, 219, 19)",
        dirty: "rgba(37, 37, 34)",
        black: "rgb(25, 25, 25)",
        yellowDark: "rgb(150, 130, 19)",
        greenTrans: "rgba(193,255,132, 0.2)",
        spacje: "rgb(23, 22, 27)",
    },
    white: {
        main: "rgb(255, 255, 255)",
        darker: "rgb(246, 246, 246)",
        darkest: "rgb(235, 235, 235)",
        trans: {
            main: "rgba(255, 255, 255, 0.3)",
            secondary: "rgba(255, 255, 255, 0.8)",
        },
    },

    transparent: "transparent",
} as const;
