import * as P from "./ProjectPanel.parts";
import ProjectPanelItem from "../ProjectPanelItem/ProjectPanelItem";

export default function ProjectPanel() {
  return (
    <P.PanelWrapper>
      <P.ProjectPanel>
        <ProjectPanelItem image="https://picsum.photos/seed/123/640/360" />
        <ProjectPanelItem image="https://picsum.photos/seed/1245/640/360" />
        <ProjectPanelItem image="https://picsum.photos/seed/sdag/640/360" />
        <ProjectPanelItem image="https://picsum.photos/seed/34tg/640/360" />
        <ProjectPanelItem image="https://picsum.photos/seed/sdag/640/360" />
        <ProjectPanelItem image="https://picsum.photos/seed/h53q/640/360" />
        <ProjectPanelItem image="https://picsum.photos/seed/434/640/360" />
      </P.ProjectPanel>
    </P.PanelWrapper>
  );
}
