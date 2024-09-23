"use client";

import { useRef } from "react";
import dynamic from "next/dynamic";
import { ArticlesThumbnails, BrandingThumbnails, IllustrationsThumbnails } from "tina/__generated__/types";
import Link from "next/link";

import { useDeviceContext } from "$contexts/DeviceContext";
import { SliderImperativeHandle } from "$generics/Slider/Slider.types";
import Slider from "$generics/Slider/Slider";

import ProjectPanelItem from "./ProjectPanel/ProjectPanelItem/";
import { ProjectSectionProps } from "./ProjectsSection.types";
import ProjectSectionTitle from "./ProjectSectionTitle/ProjectSectionTitle";

const NavButtons = dynamic(() => import("../ProjectsSection/NavButtons/"), {
    ssr: false,
});
const ProjectPanelIntro = dynamic(() => import("./ProjectPanel/ProjectPanelIntro/"), {
    ssr: false,
});

export default function ProjectSection({ id, source, intro }: ProjectSectionProps) {
    const sliderRef = useRef<SliderImperativeHandle>(null);
    const { isMobile } = useDeviceContext();

    function renderContent(source: IllustrationsThumbnails[] | BrandingThumbnails[] | ArticlesThumbnails[]) {
        return source.map(({ thumbnail, title, description, url }) => (
            <Link key={title} href={url} className="">
                <ProjectPanelItem image={thumbnail} title={title} description={description} />
            </Link>
        ));
    }

    return (
        <section id={id} className="w-95% l:89% m:h-project-section-s site-padding relative flex h-auto flex-col py-10">
            <div className="flex justify-between l:pr-96">
                <ProjectSectionTitle title={intro.title} />

                {!isMobile && (
                    <NavButtons
                        onNextProject={() => sliderRef.current?.scrollToNext()}
                        onPreviousProject={() => sliderRef.current?.scrollToPrevious()}
                        isFirstIndex={false}
                        isLastIndex={false}
                    />
                )}
            </div>

            {isMobile && <ProjectPanelIntro text={intro.description} />}

            <Slider ref={sliderRef}>
                {!isMobile && <ProjectPanelIntro text={intro.description} />}
                {renderContent(source)}
            </Slider>
        </section>
    );
}
