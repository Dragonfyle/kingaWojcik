import { Link } from "react-router-dom";
import Text from "../../generics/Text/Text";
import * as P from "./NavigationItem.parts";
import { PropsWithChildren } from "react";

interface NavigationItemProps extends PropsWithChildren {
    label: string;
    onClick?: () => void;
    isLink?: boolean;
    to?: string;
}

export default function NavigationItem({ children, label, isLink = false, to = "", onClick }: NavigationItemProps) {
    return (
        <P.NavigationItemWrapper onClick={onClick}>
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
