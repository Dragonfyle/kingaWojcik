import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { NUM_IMAGES } from "../../data/TopCarouselData";

const INTERVAL = 50;
const SLIDE_LENGTH_MS = 5000;

const normalizeStep = (interval: number, slideLengthMs: number) => {
  return 100 / (slideLengthMs / interval);
};

interface CarouselContextProps {
  children: React.ReactNode;
}

interface CarouselContext {
  activeImage: number;
  progress: number;
}

const CarouselContext = createContext({} as CarouselContext);

const CarouselContextProvider = ({ children }: CarouselContextProps) => {
  const [activeImage, setActiveImgae] = useState(0);
  const [progress, setProgress] = useState(0);
  const step = useMemo(() => normalizeStep(INTERVAL, SLIDE_LENGTH_MS), []);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      if (progress < 100) {
        setProgress((previous) => previous + step);
      } else {
        setProgress(0);
        setActiveImgae((previous) => {
          if (previous === NUM_IMAGES - 1) {
            return 0;
          } else {
            return previous + 1;
          }
        });
      }
    }, INTERVAL);
    return () => clearInterval(progressInterval);
  }, [progress, step]);
  return (
    <CarouselContext.Provider value={{ activeImage, progress }}>
      {children}
    </CarouselContext.Provider>
  );
};

const useCarouselContext = () => {
  return useContext(CarouselContext);
};

export { useCarouselContext };

export default CarouselContextProvider;
