import NavigationItem from "$components/Navigation/NavigationItem/NavigationItem";
import { MobileNavigationItemProps } from "./MobileNavigationItem.types";
import * as P from "./MobileNavigationItem.parts";

export default function MobileNavigationItem({ children, to, onClick }: MobileNavigationItemProps) {
    return (
        <P.MobileNavigationItemWrapper>
            <NavigationItem to={to} onClick={onClick}>
                {children}
            </NavigationItem>
        </P.MobileNavigationItemWrapper>
    );
}
