import * as P from "./Layout.parts";
import Navigation from "../Navigation/Navigation";
import Carousel from "../Carousel/Carousel";
import Content from "../Content/Content";
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
