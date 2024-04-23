import { plainGalleryData } from "$data/plainGalleryData";
import ProjectPlain from "$components/ProjectPage/ProjectPlain/ProjectPlain";
import * as P from "./Branding2.parts";

export default function Branding2() {
    return (
        <P.Wrapper>
            <ProjectPlain source={plainGalleryData.project2} />;
        </P.Wrapper>
    );
}
