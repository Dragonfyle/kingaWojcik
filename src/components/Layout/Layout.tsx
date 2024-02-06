import * as P from "./Layout.parts";
import Navigation from "../Navigation/Navigation";
import Carousel from "../HomePage/Carousel/Carousel";
import Content from "../HomePage/HomeContent/HomeContent";
import Footer from "../Footer/Footer";
import { useDeviceContext } from "../HomePage/contexts/DeviceContext/DeviceContext";

export default function Layout() {
    const { isMobile } = useDeviceContext();

    return (
        <P.Layout>
            {!isMobile && <Navigation />}
            <Carousel />
            <Content />
            <Footer />
        </P.Layout>
    );
}
