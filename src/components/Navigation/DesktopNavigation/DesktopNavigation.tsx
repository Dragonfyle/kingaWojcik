import navigationItems from "$data/navigationData";
import KingaBrand from "$generics/KingaBrand/";
import Flexbox from "$generics/Flexbox/";
import NavigationItem from "$components/Navigation/NavigationItem/";
import LinkedinIcon from "$generics/LinkedinIcon/";

import AboutMeItem from "../NavigationItem/AboutMeItem/";
import * as P from "./DesktopNavigation.parts";

export default function Navigation() {
    function renderItems(source: typeof navigationItems) {
        return (
            <>
                {source.map(({ label, link }) => {
                    return label === "O mnie" ? (
                        <AboutMeItem key={label} to={link}>
                            {label}
                        </AboutMeItem>
                    ) : (
                        <NavigationItem key={label} to={link}>
                            {label}
                        </NavigationItem>
                    );
                })}
            </>
        );
    }

    return (
        <P.NavigationWrapper>
            <P.ListWrapper>
                <Flexbox $width="auto">
                    <LinkedinIcon size={25} />
                    <KingaBrand />
                </Flexbox>
                {renderItems(navigationItems)}
            </P.ListWrapper>
        </P.NavigationWrapper>
    );
}
