import { Outlet } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
import { useDeviceContext } from "../HomePage/contexts/DeviceContext/DeviceContext";
import * as P from "./Layout.parts";

export default function Layout() {
    const { isMobile } = useDeviceContext();

    return (
        <P.Layout>
            {!isMobile && <Navigation />}
            <Outlet />
            <Footer />
        </P.Layout>
    );
}
