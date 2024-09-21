import navigationItems from "$data/navigationData";
import NavigationItem from "$components/Navigation/NavigationItem/";

import AboutMeItem from "../NavigationItem/AboutMeItem/";
import BrandAndLinkedin from "../BrandAndLinkedin/BrandAndLinkedin";

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
        <nav className="site-padding-left sticky top-0 z-10 flex border-b border-leading-secondary-1 bg-white-1 xxl:justify-start">
            <ul className="xl:w-78% w-90% flex h-full justify-start gap-5">
                <BrandAndLinkedin linkedinSize={25} />

                {renderItems(navigationItems)}
            </ul>
        </nav>
    );
}
