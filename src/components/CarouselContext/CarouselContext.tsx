import { createContext, useContext, useEffect, useMemo, useState } from "react";

const INTERVAL = 50;
const SLIDE_LENGTH_MS = 5000;

const normalizeStep = (interval: number, slideLengthMs: number) => {
  return 100 / (slideLengthMs / interval);
};

interface CarouselContextProps {
  children: React.ReactNode;
  numImages: number;
}

interface CarouselContext {
  activeImage: number;
  progress: number;
}

const CarouselContext = createContext({} as CarouselContext);

const CarouselContextProvider = ({
  children,
  numImages,
}: CarouselContextProps) => {
  const [activeImage, setActiveImgae] = useState(0);
  const [progress, setProgress] = useState(0);
  const step = useMemo(() => normalizeStep(INTERVAL, SLIDE_LENGTH_MS), []);
  console.log(activeImage);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      if (progress < 100) {
        setProgress((previous) => previous + step);
      } else {
        setProgress(0);
        setActiveImgae((previous) => {
          if (previous === numImages) {
            return 0;
          } else {
            return previous + 1;
          }
        });
      }
    }, INTERVAL);
    return () => clearInterval(progressInterval);
  }, [numImages, progress, step]);
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
