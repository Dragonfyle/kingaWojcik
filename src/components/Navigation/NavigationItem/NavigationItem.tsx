import { Link } from "react-router-dom";
import Text from "../../generics/Text/Text";
import { NavigationItemProps } from "./NavigationItem.types";
import * as P from "./NavigationItem.parts";

export default function NavigationItem({
    children,
    label,
    isLink = false,
    to = "",
    onClick,
    backgroundColor,
}: NavigationItemProps) {
    return (
        <P.NavigationItemWrapper onClick={onClick} $backgroundColor={backgroundColor}>
            {isLink ? (
                <Link to={to}>
                    <Text lineHeight={1.5} size="ms">
                        {label}
                    </Text>
                </Link>
            ) : (
                <Text lineHeight={1.5} size="ms">
                    {label}
                </Text>
            )}
            {children}
        </P.NavigationItemWrapper>
    );
}
