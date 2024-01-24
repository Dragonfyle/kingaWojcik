import * as P from "./CarouselImage.parts";
import { useCarouselContext } from "../CarouselContext/CarouselContext";
import wspolpracaXXL from "/wspolpraca2560.png";
import dzielenieXXL from "/dzielenie2560.png";
import dzielenieL from "/dzielenie1920.png";
import wspolpracaL from "/wspolpraca1920.png";
import genericM from "/generic1024.png";
import genericS from "/generic640.png";

const wspolpraca = [wspolpracaXXL, wspolpracaL, genericM, genericS];
const dzielenie = [dzielenieXXL, dzielenieL, genericM, genericS];
const mediaQueries = [
  "(min-width: 1921px)",
  "(min-width: 1025px)",
  "(min-width: 641px)",
  "(max-width: 640px)",
];

const activeImageMap = new Map();
activeImageMap.set(0, wspolpraca);
activeImageMap.set(1, dzielenie);
activeImageMap.set(2, wspolpraca);
activeImageMap.set(3, dzielenie);
activeImageMap.set(4, wspolpraca);

export default function CarouselImage() {
  const { activeImage } = useCarouselContext();

  function generateSources(imageArray: string[]) {
    return imageArray.map((image, idx) => (
      <source key={image} srcSet={image} media={mediaQueries[idx]} />
    ));
  }

  return (
    <P.ImgWrapper>
      <picture>
        {generateSources(activeImageMap.get(activeImage))}
        <img src={wspolpracaL} />
        <P.StyledP>Cillum officia do culpa eu ea minim.</P.StyledP>
      </picture>
    </P.ImgWrapper>
  );
}
