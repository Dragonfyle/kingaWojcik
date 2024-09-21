"use client";

import { useDeviceContext } from "$contexts/DeviceContext";
import DesktopNavigation from "$components/Navigation/DesktopNavigation/";
import MobileNavigation from "$components/Navigation/MobileNavigation/";

export default function Layout() {
    const { isMobile } = useDeviceContext();

    return (
        <>
            {!isMobile && <DesktopNavigation />}
            {isMobile && <MobileNavigation />}
        </>
    );
}
