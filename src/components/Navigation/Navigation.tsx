"use client";

import { Navigation as NavigationType } from "tina/__generated__/types";

import { useDeviceContext } from "$contexts/DeviceContext";
import DesktopNavigation from "./DesktopNavigation";
import MobileNavigation from "./MobileNavigation";

export default function Navigation({ navigationItems }: { navigationItems: NavigationType[] }) {
    const { isMobile } = useDeviceContext();

    return isMobile ? (
        <MobileNavigation navigationItems={navigationItems} />
    ) : (
        <DesktopNavigation navigationItems={navigationItems} />
    );
}
