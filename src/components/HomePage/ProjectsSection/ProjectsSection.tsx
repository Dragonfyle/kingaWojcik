import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArticlesThumbnails, BrandingThumbnails, IllustrationsThumbnails } from "tina/__generated__/types";

import { useDeviceContext } from "$contexts/DeviceContext";
import Flexbox from "$generics/Flexbox/Flexbox";
import Slider from "$generics/Slider/Slider";
import { SliderImperativeHandle } from "$generics/Slider/Slider.types";

import ProjectPanelIntro from "./ProjectPanel/ProjectPanelIntro/";
import ProjectPanelItem from "./ProjectPanel/ProjectPanelItem/";
import NavButtons from "../ProjectsSection/NavButtons/";
import { ProjectSectionProps } from "./ProjectsSection.types";
import * as P from "./ProjectsSections.parts";

export default function ProjectSection({ id, source, intro }: ProjectSectionProps) {
    const sliderRef = useRef<SliderImperativeHandle>(null);
    const { isMobile } = useDeviceContext();

    function renderContent(source: IllustrationsThumbnails[] | BrandingThumbnails[] | ArticlesThumbnails[]) {
        return source.map(({ thumbnail, title, description, url }) => (
            <Link key={title} to={url}>
                <ProjectPanelItem image={thumbnail} title={title} description={description} />
            </Link>
        ));
    }

    return (
        <P.StyledSection id={id}>
            <Flexbox $wrap="nowrap">
                <Flexbox $alignC="center">
                    <P.Header tag="h2" bold size="4xl">
                        {intro.title}
                    </P.Header>
                </Flexbox>

                {!isMobile && (
                    <Flexbox $wrap="nowrap" $justify="center">
                        <NavButtons
                            onNextProject={() => sliderRef.current?.scrollToNext()}
                            onPreviousProject={() => sliderRef.current?.scrollToPrevious()}
                            isFirstIndex={false}
                            isLastIndex={false}
                        />
                    </Flexbox>
                )}
            </Flexbox>

            {isMobile && <ProjectPanelIntro text={intro.description} />}

            <Slider ref={sliderRef}>
                {!isMobile && <ProjectPanelIntro text={intro.description} />}
                {renderContent(source)}
            </Slider>
        </P.StyledSection>
    );
}
