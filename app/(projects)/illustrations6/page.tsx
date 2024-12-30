import { client } from "tina/__generated__/client";
import ProjectPage from "$components/ProjectPage/ProjectPage";

export default async function Illustrations6() {
    async function fetchData() {
        const myPost = await client.queries.illustrations({
            relativePath: "kalendarz-ufo.md",
        });

        return myPost;
    }

    const projectData = (await fetchData()).data.illustrations;

    return <ProjectPage projectData={projectData} />;
}
