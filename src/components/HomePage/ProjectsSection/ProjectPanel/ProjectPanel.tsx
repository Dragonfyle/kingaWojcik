import { forwardRef } from "react";
import { Link } from "react-router-dom";
import ProjectPanelIntro from "./ProjectPanelIntro/ProjectPanelIntro";
import ProjectPanelItem from "./ProjectPanelItem/ProjectPanelItem";
import Flexbox from "../../../generics/Flexbox/Flexbox";
import { ProjectPanelDataSection } from "../../../../data/projectPanelData";
import { useDeviceContext } from "../../contexts/DeviceContext/DeviceContext";
import * as P from "./ProjectPanel.parts";

interface ProjectPanelProps {
    source: ProjectPanelDataSection;
}

export default forwardRef(function ProjectPanel({ source }: ProjectPanelProps, ref: React.Ref<HTMLDivElement>) {
    const { isMobile } = useDeviceContext();

    function getContent(source: ProjectPanelDataSection) {
        return source.content.map(({ thumbnail, title, description, projectUrl }) => (
            <Link key={description} to={projectUrl}>
                <ProjectPanelItem image={thumbnail} title={title} description={description} />
            </Link>
        ));
    }

    return (
        <P.PanelWrapper ref={ref}>
            <P.ProjectPanel>
                {!isMobile && <ProjectPanelIntro text={source.intro} />}
                <Flexbox $wrap="nowrap" $colGap="50px">
                    {getContent(source)}
                </Flexbox>
            </P.ProjectPanel>
        </P.PanelWrapper>
    );
});
