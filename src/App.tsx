import { GlobalStyles } from "./styles/GlobalStyles";
import Navigation from "./components/Navigation/Navigation";
import Carousel from "./components/Carousel/Carousel";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <GlobalStyles />
      <Navigation />
      <Carousel />
      <Content />
      <Footer />
    </>
  );
}

export default App;
