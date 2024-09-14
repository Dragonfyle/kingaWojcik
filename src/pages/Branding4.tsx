import ProjectPlain from "$components/ProjectPage/ProjectPlain/ProjectPlain";
import { useEffect, useState } from "react";
import client from "tina/__generated__/client";
import { BrandingQuery } from "tina/__generated__/types";

export default function Branding4() {
    const [projectData, setProjectData] = useState<BrandingQuery["branding"] | null>(null);

    async function fetchData() {
        const myPost = await client.queries.branding({
            relativePath: "renault.md",
        });

        return myPost;
    }

    useEffect(() => {
        fetchData().then((project) => setProjectData(project.data.branding));
    }, []);

    return projectData ? <ProjectPlain projectData={projectData} /> : <div>Loading...</div>;
}
