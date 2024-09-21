// import { useEffect, useState } from "react";
import { client } from "tina/__generated__/client";
// import { IllustrationsQuery } from "tina/__generated__/types";
import ProjectPlain from "$components/ProjectPage/ProjectPlain";

export default async function Illustrations1() {
    // const [projectData, setProjectData] = useState<IllustrationsQuery["illustrations"] | null>(null);

    async function fetchData() {
        const myPost = await client.queries.illustrations({
            relativePath: "kawa.md",
        });

        return myPost;
    }

    // useEffect(() => {
    const projectData = (await fetchData()).data.illustrations;
    // fetchData().then((project) => setProjectData(project.data.illustrations));
    // }, []);

    return projectData ? <ProjectPlain projectData={projectData} /> : <div>Loading...</div>;
}
