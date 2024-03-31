import { Outlet } from "react-router-dom";
import DesktopNavigation from "../Navigation/DesktopNavigation/DesktopNavigation";
import Footer from "../Footer/Footer";
import { useDeviceContext } from "../HomePage/contexts/DeviceContext/DeviceContext";
import * as P from "./Layout.parts";
import MobileNavigation from "../Navigation/MobileNavigation/MobileNavigation";

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
