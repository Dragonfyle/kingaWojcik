import { client } from "tina/__generated__/client";
import ProjectPlain from "$components/ProjectPage/ProjectPlain";

export default async function Illustrations2() {
    async function fetchData() {
        const myPost = await client.queries.illustrations({
            relativePath: "okladki.md",
        });

        return myPost;
    }

    const projectData = (await fetchData()).data.illustrations;

    return <ProjectPlain projectData={projectData} />;
}
