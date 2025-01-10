import { client } from "tina/__generated__/client";
import ProjectPage from "$components/ProjectPage/ProjectPage";

export default async function Offer2() {
    async function fetchData() {
        const myPost = await client.queries.portraits({
            relativePath: "ilustracje_reklamowe.md",
        });

        return myPost;
    }

    const projectData = (await fetchData()).data.portraits;

    return <ProjectPage projectData={projectData} />;
}
