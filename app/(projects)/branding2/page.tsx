import { client } from "tina/__generated__/client";
import ProjectPlain from "$components/ProjectPage/ProjectPlain";

export default async function Branding2() {
    async function fetchData() {
        const myPost = await client.queries.branding({
            relativePath: "renault.md",
        });

        return myPost;
    }

    const projectData = (await fetchData()).data.branding;

    return <ProjectPlain projectData={projectData} />;
}
