"use client";

import { useRef } from "react";
import {
    ArticlesThumbnails,
    BrandingThumbnails,
    IllustrationsThumbnails,
    PortraitThumbnails,
} from "tina/__generated__/types";
import Link from "next/link";

import { useDeviceContext } from "$contexts/DeviceContext";
import { SliderImperativeHandle } from "$generics/Slider/Slider.types";
import Slider from "$generics/Slider/Slider";

import ProjectPanelIntro from "./ProjectPanel/ProjectPanelIntro/ProjectPanelIntro";
import NavButtons from "./NavButtons/NavButtons";
import ProjectPanelItem from "./ProjectPanel/ProjectPanelItem/";
import { ProjectSectionProps } from "./ProjectsSection.types";
import ProjectSectionTitle from "./ProjectSectionTitle/ProjectSectionTitle";

export default function ProjectSection({ id, source, intro }: ProjectSectionProps) {
    const sliderRef = useRef<SliderImperativeHandle>(null);
    const { isMobile } = useDeviceContext();

    function renderSliderContent(
        source: IllustrationsThumbnails[] | BrandingThumbnails[] | ArticlesThumbnails[] | PortraitThumbnails[]
    ) {
        return source.map(({ thumbnail, title, description, url }) => (
            <Link key={title} href={url} className="">
                <ProjectPanelItem image={thumbnail} title={title} description={description} />
            </Link>
        ));
    }

    function renderIntro() {
        return isMobile ? (
            <div className="flex flex-col justify-between gap-y-3 l:pr-96">
                <ProjectSectionTitle title={intro.title} />
                <ProjectPanelIntro text={intro.description} />
            </div>
        ) : (
            <div className="flex justify-between l:pr-96">
                <ProjectSectionTitle title={intro.title} />

                <NavButtons
                    onNextProject={() => sliderRef.current?.scrollToNext()}
                    onPreviousProject={() => sliderRef.current?.scrollToPrevious()}
                    isFirstIndex={false}
                    isLastIndex={false}
                />
            </div>
        );
    }

    function renderSlider() {
        return isMobile ? (
            <Slider ref={sliderRef}>{renderSliderContent(source)}</Slider>
        ) : (
            <Slider ref={sliderRef}>
                <ProjectPanelIntro text={intro.description} />
                {renderSliderContent(source)}
            </Slider>
        );
    }

    return (
        <section id={id} className="w-95% l:89% relative flex h-auto flex-col py-10 site-padding m:h-project-section-s">
            {renderIntro()}
            {renderSlider()}
        </section>
    );
}
