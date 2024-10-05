import NavigationItem from "$components/Navigation/NavigationItem/";

import { MobileNavigationItemProps } from "./MobileNavigationItem.types";

export default function MobileNavigationItem({ children, to, onClick }: MobileNavigationItemProps) {
    return (
        <NavigationItem className="text-m font-normal capitalize" to={to} onClick={onClick}>
            {children}
        </NavigationItem>
    );
}
