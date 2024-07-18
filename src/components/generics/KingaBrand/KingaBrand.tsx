import Text from "$generics/Text/";
import { CONFIG } from "$constants/config";

import { KingaBrandProps } from "./KingaBrand.types";
import * as P from "./KingaBrand.parts";

export default function KingaBrand({ onClick }: KingaBrandProps) {
    function handleClick() {
        if (onClick) {
            onClick();
        }

        if (window.location.pathname === CONFIG.PATHS.HOME) {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    }

    return (
        <P.StyledNavLink to={CONFIG.PATHS.HOME} onClick={handleClick}>
            <P.KingaWrapper>
                <Text bold>Kinga Ewa Wójcik</Text>
            </P.KingaWrapper>
        </P.StyledNavLink>
    );
}
