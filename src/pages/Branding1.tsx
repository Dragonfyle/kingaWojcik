import ProjectWithTabs from "../components/ProjectPage/ProjectWithTabs/ProjectWithTabs";
import { tabbedGalleryData } from "../data/tabbedGalleryData";

export default function Branding1() {
    return <ProjectWithTabs source={tabbedGalleryData.project1} />;
}