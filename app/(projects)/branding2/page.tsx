import { client } from "tina/__generated__/client";
import ProjectPage from "$components/ProjectPage/ProjectPage";

export default async function Branding2() {
    async function fetchData() {
        const myPost = await client.queries.branding({
            relativePath: "renault.md",
        });

        return myPost;
    }

    const projectData = (await fetchData()).data.branding;

    return <ProjectPage projectData={projectData} />;
}
