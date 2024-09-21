import ProjectPlain from "$components/ProjectPage/ProjectPlain/ProjectPlain";
import { useEffect, useState } from "react";
import { BrandingQuery } from "tina/__generated__/types";
import client from "tina/__generated__/client";
import * as P from "./Branding2.parts";

export default function Branding2() {
    const [projectData, setProjectData] = useState<BrandingQuery["branding"] | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            const myPost = await client.queries.branding({
                relativePath: "uken.md",
            });
            setProjectData(myPost.data.branding);
        };

        fetchData();
    }, []);

    return <P.Wrapper>{projectData ? <ProjectPlain projectData={projectData} /> : <div>Loading...</div>}</P.Wrapper>;
}
