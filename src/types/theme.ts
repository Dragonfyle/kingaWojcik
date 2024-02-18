import "styled-components";
import { RGBColor, Gradient, Transparent } from "./common";

declare module "styled-components" {
    type ColorOption = RGBColor | Gradient | Transparent;

    export interface DefaultTheme {
        colors: {
            leading: {
                main: {
                    1: ColorOption;
                    2: ColorOption;
                    3: ColorOption;
                };
                secondary: {
                    1: ColorOption;
                    2: ColorOption;
                    3: ColorOption;
                };
                supplementary: {
                    1: ColorOption;
                    2: ColorOption;
                    3: ColorOption;
                };
                white: {
                    1: ColorOption;
                };
            };
        };

        fontWeight: {
            normal: 300;
            medium: 400;
            bold: 600;
            bolder: 700;
            boldest: 900;
        };
        fontSize: {
            xs: string;
            s: string;
            ms: string;
            m: string;
            lm: string;
            l: string;
            xl: string;
            "2xl": string;
            "3xl": string;
            "4xl": string;
            "5xl": string;
        };
        borderRadius: {
            s: string;
            m: string;
            l: string;
        };
    }
}
