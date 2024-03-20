import "styled-components";
import { RGBColor, Gradient, Transparent, RGBAColor } from "./common";

declare module "styled-components" {
    type ColorOption = RGBColor | RGBAColor | Gradient | Transparent;

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
                    2: ColorOption;
                    3: ColorOption;
                    trans: {
                        1: ColorOption;
                    };
                };
            };
        };

        fontWeight: {
            normal: 400;
            bold: 700;
            black: 900;
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
