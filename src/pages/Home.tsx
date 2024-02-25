import Carousel from "../components/HomePage/Carousel/Carousel";
import HomeContent from "../components/HomePage/HomeContent/HomeContent";
import useScrollToTop from "../hooks/useScrollToTop";

export default function Home() {
    useScrollToTop();

    return (
        <>
            <Carousel />
            <HomeContent />
        </>
    );
}
