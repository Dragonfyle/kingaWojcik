import { defaultTheme } from "./src/styles/DefaultTheme";
import { SIZE } from "./src/styles/breakpoints";
import { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            margin: {
                "5%": "5%",
                "11%": "11%",
                "78%": "78%",
                "89%": "89%",
            },
            colors: {
                leading: {
                    main: {
                        1: defaultTheme.colors.leading.main[1],
                        2: defaultTheme.colors.leading.main[2],
                        3: defaultTheme.colors.leading.main[3],
                        trans: {
                            1: defaultTheme.colors.leading.main.trans[1],
                        },
                    },
                    secondary: {
                        1: defaultTheme.colors.leading.secondary[1],
                        2: defaultTheme.colors.leading.secondary[2],
                        3: defaultTheme.colors.leading.secondary[3],
                    },
                },
                supplementary: {
                    1: defaultTheme.colors.supplementary[1],
                    2: defaultTheme.colors.supplementary[2],
                    3: defaultTheme.colors.supplementary[3],
                    4: defaultTheme.colors.supplementary[4],
                    5: defaultTheme.colors.supplementary[5],
                    6: defaultTheme.colors.supplementary[6],
                },
                white: {
                    1: defaultTheme.colors.white[1],
                    2: defaultTheme.colors.white[2],
                    3: defaultTheme.colors.white[3],
                    trans: {
                        1: defaultTheme.colors.white.trans[1],
                        2: defaultTheme.colors.white.trans[2],
                    },
                },
            },
            minWidth: {
                "site-min": "240px",
                "project-panel-item": "550px",
            },
            maxWidth: {
                "site-max": "2560px",
                "project-max": "1600px",
                "project-max-s": "1200px",
                "project-panel-item": "550px",
            },
            width: {
                "project-panel-item": "550px",
                "feature-image": "1140px",
                "feature-image-s": "900px",
                "30": "30%",
                "40": "40%",
                "50": "50%",
                "60": "60%",
                "70": "70%",
            },
            height: {
                "mobile-navigation": "var(--mobile-navigation-height)",
                "project-panel-item": "309px",
            },
            inset: {
                "mobile-navigation": "var(--mobile-navigation-height)",
            },
            fontWeight: defaultTheme.fontWeight,
            borderRadius: defaultTheme.borderRadius,
            fontSize: defaultTheme.fontSize,
            aspectRatio: {
                hamburger: "1.45/1",
                "project-panel-item": "551/309",
                "feature-image": "1140/803",
                "feature-slice-image": "1140/803",
            },
            screens: {
                xs: `${SIZE.XS}px`,
                s: `${SIZE.S}px`,
                m: `${SIZE.M}px`,
                l: `${SIZE.L}px`,
                xl: `${SIZE.XL}px`,
                xxl: `${SIZE.XXL}px`,
            },
        },
    },
    plugins: [
        plugin(function ({ addBase, addUtilities }) {
            const featureWidths = {
                "30-70": "30fr 70fr",
                "40-60": "40fr 60fr",
                "50-50": "50fr 50fr",
                "60-40": "60fr 40fr",
                "70-30": "70fr 30fr",
            };

            const featureClasses = Object.entries(featureWidths).reduce((acc, [key, value]) => {
                acc[`.feature-${key}`] = {
                    display: "grid",
                    "grid-template-columns": "auto",
                    "grid-template-rows": "repeat(2, auto)",
                    "column-gap": "80px",
                    "@media (min-width: 900px)": {
                        "grid-template-columns": value,
                    },
                };
                return acc;
            }, {});

            addBase({
                ":root": {
                    "--mobile-navigation-height": "50px",
                },
            });
            addUtilities({
                ".site-padding-left": {
                    "padding-left": "24px",
                    "@media (min-width: 1024px)": {
                        "padding-left": "5%",
                    },
                    "@media (min-width: 1440px)": {
                        "padding-left": "11%",
                    },
                },
                ".group-hover-visible": {
                    "@apply invisible group-hover:visible": {},
                },
                ".scrollbar-none": {
                    "scrollbar-width": "none",
                },
                ".pb-project-bottom": {
                    "padding-bottom": "200px",
                },
                ".bg-uken": {
                    "background-color": defaultTheme.colors.leading.secondary[1],
                    "background-image": "url('/uken_pattern_element.svg')",
                    "background-size": "2%",
                },
                ...featureClasses,
            });
        }),
    ],
};

export default config;
