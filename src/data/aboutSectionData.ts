import photoUna from "/about_foto.png";
import { wspolpraca } from "../components/HomePage/Carousel/CarouselSlide/CarouselSlide.utils";

interface AboutSectionData {
    imgUrl: string;
    header: string;
    description: string;
}

const aboutSectionData: AboutSectionData = {
    imgUrl: photoUna,
    header: "Nostrud proident.",
    description:
        "Exercitation commodo sunt exercitation magna adipisicing incididunt cillum quis duis.Qui cupidatat non amet id velit exercitation.Nisi mollit ipsum do sunt occaecat commodo nulla reprehenderit non Lorem.Sunt excepteur non velit excepteur proident in enim aliquip velit deserunt occaecat ea adipisicing commodo.",
};

export type { AboutSectionData };

export { aboutSectionData };
