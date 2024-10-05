import { client } from "tina/__generated__/client";
import ProjectPlain from "$components/ProjectPage";

export default async function Branding5() {
    async function fetchData() {
        const myPost = await client.queries.branding({
            relativePath: "mobi.md",
        });

        return myPost;
    }
    const projectData = (await fetchData()).data.branding;

    return (
        <ProjectPlain projectData={projectData} />
    );
}
