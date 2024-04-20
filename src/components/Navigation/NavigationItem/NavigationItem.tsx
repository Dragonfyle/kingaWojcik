import { Link } from "react-router-dom";
import Text from "../../generics/Text/Text";
import { NavigationItemProps } from "./NavigationItem.types";
import * as P from "./NavigationItem.parts";

export default function NavigationItem({ children, to = "", onClick }: NavigationItemProps) {
    return (
        <P.NavigationItemWrapper onClick={onClick}>
            <Link to={to}>
                <Text lineHeight={1.5} size="ms">
                    {children}
                </Text>
            </Link>
        </P.NavigationItemWrapper>
    );
}
