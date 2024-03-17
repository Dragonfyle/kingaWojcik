import photoUna from "/about_foto.png";
import { wspolpraca } from "../components/HomePage/Carousel/CarouselSlide/CarouselSlide.utils";

interface AboutSectionData {
    imgUrl: string;
    header: string;
    description: string;
}

const aboutSectionData: AboutSectionData = {
    imgUrl: photoUna,
    header: "Trochę o sobie",
    description:
        "Swoją przygodę z grafiką rozpoczęłam od zagadnień brandingowych i to one sprawiają mi najwięcej satysfakcji. Studia kognitywistyczne pozwoliły mi zdobyć wiedzę dotyczącą neuro-psychologicznych aspektów ludzkiego postrzegania, komunikacji i znaków. Dzięki temu mogę tworzyć skuteczne  projekty, naprawdę odpowiadające na potrzeby danej marki i realizujące jej cele marketingowe. Pierwsze doświadczenie zdobywałam, projektując materiały marketingowe dla firm, w których pracowałam. Obecnie działam jako freelancer. Coraz bardziej interesuje mnie tez malarstwo cyfrowe i dlatego postanowiłam doskonalić się w tej dziedzinie. W moim portfolio zamieszczam wybrane prace z tej dziedziny.",
};

export type { AboutSectionData };

export { aboutSectionData };
