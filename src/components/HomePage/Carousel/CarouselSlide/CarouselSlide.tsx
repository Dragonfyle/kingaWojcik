import React from "react";
import * as P from "./CarouselSlide.parts";
import { useCarouselContext } from "../../contexts/CarouselContext/CarouselContext";
import { IMAGE_DESCRIPTIONS, IMAGE_TITLES } from "../../../../data/TopCarouselData";
import { imageSets } from "./CarouselSlide.utils";
import CarouselImage from "../CarouselImage/CarouselImage";
import CarouselSlideText from "../CarouselSlideText/CarouselSlideText";

export default function CarouselSlide() {
    const { activeImage } = useCarouselContext();

    function getDescription(descriptionIndex: number) {
        return IMAGE_DESCRIPTIONS[descriptionIndex];
    }

    function getTitle(descriptionIndex: number) {
        return IMAGE_TITLES[descriptionIndex];
    }
    function generateImages(activeImage: number): React.ReactNode {
        return imageSets.map((set, idx) => (
            <React.Fragment key={idx}>
                <CarouselImage isActive={activeImage === idx} imageSet={set} />
                <CarouselSlideText
                    title={getTitle(idx)}
                    description={getDescription(idx)}
                    isActive={activeImage === idx}
                />
            </React.Fragment>
        ));
    }

    return <P.SlideWrapper>{generateImages(activeImage)} </P.SlideWrapper>;
}
