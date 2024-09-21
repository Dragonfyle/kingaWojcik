import Hamburger from "$assets/icons/hamburger.svg";
import { defaultTheme } from "$styles/DefaultTheme";

import { HamburgerIconProps } from "./HamburgerIcon.types";

export default function HamburgerIcon({ onClick }: HamburgerIconProps) {
    return (
        <div className="aspect-hamburger h-auto" onClick={onClick}>
            <Hamburger
                className="w-12"
                style={
                    {
                        "--background-color": defaultTheme.colors.leading.main[2],
                        "--foreground-color": defaultTheme.colors.supplementary[3],
                    } as React.CSSProperties
                }
            />
        </div>
    );
}
