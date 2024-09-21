"use client";

import { createContext, useContext, useState, useEffect, SetStateAction } from "react";
import { CONFIG } from "$constants/config";
import { NUM_IMAGES } from "$data/TopCarouselData";

interface CarouselContextProps {
    children: React.ReactNode;
}

interface CarouselBarContext {
    progress: number;
    activeImage: number;
    setActiveImage: React.Dispatch<SetStateAction<number>>;
    setProgress: React.Dispatch<SetStateAction<number>>;
    startCarousel: () => void;
    stopCarousel: () => void;
}

const MAX_PROGRESS = 100;
const MIN_PROGRESS = 0;
const LAST_IMG_IDX = NUM_IMAGES - 1;
const FIRST_IDX = 0;

function nextIndex(previousIdx: number) {
    return previousIdx + 1;
}
const getStep = (interval: number, slideLengthMs: number) => {
    return 100 / (slideLengthMs / interval);
};
const step = getStep(CONFIG.CAROUSEL.INTERVAL, CONFIG.CAROUSEL.SLIDE_LENGTH_MS);

const CarouselContext = createContext({} as CarouselBarContext);

const CarouselContextProvider = ({ children }: CarouselContextProps) => {
    const [isRunning, setIsRunning] = useState(true);
    const [activeImage, setActiveImage] = useState(0);
    const [progress, setProgress] = useState(0);

    function stopCarousel() {
        setProgress(0);
        setIsRunning(false);
    }

    function startCarousel() {
        setIsRunning(true);
    }

    useEffect(() => {
        if (!isRunning) return;

        const progressInterval = setInterval(() => {
            setProgress((prev) => {
                if (prev < MAX_PROGRESS) {
                    return prev + step;
                } else {
                    setActiveImage((prev) => {
                        if (prev < LAST_IMG_IDX) {
                            return nextIndex(prev);
                        } else {
                            return FIRST_IDX;
                        }
                    });

                    return MIN_PROGRESS;
                }
            });
        }, CONFIG.CAROUSEL.INTERVAL);

        return () => clearInterval(progressInterval);
    }, [isRunning]);

    return (
        <CarouselContext.Provider
            value={{ activeImage, progress, setProgress, setActiveImage, startCarousel, stopCarousel }}>
            {children}
        </CarouselContext.Provider>
    );
};

const useCarouselContext = () => {
    return useContext(CarouselContext);
};

export { useCarouselContext };

export default CarouselContextProvider;
