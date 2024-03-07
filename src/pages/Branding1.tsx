import ProjectWithTabs from "../components/ProjectPage/ProjectWithTabs/ProjectWithTabs";
import { tabbedGalleryData } from "../data/TabbedGalleryData";

export default function Branding1() {
    return <ProjectWithTabs source={tabbedGalleryData.project1} />;
}
