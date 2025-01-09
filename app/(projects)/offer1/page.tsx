import { client } from "tina/__generated__/client";
import ProjectPage from "$components/ProjectPage/ProjectPage";

export default async function Offer1() {
    async function fetchData() {
        const myPost = await client.queries.portraits({
            relativePath: "komiksowy_portret.md",
        });

        return myPost;
    }

    const projectData = (await fetchData()).data.portraits;

    return <ProjectPage projectData={projectData} />;
}
