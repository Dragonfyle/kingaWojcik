import MenuCrossIcon from "$assets/icons/menu-cross.svg";
import { defaultTheme } from "$styles/DefaultTheme";

import { MenuCrossProps } from "./MenuCrossIcon.types";

export default function MenuCross({ onClick }: MenuCrossProps) {
    return (
        <MenuCrossIcon
            className="w-16"
            style={
                {
                    "--background-color": defaultTheme.colors.supplementary[3],
                    "--foreground-color": defaultTheme.colors.leading.main[2],
                } as React.CSSProperties
            }
            onClick={onClick}
        />
    );
}
