import React from "react";

import { IMAGE_DESCRIPTIONS, IMAGE_TITLES, IMAGE_PRELUDE } from "$data/TopCarouselData";
import { useCarouselContext } from "$contexts/CarouselContext";
import CarouselImage from "$components/HomePage/Carousel/CarouselImage/";

import { imageSets } from "./CarouselSlide.utils";
import CarouselSlideText from "../CarouselSlideText/";
import * as P from "./CarouselSlide.parts";

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
                    prelude={IMAGE_PRELUDE}
                    title={getTitle(idx)}
                    description={getDescription(idx)}
                    isActive={activeImage === idx}
                />
            </React.Fragment>
        ));
    }

    return <P.SlideWrapper>{generateImages(activeImage)} </P.SlideWrapper>;
}
