import { ImageSet } from "../CarouselSlide/CarouselSlide.utils";

interface CarouselImageProps extends React.PropsWithChildren {
    isActive: boolean;
    imageSet: ImageSet;
}

export type { CarouselImageProps };
