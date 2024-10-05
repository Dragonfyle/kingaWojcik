import { Navigation as NavigationType } from "tina/__generated__/types";

import MobileNavigationItem from "../MobileNavigationItem/";

interface MobileMenuProps {
    navigationItems: NavigationType[];
    onItemClick: () => void;
}

export default function MobileMenu({ navigationItems, onItemClick }: MobileMenuProps) {
    function renderItems(source: NavigationType[]) {
        return source.map(({ label, url }) => (
            <MobileNavigationItem key={label} to={url} onClick={onItemClick}>
                {label}
            </MobileNavigationItem>
        ));
    }

    return (
        <menu className="z-99 fixed left-0 top-navigation flex h-full w-full touch-none flex-col items-center bg-leading-main-trans-1 pt-24">
            <ul className="flex flex-col gap-10">{renderItems(navigationItems)}</ul>
        </menu>
    );
}
