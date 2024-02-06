import * as P from "./ProjectPanelItem.parts";
import Thumbnail from "../Thumbnail/Thumbnail";

interface ProjectPanelItemProps {
    image: string;
}

export default function ProjectPanelItem({ image }: ProjectPanelItemProps) {
    return (
        <P.ItemWrapper>
            <Thumbnail src={image} />
            <P.DescriptionWrapper>
                <P.ItemTitle>Project title</P.ItemTitle>
                <P.ItemDescription>
                    Occaecat qui voluptate ipsum consectetur culpa. Est adipisicing non laborum nulla reprehenderit
                    laborum pariatur anim voluptate. Dolor id ullamco eu eu cupidatat velit ea.
                </P.ItemDescription>
            </P.DescriptionWrapper>
        </P.ItemWrapper>
    );
}
