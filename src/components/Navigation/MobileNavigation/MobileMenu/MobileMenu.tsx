import { Navigation as NavigationType } from "tina/__generated__/types";

import Divider from "$components/generics/Divider/";
import MenuCross from "$components/generics/MenuCrossIcon/";
import { defaultTheme } from "$styles/DefaultTheme";

import NavigationHeader from "../NavigationHeader/";
import MobileNavigationItem from "../MobileNavigationItem/";

interface MobileMenuProps {
    navigationItems: NavigationType[];
    onItemClick: () => void;
    onClose: () => void;
}

export default function MobileMenu({ navigationItems, onItemClick, onClose }: MobileMenuProps) {
    function renderItems(source: NavigationType[]) {
        return source.map(({ label, url }) => (
            <MobileNavigationItem key={label} to={url} onClick={onItemClick}>
                {label}
            </MobileNavigationItem>
        ));
    }

    return (
        <menu className="z-99 top-navigation fixed left-0 flex h-full w-full touch-none flex-col items-center justify-start gap-16 bg-leading-main-trans-1 pt-16">
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
