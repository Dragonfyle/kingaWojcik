"use client";

import { useDeviceContext } from "$contexts/DeviceContext";
import DesktopNavigation from "./DesktopNavigation";
import MobileNavigation from "./MobileNavigation";

export default function Navigation() {
    const { isMobile } = useDeviceContext();

    return isMobile ? <MobileNavigation /> : <DesktopNavigation />;
}
