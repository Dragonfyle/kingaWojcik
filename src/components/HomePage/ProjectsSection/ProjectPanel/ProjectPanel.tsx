import * as P from "./ProjectPanel.parts";
import { forwardRef } from "react";
// import img1 from "https://picsum.photos/seed/123/640/360";
// import img2 from "https://picsum.photos/seed/1245/640/360";
// import img3 from "https://picsum.photos/seed/sdag/640/360";
// import img4 from "https://picsum.photos/seed/34tg/640/360";
// import img5 from "https://picsum.photos/seed/sdag/640/360";
// import img6 from "https://picsum.photos/seed/h53q/640/360";
// import img7 from "https://picsum.photos/seed/434/640/360";
import ProjectPanelIntro from "./ProjectPanelIntro/ProjectPanelIntro";
import ProjectPanelItem from "./ProjectPanelItem/ProjectPanelItem";
import { useDeviceContext } from "../../contexts/DeviceContext/DeviceContext";
import Flexbox from "../../../generics/Flexbox/Flexbox";

export default forwardRef(function ProjectPanel(_, ref: React.Ref<HTMLDivElement>) {
    const { isMobile } = useDeviceContext();

    return (
        <P.PanelWrapper ref={ref}>
            <P.ProjectPanel>
                {!isMobile && <ProjectPanelIntro />}
                <Flexbox $wrap="nowrap">
                    <ProjectPanelItem image="https://picsum.photos/seed/123/640/360" />
                    <ProjectPanelItem image="https://picsum.photos/seed/1245/640/360" />
                    <ProjectPanelItem image="https://picsum.photos/seed/sdag/640/360" />
                    <ProjectPanelItem image="https://picsum.photos/seed/34tg/640/360" />
                    <ProjectPanelItem image="https://picsum.photos/seed/sdag/640/360" />
                    <ProjectPanelItem image="https://picsum.photos/seed/h53q/640/360" />
                    <ProjectPanelItem image="https://picsum.photos/seed/434/640/360" />
                </Flexbox>
            </P.ProjectPanel>
        </P.PanelWrapper>
    );
});
