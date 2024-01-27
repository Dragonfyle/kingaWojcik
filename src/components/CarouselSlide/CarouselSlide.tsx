import * as P from "./CarouselSlide.parts";
import { useCarouselContext } from "../CarouselContext/CarouselContext";
import { IMAGE_DESCRIPTIONS } from "../../data/TopCarouselData";
import { imageSets } from "./CarouselSlide.utils";
import CarouselImage from "../CarouselImage/CarouselImage";

export default function CarouselSlide() {
  const { activeImage } = useCarouselContext();

  function getDescription(activeImage: number) {
    return IMAGE_DESCRIPTIONS[activeImage];
  }
  return (
    <P.SlideWrapper>
      <CarouselImage
        isActive={activeImage === 0}
        imageSet={imageSets[activeImage]}
        activeImage={activeImage}
      ></CarouselImage>
      <P.StyledP $isActive={activeImage === 0}>
        {getDescription(activeImage)}
      </P.StyledP>
      <CarouselImage
        isActive={activeImage === 1}
        imageSet={imageSets[activeImage]}
        activeImage={activeImage}
      ></CarouselImage>
      <P.StyledP $isActive={activeImage === 1}>
        {getDescription(activeImage)}
      </P.StyledP>
      <CarouselImage
        isActive={activeImage === 2}
        imageSet={imageSets[activeImage]}
        activeImage={activeImage}
      ></CarouselImage>
      <P.StyledP $isActive={activeImage === 2}>
        {getDescription(activeImage)}
      </P.StyledP>
      <CarouselImage
        isActive={activeImage === 3}
        imageSet={imageSets[activeImage]}
        activeImage={activeImage}
      ></CarouselImage>
      <P.StyledP $isActive={activeImage === 3}>
        {getDescription(activeImage)}
      </P.StyledP>
      <CarouselImage
        isActive={activeImage === 4}
        imageSet={imageSets[activeImage]}
        activeImage={activeImage}
      ></CarouselImage>
      <P.StyledP $isActive={activeImage === 4}>
        {getDescription(activeImage)}
      </P.StyledP>
    </P.SlideWrapper>
  );
}
