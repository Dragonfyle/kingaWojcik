import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.GITHUB_BRANCH || process.env.VERCEL_GIT_COMMIT_REF || process.env.HEAD || "dev";

export default defineConfig({
    branch,

    // Get this from tina.io
    clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
    // Get this from tina.io
    token: process.env.TINA_TOKEN,

    build: {
        outputFolder: "admin",
        publicFolder: "public",
    },
    media: {
        tina: {
            mediaRoot: "",
            publicFolder: "public",
        },
    },
    // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
    schema: {
        collections: [
            {
                name: "illustrations",
                label: "Ilustracje",
                path: "content/projects/illustrations",
                fields: [
                    {
                        type: "string",
                        name: "title",
                        label: "Title",
                        isTitle: true,
                        required: true,
                    },
                    {
                        type: "string",
                        name: "intro",
                        label: "Intro",
                    },
                    {
                        type: "object",
                        name: "projectSections",
                        label: "Sekcje",
                        list: true,
                        templates: [
                            {
                                name: "text",
                                label: "Tekst",
                                fields: [
                                    {
                                        type: "string",
                                        name: "header",
                                        label: "Nagłówek",
                                    },
                                    {
                                        type: "rich-text",
                                        name: "description",
                                        label: "Opis",
                                        required: true,
                                    },
                                ],
                            },
                            {
                                name: "image",
                                label: "Grafika",
                                fields: [
                                    {
                                        type: "string",
                                        name: "descriptionPosition",
                                        label: "Położenie opisu",
                                        options: ["top", "bottom"],
                                        required: true,
                                    },
                                    {
                                        type: "string",
                                        name: "header",
                                        label: "Nagłówek",
                                    },
                                    {
                                        type: "rich-text",
                                        name: "optionalDescription",
                                        label: "Opis",
                                    },
                                    {
                                        type: "image",
                                        name: "image",
                                        label: "Grafika",
                                        required: true,
                                    },
                                ],
                            },
                            {
                                name: "video",
                                label: "Video",
                                fields: [
                                    {
                                        type: "string",
                                        name: "descriptionPosition",
                                        label: "Położenie opisu",
                                        options: ["top", "bottom"],
                                        required: true,
                                    },
                                    {
                                        type: "string",
                                        name: "header",
                                        label: "Nagłówek",
                                    },
                                    {
                                        type: "rich-text",
                                        name: "description",
                                        label: "Opis",
                                        required: true,
                                    },
                                    {
                                        type: "image",
                                        name: "video",
                                        label: "Video",
                                    },
                                ],
                            },
                            {
                                name: "textText",
                                label: "Tekst - tekst",
                                fields: [
                                    {
                                        type: "string",
                                        name: "leftColumnWidth",
                                        label: "Szerokość lewej kolumny",
                                        options: ["30", "40", "50", "60", "70"],
                                        required: true,
                                    },
                                    {
                                        type: "string",
                                        name: "headerLeft",
                                        label: "Nagłówek lewy",
                                    },
                                    {
                                        type: "string",
                                        name: "headerRight",
                                        label: "Nagłówek prawy",
                                    },
                                    {
                                        type: "rich-text",
                                        name: "descriptionLeft",
                                        label: "Opis lewy",
                                        required: true,
                                    },
                                    {
                                        type: "rich-text",
                                        name: "descriptionRight",
                                        label: "Opis prawy",
                                        required: true,
                                    },
                                ],
                            },
                            {
                                name: "imageImage",
                                label: "Grafika - grafika",
                                fields: [
                                    {
                                        type: "string",
                                        name: "leftColumnWidth",
                                        label: "Szerokość lewej kolumny",
                                        options: ["30", "40", "50", "60", "70"],
                                        required: true,
                                    },
                                    {
                                        type: "string",
                                        name: "descriptionPosition",
                                        label: "Położenie opisu",
                                        options: ["top", "bottom"],
                                        required: true,
                                    },
                                    {
                                        type: "string",
                                        name: "headerLeft",
                                        label: "Nagłówek lewy",
                                    },
                                    {
                                        type: "string",
                                        name: "headerRight",
                                        label: "Nagłówek prawy",
                                    },
                                    {
                                        type: "rich-text",
                                        name: "optionalDescriptionLeft",
                                        label: "Opis lewy",
                                    },
                                    {
                                        type: "rich-text",
                                        name: "optionalDescriptionRight",
                                        label: "Opis prawy",
                                    },
                                    {
                                        type: "image",
                                        name: "imageLeft",
                                        label: "Grafika lewa",
                                        required: true,
                                    },
                                    {
                                        type: "image",
                                        name: "imageRight",
                                        label: "Grafika prawa",
                                        required: true,
                                    },
                                ],
                            },
                            {
                                name: "textImage",
                                label: "Tekst - grafika",
                                fields: [
                                    {
                                        type: "string",
                                        name: "leftColumnWidth",
                                        label: "Szerokość lewej kolumny",
                                        options: ["30", "40", "50", "60", "70"],
                                        required: true,
                                    },
                                    {
                                        type: "string",
                                        name: "header",
                                        label: "Nagłówek",
                                    },
                                    {
                                        type: "rich-text",
                                        name: "description",
                                        label: "Opis",
                                        required: true,
                                    },
                                    {
                                        type: "image",
                                        name: "image",
                                        label: "Grafika",
                                        required: true,
                                    },
                                ],
                            },
                            {
                                name: "imageText",
                                label: "Grafika - tekst",
                                fields: [
                                    {
                                        type: "string",
                                        name: "leftColumnWidth",
                                        label: "Szerokość lewej kolumny",
                                        options: ["30", "40", "50", "60", "70"],
                                        required: true,
                                    },
                                    {
                                        type: "string",
                                        name: "header",
                                        label: "Nagłówek",
                                    },
                                    {
                                        type: "rich-text",
                                        name: "description",
                                        label: "Opis",
                                        required: true,
                                    },
                                    {
                                        type: "image",
                                        name: "image",
                                        label: "Grafika",
                                        required: true,
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
            {
                name: "brandingProjects",
                label: "Projekty brandingowe",
                path: "content/projects/branding",
                fields: [
                    {
                        type: "string",
                        name: "title",
                        label: "Title",
                        isTitle: true,
                        required: true,
                    },
                ],
            },
        ],
    },
});
