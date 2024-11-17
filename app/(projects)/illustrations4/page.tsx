import { client } from "tina/__generated__/client";
import ProjectPage from "$components/ProjectPage/ProjectPage";

export default async function Illustrations4() {
    async function fetchData() {
        const myPost = await client.queries.illustrations({
            relativePath: "truck.md",
        });

        return myPost;
    }

    const projectData = (await fetchData()).data.illustrations;

    return <ProjectPage projectData={projectData} />;
}
