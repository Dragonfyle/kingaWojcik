import * as P from "./Navagation.parts";
import KingaBrand from "../generics/KingaBrand/KingaBrand";

export default function Navigation() {
    return (
        <P.NavigationWrapper>
            <P.ListWrapper>
                <P.StyledUlLeft>
                    <KingaBrand />
                    <P.styledLiLeft>placeholder</P.styledLiLeft>
                    <P.styledLiLeft>placeholder</P.styledLiLeft>
                </P.StyledUlLeft>
                <P.StyledUlRight>
                    <P.styledLiRight>placeholder</P.styledLiRight>
                    <P.styledLiRight>placeholder</P.styledLiRight>
                    <P.styledLiRight>placeholder</P.styledLiRight>
                </P.StyledUlRight>
            </P.ListWrapper>
        </P.NavigationWrapper>
    );
}
