import * as P from "./ProjectPanel.parts";
import { forwardRef } from "react";
import ProjectPanelIntro from "./ProjectPanelIntro/ProjectPanelIntro";
import ProjectPanelItem from "./ProjectPanelItem/ProjectPanelItem";
import { useDeviceContext } from "../../contexts/DeviceContext/DeviceContext";
import Flexbox from "../../../generics/Flexbox/Flexbox";
import { ProjectPanelDataSection } from "../../../../data/ProjectPanelData";
import { Link } from "react-router-dom";

interface ProjectPanelProps {
    source: ProjectPanelDataSection;
}

export default forwardRef(function ProjectPanel({ source }: ProjectPanelProps, ref: React.Ref<HTMLDivElement>) {
    const { isMobile } = useDeviceContext();

    function getContent(source: ProjectPanelDataSection) {
        return source.content.map(({ thumbnail, description, projectUrl }) => (
            <Link to={projectUrl}>
                <ProjectPanelItem image={thumbnail} text={description} />
            </Link>
        ));
    }

    return (
        <P.PanelWrapper ref={ref}>
            <P.ProjectPanel>
                {!isMobile && <ProjectPanelIntro text={source.intro} />}
                <Flexbox $wrap="nowrap" $colGap="50px">
                    {getContent(source)}{" "}
                </Flexbox>
            </P.ProjectPanel>
        </P.PanelWrapper>
    );
});
