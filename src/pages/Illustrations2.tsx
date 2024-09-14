import ProjectPlain from "$components/ProjectPage/ProjectPlain/ProjectPlain";
import { useEffect, useState } from "react";
import { client } from "tina/__generated__/client";
import { IllustrationsQuery } from "tina/__generated__/types";

export default function Illustrations2() {
    const [projectData, setProjectData] = useState<IllustrationsQuery["illustrations"] | null>(null);

    async function fetchData() {
        const myPost = await client.queries.illustrations({
            relativePath: "okladki.md",
        });

        return myPost;
    }

    useEffect(() => {
        fetchData().then((project) => setProjectData(project.data.illustrations));
    }, []);

    return projectData ? <ProjectPlain projectData={projectData} /> : <div>Loading...</div>;
}
