"use client";

import { useState } from "react";

import HamburgerIcon from "./HamburgerIcon/";
import MobileMenu from "./MobileMenu/MobileMenu";
import BrandAndLinkedin from "../BrandAndLinkedin/BrandAndLinkedin";

export default function MobileNavigation() {
    const [isExpanded, setIsExpanded] = useState(false);

    function handleHamburgerClick() {
        setIsExpanded((prev) => !prev);
    }

    function handleMenuItemTouch() {
        setIsExpanded(false);
    }

    function renderHamburgerOrMenu() {
        return isExpanded ? (
            <MobileMenu onItemClick={handleMenuItemTouch} onClose={handleHamburgerClick} />
        ) : (
            <HamburgerIcon onClick={handleHamburgerClick} />
        );
    }

    return (
        <>
            <nav className="site-padding-left h-mobile-navigation sticky left-1/2 top-0 z-10 flex items-center justify-between border-b border-leading-secondary-1 bg-white-1 py-2 pr-6">
                <BrandAndLinkedin linkedinSize={25} />

                {renderHamburgerOrMenu()}
            </nav>
        </>
    );
}
