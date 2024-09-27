import NavigationItem from "$components/Navigation/NavigationItem/";

import { MobileNavigationItemProps } from "./MobileNavigationItem.types";

export default function MobileNavigationItem({ children, to, onClick }: MobileNavigationItemProps) {
    return (
        <NavigationItem to={to} onClick={onClick}>
            {children}
        </NavigationItem>
    );
}
