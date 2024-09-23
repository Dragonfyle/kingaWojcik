import { client } from "tina/__generated__/client";
import ProjectPlain from "$components/ProjectPage/ProjectPlain";

export default async function Branding3() {
    async function fetchData() {
        const myPost = await client.queries.branding({
            relativePath: "uken.md",
        });

        return myPost;
    }
    const projectData = (await fetchData()).data.branding;

    return (
        <div className="bg-uken [&_*]:text-white-2">
            <ProjectPlain projectData={projectData} />
        </div>
    );
}
