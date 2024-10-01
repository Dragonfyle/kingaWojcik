import LinkedinSvg from "$assets/icons/linkedin.svg";

import { LinkedIconProps } from "./LinkedinIcon.types";

export default function LinkedinIcon({ size }: LinkedIconProps) {
    return (
        <a href="https://www.linkedin.com/in/kinga-ewa-wojcik/" className="user-select-none my-auto cursor-pointer">
            <LinkedinSvg style={{ width: `${size}px`, height: `${size}px` }} />
        </a>
    );
}
