import * as P from "./KingaBrand.parts";
import Text from "../Text/Text";
import { CONFIG } from "../../../constants/config";

export default function KingaBrand() {
    return (
        <P.StyledNavLink to={CONFIG.PATHS.HOME}>
            <P.KingaWrapper>
                <Text bold>Kinga Wójcik</Text>
            </P.KingaWrapper>
        </P.StyledNavLink>
    );
}
