import { Outlet } from "react-router-dom";

import { useDeviceContext } from "$contexts/DeviceContext";
import DesktopNavigation from "$components/Navigation/DesktopNavigation/";
import Footer from "$components/Footer";
import MobileNavigation from "$components/Navigation/MobileNavigation/";

import * as P from "./Layout.parts";

export default function Layout() {
    const { isMobile } = useDeviceContext();

    return (
        <P.Layout>
            {!isMobile && <DesktopNavigation />}
            {isMobile && <MobileNavigation />}
            <Outlet />
            <Footer />
        </P.Layout>
    );
}
