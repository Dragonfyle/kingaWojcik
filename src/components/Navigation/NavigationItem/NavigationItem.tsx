import { Link } from "react-router-dom";
import Text from "../../generics/Text/Text";
import { NavigationItemProps } from "./NavigationItem.types";
import * as P from "./NavigationItem.parts";

export default function NavigationItem({ children, to = "", onClick, backgroundColor }: NavigationItemProps) {
    return (
        <P.NavigationItemWrapper onClick={onClick} $backgroundColor={backgroundColor}>
            <Link to={to}>
                <Text lineHeight={1.5} size="ms">
                    {children}
                </Text>
            </Link>
        </P.NavigationItemWrapper>
    );
}
