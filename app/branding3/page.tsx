// import { useEffect, useState } from "react";
import { client } from "tina/__generated__/client";
// import { IllustrationsQuery } from "tina/__generated__/types";
import ProjectPlain from "$components/ProjectPage/ProjectPlain";

export default async function Branding3() {
    // const [projectData, setProjectData] = useState<IllustrationsQuery["illustrations"] | null>(null);

    async function fetchData() {
        const myPost = await client.queries.branding({
            relativePath: "uken.md",
        });

        return myPost;
    }

    // useEffect(() => {
    const projectData = (await fetchData()).data.branding;
    // fetchData().then((project) => setProjectData(project.data.illustrations));
    // }, []);

    return (
        <div className="bg-uken [&_*]:text-white-2">
            <ProjectPlain projectData={projectData} />
        </div>
    );
}
