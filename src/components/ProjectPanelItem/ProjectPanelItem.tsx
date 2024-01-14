import * as P from "./ProjectPanelItem.parts";
import Thumbnail from "../Thumbnail/Thumbnail";

export default function ProjectPanelItem() {
  return (
    <P.ItemWrapper>
      <Thumbnail src="https://placekitten.com/640/360" />
    </P.ItemWrapper>
  );
}
