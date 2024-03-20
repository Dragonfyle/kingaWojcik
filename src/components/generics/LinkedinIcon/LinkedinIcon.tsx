/// <reference types="vite-plugin-svgr/client" />
import LinkedinSvg from "../../../assets/icons/linkedin.svg?react";
import { LinkedIconProps } from "./LinkedinIcon.utils";

import * as P from "./LinkedinIcon.parts";

export default function LinkedinIcon({ size }: LinkedIconProps) {
    return (
        <P.StyledA href="https://www.linkedin.com/in/kinga-wójcik-grafik/" $size={size}>
            <LinkedinSvg />
        </P.StyledA>
    );
}
