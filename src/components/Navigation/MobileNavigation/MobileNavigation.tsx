"use client";

import { useState } from "react";
import { Navigation as NavigationType } from "tina/__generated__/types";

import MenuCross from "$components/generics/MenuCrossIcon/MenuCrossIcon";

import HamburgerIcon from "./HamburgerIcon/";
import MobileMenu from "./MobileMenu/MobileMenu";
import BrandAndLinkedin from "../BrandAndLinkedin/BrandAndLinkedin";

export default function MobileNavigation({ navigationItems }: { navigationItems: NavigationType[] }) {
    const [isExpanded, setIsExpanded] = useState(false);

    function handleHamburgerClick() {
        setIsExpanded((prev) => !prev);
    }

    function handleMenuItemTouch() {
        setIsExpanded(false);
    }

    function renderHamburgerOrMenu() {
        return isExpanded ? (
            <>
                <MobileMenu navigationItems={navigationItems} onItemClick={handleMenuItemTouch} />
                <MenuCross onClick={handleHamburgerClick} />
            </>
        ) : (
            <HamburgerIcon onClick={handleHamburgerClick} />
        );
    }

    return (
        <>
            <nav className="sticky left-1/2 top-0 z-10 flex h-navigation items-center justify-between border-b border-leading-secondary-1 bg-white-1 py-2 pr-6 site-padding">
                <BrandAndLinkedin linkedinSize={30} />

                {renderHamburgerOrMenu()}
            </nav>
        </>
    );
}
