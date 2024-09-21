import Divider from "$components/generics/Divider/";
import MenuCross from "$components/generics/MenuCrossIcon/";
import { defaultTheme } from "$styles/DefaultTheme";
import navigationItems from "$data/navigationData";

import NavigationHeader from "../NavigationHeader/";
import MobileNavigationItem from "../MobileNavigationItem/";

interface MobileMenuProps {
    onItemClick: () => void;
    onClose: () => void;
}

export default function MobileMenu({ onItemClick, onClose }: MobileMenuProps) {
    function renderItems(source: typeof navigationItems) {
        return source.map(({ label, link }) => (
            <MobileNavigationItem key={label} to={link} onClick={onItemClick}>
                {label}
            </MobileNavigationItem>
        ));
    }

    return (
        <menu className="z-99 top-mobile-navigation fixed left-0 flex h-full w-full touch-none flex-col items-center justify-start gap-16 bg-leading-main-trans-1 pt-16">
            <div className="flex w-11/12 justify-end">
                <MenuCross onClick={onClose} />
            </div>

            <div className="flex w-3/4 flex-col gap-4">
                <NavigationHeader />

                <Divider height={3} width="100%" mTop={0} mBot={20} color={defaultTheme.colors.supplementary[3]} />
                <ul className="flex flex-col gap-4">{renderItems(navigationItems)}</ul>
                <Divider height={3} width="100%" mTop={70} mBot={0} color={defaultTheme.colors.supplementary[3]} />
            </div>
        </menu>
    );
}
