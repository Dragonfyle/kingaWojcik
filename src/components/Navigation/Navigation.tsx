import * as P from "./Navagation.parts";
import KingaBrand from "../generics/KingaBrand/KingaBrand";
import Flexbox from "../generics/Flexbox/Flexbox";

export default function Navigation() {
    return (
        <P.NavigationWrapper>
            <P.ListWrapper>
                <Flexbox tag="ul">
                    <KingaBrand />
                    <P.styledLiLeft>placeholder</P.styledLiLeft>
                    <P.styledLiLeft>placeholder</P.styledLiLeft>
                </Flexbox>
                <Flexbox tag="ul" $justify="flex-end">
                    <P.styledLiRight>placeholder</P.styledLiRight>
                    <P.styledLiRight>placeholder</P.styledLiRight>
                    <P.styledLiRight>placeholder</P.styledLiRight>
                </Flexbox>
            </P.ListWrapper>
        </P.NavigationWrapper>
    );
}
