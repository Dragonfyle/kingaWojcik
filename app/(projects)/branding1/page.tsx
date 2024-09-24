import { client } from "tina/__generated__/client";
import ProjectPlain from "$components/ProjectPage/ProjectPlain";

export default async function Branding1() {
    async function fetchData() {
        const myPost = await client.queries.branding({
            relativePath: "goslina.md",
        });

        return myPost;
    }

    const projectData = (await fetchData()).data.branding;

    return <ProjectPlain projectData={projectData} />;
}
