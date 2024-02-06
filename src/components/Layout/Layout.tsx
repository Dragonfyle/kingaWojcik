import * as P from "./Layout.parts";
import Navigation from "../Navigation/Navigation";
import Carousel from "../HomePage/Carousel/Carousel";
import Content from "../HomePage/HomeContent/HomeContent";
import Footer from "../Footer/Footer";

export default function Layout() {
    return (
        <P.Layout>
            <Navigation />
            <Carousel />
            <Content />
            <Footer />
        </P.Layout>
    );
}
