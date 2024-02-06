import { createContext, useContext, useState, useEffect, SetStateAction } from "react";
import { CONFIG } from "../../../../constants/config";
import { NUM_IMAGES } from "../../../../data/TopCarouselData";

interface CarouselContextProps {
    children: React.ReactNode;
}

interface CarouselBarContext {
    progress: number;
    activeImage: number;
    setActiveImage: React.Dispatch<SetStateAction<number>>;
    setProgress: React.Dispatch<SetStateAction<number>>;
}

const getStep = (interval: number, slideLengthMs: number) => {
    return 100 / (slideLengthMs / interval);
};

const step = getStep(CONFIG.CAROUSEL.INTERVAL, CONFIG.CAROUSEL.SLIDE_LENGTH_MS);

const CarouselContext = createContext({} as CarouselBarContext);

const CarouselContextProvider = ({ children }: CarouselContextProps) => {
    const [activeImage, setActiveImage] = useState(0);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const progressInterval = setInterval(() => {
            setProgress((prev) => {
                if (prev < 100) {
                    return prev + step;
                } else {
                    setActiveImage((prev) => {
                        if (prev < NUM_IMAGES - 1) {
                            return prev + 1;
                        } else {
                            return 0;
                        }
                    });
                    return 0;
                }
            });
        }, CONFIG.CAROUSEL.INTERVAL);
        return () => clearInterval(progressInterval);
    }, []);

    return (
        <CarouselContext.Provider value={{ activeImage, progress, setProgress, setActiveImage }}>
            {children}
        </CarouselContext.Provider>
    );
};

const useCarouselContext = () => {
    return useContext(CarouselContext);
};

export { useCarouselContext };

export default CarouselContextProvider;
