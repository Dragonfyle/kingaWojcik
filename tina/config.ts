import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.VERCEL_GIT_COMMIT_REF || "dev";

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
                name: "email",
                label: "Email",
                path: "content/email",
                fields: [
                    {
                        type: "string",
                        name: "email",
                        label: "Email",
                        required: true,
                    },
                ],
            },
            {
                name: "navigation",
                label: "Nawigacja",
                path: "content/navigation",
                fields: [
                    {
                        type: "string",
                        name: "label",
                        label: "Label",
                        required: true,
                    },
                    {
                        type: "string",
                        name: "url",
                        label: "URL",
                        required: true,
                    },
                ],
            },
            {
                name: "about",
                label: "O mnie - opis",
                path: "content/aboutauthor",
                format: "md",
                templates: [
                    {
                        name: "aboutAuthor",
                        label: "O autorze",
                        fields: [
                            {
                                type: "string",
                                name: "header",
                                label: "Nagłówek",
                                required: true,
                            },
                            {
                                type: "image",
                                name: "photo",
                                label: "Zdjęcie",
                                required: true,
                            },
                            {
                                type: "number",
                                name: "photoWidth",
                                label: "Szerokość zdjęcia w px",
                                required: true,
                            },
                            {
                                type: "number",
                                name: "photoHeight",
                                label: "Wysokość zdjęcia w px",
                                required: true,
                            },
                            {
                                type: "rich-text",
                                isBody: true,
                                name: "description",
                                label: "Opis",
                                required: true,
                            },
                        ],
                    },
                ],
            },
            {
                name: "aboutGalleryContent",
                label: "O mnie - taby",
                path: "content/aboutgallery",
                format: "md",
                fields: [
                    {
                        type: "string",
                        name: "tabName",
                        label: "Nazwa tabu",
                        required: true,
                    },
                    {
                        type: "string",
                        name: "header",
                        label: "Nagłówek",
                        required: true,
                    },
                    {
                        type: "object",
                        name: "tabItems",
                        label: "Wpis",
                        list: true,
                        required: true,
                        fields: [
                            {
                                type: "string",
                                name: "title1",
                                label: "Tytuł 1",
                                required: true,
                            },
                            {
                                type: "string",
                                name: "title2",
                                label: "Tytuł 2",
                                required: true,
                            },
                            {
                                type: "rich-text",
                                name: "description1",
                                label: "Opis 1",
                                isBody: true,
                                required: true,
                            },
                            {
                                type: "rich-text",
                                name: "description2",
                                label: "Opis 2",
                                isBody: true,
                                required: true,
                            },
                            {
                                type: "rich-text",
                                name: "description3",
                                label: "Opis 3",
                                isBody: true,
                            },
                        ],
                    },
                ],
            },
            {
                name: "illustrations",
                label: "Ilustracje",
                path: "content/projects/illustrations",
                format: "md",
                fields: [
                    {
                        type: "string",
                        name: "title",
                        label: "Title",
                    },
                    {
                        type: "rich-text",
                        name: "intro",
                        label: "Intro",
                        isBody: true,
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
                                    {
                                        type: "number",
                                        name: "imageWidth",
                                        label: "Szerokość grafiki w px",
                                        required: true,
                                    },
                                    {
                                        type: "number",
                                        name: "imageHeight",
                                        label: "Wysokość grafiki w px",
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
                                        name: "optionalDescription",
                                        label: "Opis",
                                    },
                                    {
                                        type: "string",
                                        name: "videoUrl",
                                        label: "URL",
                                    },
                                    {
                                        type: "string",
                                        name: "videoId",
                                        label: "ID filmu z yt",
                                    },
                                    {
                                        type: "image",
                                        name: "posterImage",
                                        label: "Miniaturka",
                                    },
                                    {
                                        type: "number",
                                        name: "imageWidth",
                                        label: "Szerokość grafiki w px",
                                        required: true,
                                    },
                                    {
                                        type: "number",
                                        name: "imageHeight",
                                        label: "Wysokość grafiki w px",
                                        required: true,
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
                                    {
                                        type: "number",
                                        name: "imageWidth",
                                        label: "Szerokość grafik w px",
                                        required: true,
                                    },
                                    {
                                        type: "number",
                                        name: "imageHeight",
                                        label: "Wysokość grafik w px",
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
                                    {
                                        type: "number",
                                        name: "imageWidth",
                                        label: "Szerokość grafiki w px",
                                        required: true,
                                    },
                                    {
                                        type: "number",
                                        name: "imageHeight",
                                        label: "Wysokość grafiki w w px px",
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
                                    {
                                        type: "number",
                                        name: "imageWidth",
                                        label: "Szerokość grafiki w px",
                                        required: true,
                                    },
                                    {
                                        type: "number",
                                        name: "imageHeight",
                                        label: "Wysokość grafiki w w px px",
                                        required: true,
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
            {
                name: "branding",
                label: "Projekty brandingowe",
                path: "content/projects/branding",
                format: "md",
                fields: [
                    {
                        type: "string",
                        name: "title",
                        label: "Title",
                    },
                    {
                        type: "rich-text",
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
                                    {
                                        type: "number",
                                        name: "imageWidth",
                                        label: "Szerokość grafiki w px",
                                        required: true,
                                    },
                                    {
                                        type: "number",
                                        name: "imageHeight",
                                        label: "Wysokość grafiki w w px px",
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
                                        name: "optionalDescription",
                                        label: "Opis",
                                    },
                                    {
                                        type: "string",
                                        name: "videoUrl",
                                        label: "URL lokalny",
                                    },
                                    {
                                        type: "string",
                                        name: "videoId",
                                        label: "ID filmu",
                                    },
                                    {
                                        type: "image",
                                        name: "posterImage",
                                        label: "Miniaturka",
                                    },
                                    {
                                        type: "number",
                                        name: "imageWidth",
                                        label: "Szerokość grafiki w px",
                                        required: true,
                                    },
                                    {
                                        type: "number",
                                        name: "imageHeight",
                                        label: "Wysokość grafiki w w px px",
                                        required: true,
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
                                    {
                                        type: "number",
                                        name: "imageWidth",
                                        label: "Szerokość grafik w px",
                                        required: true,
                                    },
                                    {
                                        type: "number",
                                        name: "imageHeight",
                                        label: "Wysokość grafik w px",
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
                                    {
                                        type: "number",
                                        name: "imageWidth",
                                        label: "Szerokość grafiki w px",
                                        required: true,
                                    },
                                    {
                                        type: "number",
                                        name: "imageHeight",
                                        label: "Wysokość grafiki w px",
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
                                        name: "image",
                                        label: "Grafika",
                                        required: true,
                                    },
                                    {
                                        type: "number",
                                        name: "imageWidth",
                                        label: "Szerokość grafiki w px",
                                        required: true,
                                    },
                                    {
                                        type: "number",
                                        name: "imageHeight",
                                        label: "Wysokość grafiki w px",
                                        required: true,
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
            {
                name: "illustrationsThumbnails",
                label: "Miniaturki ilustracji",
                path: "content/thumbnails/illustrations",
                format: "md",
                fields: [
                    {
                        type: "image",
                        name: "thumbnail",
                        label: "Miniaturka",
                        required: true,
                    },
                    {
                        type: "string",
                        name: "title",
                        label: "Tytuł",
                        required: true,
                    },
                    {
                        type: "rich-text",
                        name: "description",
                        label: "Opis",
                        isBody: true,
                        required: true,
                    },
                    {
                        type: "string",
                        name: "url",
                        label: "URL",
                        required: true,
                    },
                ],
            },
            {
                name: "brandingThumbnails",
                label: "Miniaturki brandingowe",
                path: "content/thumbnails/branding",
                format: "md",
                fields: [
                    {
                        type: "image",
                        name: "thumbnail",
                        label: "Miniaturka",
                        required: true,
                    },
                    {
                        type: "string",
                        name: "title",
                        label: "Tytuł",
                        required: true,
                    },
                    {
                        type: "rich-text",
                        name: "description",
                        label: "Opis",
                        isBody: true,
                        required: true,
                    },
                    {
                        type: "string",
                        name: "url",
                        label: "URL",
                        required: true,
                    },
                ],
            },
            {
                name: "articlesThumbnails",
                label: "Miniaturki artykułów",
                path: "content/thumbnails/articles",
                format: "md",
                fields: [
                    {
                        type: "image",
                        name: "thumbnail",
                        label: "Miniaturka",
                        required: true,
                    },
                    {
                        type: "string",
                        name: "title",
                        label: "Tytuł",
                        required: true,
                    },
                    {
                        type: "rich-text",
                        name: "description",
                        label: "Opis",
                        isBody: true,
                        required: true,
                    },
                    {
                        type: "string",
                        name: "url",
                        label: "URL",
                        required: true,
                    },
                ],
            },
            {
                name: "sliderIntros",
                label: "Intra sliderów",
                path: "content/sliderIntros",
                format: "md",
                fields: [
                    {
                        type: "string",
                        name: "title",
                        label: "Tytuł",
                        required: true,
                    },
                    {
                        type: "rich-text",
                        name: "description",
                        label: "Opis",
                        isBody: true,
                        required: true,
                    },
                ],
            },
        ],
    },
});
