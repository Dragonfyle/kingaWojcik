import { Navigation as NavigationType } from "tina/__generated__/types";
import NavigationItem from "$components/Navigation/NavigationItem/";

import AboutMeItem from "../NavigationItem/AboutMeItem/";
import BrandAndLinkedin from "../BrandAndLinkedin/BrandAndLinkedin";

export default function Navigation({ navigationItems }: { navigationItems: NavigationType[] }) {
    function renderItems(source: NavigationType[]) {
        return (
            <>
                {source.map(({ label, url }) => {
                    return label === "O mnie" ? (
                        <AboutMeItem key={label} to={url}>
                            {label}
                        </AboutMeItem>
                    ) : (
                        <NavigationItem key={label} to={url}>
                            {label}
                        </NavigationItem>
                    );
                })}
            </>
        );
    }

    return (
        <nav className="h-navigation sticky top-0 z-10 flex border-b border-leading-secondary-1 bg-white-1 site-padding xxl:justify-start">
            <ul className="xl:w-78% w-90% flex h-full justify-start gap-8">
                <BrandAndLinkedin linkedinSize={30} />

                {renderItems(navigationItems)}
            </ul>
        </nav>
    );
}
