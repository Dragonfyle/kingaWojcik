import Text from "$generics/Text/";
import { CONFIG } from "$constants/config";

import * as P from "./KingaBrand.parts";

interface KingaBrandProps {
    onClick?: () => void;
}

export default function KingaBrand({ onClick }: KingaBrandProps) {
    return (
        <P.StyledNavLink to={CONFIG.PATHS.HOME} onClick={onClick}>
            <P.KingaWrapper>
                <Text bold>Kinga Ewa Wójcik</Text>
            </P.KingaWrapper>
        </P.StyledNavLink>
    );
}
