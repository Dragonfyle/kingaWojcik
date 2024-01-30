import React from "react";
import * as P from "./CarouselSlide.parts";
import { useCarouselContext } from "../CarouselContext/CarouselContext";
import { IMAGE_DESCRIPTIONS } from "../../data/TopCarouselData";
import { imageSets } from "./CarouselSlide.utils";
import CarouselImage from "../CarouselImage/CarouselImage";
import CarouselImageDescription from "../CarouselImageDescription/CarouselImageDescription";

export default function CarouselSlide() {
    const { activeImage } = useCarouselContext();

    function getDescription(descriptionIndex: number) {
        return IMAGE_DESCRIPTIONS[descriptionIndex];
    }
    function generateImages(activeImage: number): React.ReactNode {
        return imageSets.map((set, idx) => (
            <React.Fragment key={idx}>
                <CarouselImage isActive={activeImage === idx} imageSet={set} />
                <CarouselImageDescription isActive={activeImage === idx}>
                    {getDescription(idx)}
                </CarouselImageDescription>
            </React.Fragment>
        ));
    }

    return <P.SlideWrapper>{generateImages(activeImage)} </P.SlideWrapper>;
}
