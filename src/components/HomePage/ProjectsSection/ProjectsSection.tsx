import { useRef } from "react";
import { Link } from "react-router-dom";

import { useDeviceContext } from "$contexts/DeviceContext";
import Flexbox from "$generics/Flexbox/Flexbox";
import Text from "$generics/Text/Text";
import Slider from "$generics/Slider/Slider";
import { SliderImperativeHandle } from "$generics/Slider/Slider.types";
import { ProjectPanelDataSection } from "$data/projectPanelData";

import ProjectPanelIntro from "./ProjectPanel/ProjectPanelIntro/";
import ProjectPanelItem from "./ProjectPanel/ProjectPanelItem/";
import NavButtons from "../ProjectsSection/NavButtons/";
import * as P from "./ProjectsSections.parts";

interface ProjectSectionProps {
    id: string;
    source: ProjectPanelDataSection;
}

export default function ProjectSection({ id, source }: ProjectSectionProps) {
    const sliderRef = useRef<SliderImperativeHandle>(null);
    const { isMobile } = useDeviceContext();

    function getContent(source: ProjectPanelDataSection) {
        return source.content.map(({ thumbnail, title, description, projectUrl }) => (
            <Link key={description} to={projectUrl}>
                <ProjectPanelItem image={thumbnail} title={title} description={description} />
            </Link>
        ));
    }

    return (
        <P.StyledSection id={id}>
            <Flexbox $wrap="nowrap">
                <Flexbox>
                    <P.StyledHeader>
                        <Text bold size="4xl">
                            {source.header}
                        </Text>
                    </P.StyledHeader>
                </Flexbox>
                {!isMobile && (
                    <Flexbox $wrap="nowrap" $justify="center">
                        <NavButtons
                            onNextProject={() => sliderRef.current?.scrollToNext()}
                            onPreviousProject={() => sliderRef.current?.scrollToPrevious()}
                        />
                    </Flexbox>
                )}
            </Flexbox>
            {isMobile && <ProjectPanelIntro text={source.intro} />}

            <Slider ref={sliderRef}>
                {!isMobile && <ProjectPanelIntro text={source.intro} />}
                {getContent(source)}
            </Slider>
        </P.StyledSection>
    );
}
