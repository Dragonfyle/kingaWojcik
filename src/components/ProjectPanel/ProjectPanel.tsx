import * as P from "./ProjectPanel.parts";
import ProjectPanelItem from "../ProjectPanelItem/ProjectPanelItem";

export default function ProjectPanel() {
  return (
    <P.PanelWrapper>
      <P.ProjectPanel>
        <ProjectPanelItem />
        <ProjectPanelItem />
        <ProjectPanelItem />
        <ProjectPanelItem />
        <ProjectPanelItem />
        <ProjectPanelItem />
        <ProjectPanelItem />
      </P.ProjectPanel>
    </P.PanelWrapper>
  );
}
