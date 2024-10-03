import { client } from "tina/__generated__/client";
import ProjectPage from "$components/ProjectPage/ProjectPage";

export default async function Branding3() {
    async function fetchData() {
        const myPost = await client.queries.branding({
            relativePath: "uken.md",
        });

        return myPost;
    }
    const projectData = (await fetchData()).data.branding;

    return (
        <div className="text-children-white bg-uken">
            <ProjectPage projectData={projectData} />
        </div>
    );
}
