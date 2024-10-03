import { client } from "tina/__generated__/client";
import ProjectPage from "$components/ProjectPage/ProjectPage";

export default async function Branding1() {
    async function fetchData() {
        const myPost = await client.queries.branding({
            relativePath: "goslina.md",
        });

        return myPost;
    }

    const projectData = (await fetchData()).data.branding;

    return <ProjectPage projectData={projectData} />;
}
