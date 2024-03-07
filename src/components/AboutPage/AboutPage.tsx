import { aboutGalleryData } from "../../data/aboutData";
import useScrollToTop from "../../hooks/useScrollToTop";
import AboutGallery from "./AboutGallery/AboutGallery";

export default function AboutPage() {
    useScrollToTop();

    return <AboutGallery source={aboutGalleryData} />;
}
