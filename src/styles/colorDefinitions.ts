export const colorDefinitions = {
    yellow: {
        default: "rgb(255,232,20)",
        lighter: "rgb(255, 245, 155)",
        lightest: "rgb(255, 252,217)",
    },
    gray: {
        default: "rgb(15, 15, 14)",
        lighter: "rgb(85, 85, 85)",
        lightest: "rgb(115, 115, 115)",
    },
    supplementary: {
        yellow: "rgb(241, 219, 19)",
        black: "rgb(25, 25, 25)",
    },
    white: {
        main: "rgb(255, 255, 255)",
        darker: "rgb(246, 246, 246)",
    },
    transparent: "transparent",
} as const;

// export const gradientDefinitions = {
// white: `linear-gradient(180deg, ${colorDefinitions.white.trans["05"]} 0%, ${colorDefinitions.white.trans["15"]} 100%)`,
// lemon: `linear-gradient(236deg, ${colorDefinitions.lemon.lighter} -86.82%, ${colorDefinitions.lemon.main} 83.74%)`,
// lightLemon: `linear-gradient(77deg, ${colorDefinitions.lemon.lighter} 19.33%, ${colorDefinitions.white.main} 141.14%)`,
// dark: `radial-gradient(71.13% 89.8% at 143.49% -47.54%, ${colorDefinitions.lemon.darker} 0%, ${colorDefinitions.gray.main} 98.8%)`,
// } as const;
//
