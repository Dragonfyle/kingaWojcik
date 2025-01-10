import { defineConfig } from "tinacms";
import { getItemProps } from "./utils/config.utils";

const v = {
    labels: {
        LEFT_IMAGE: "Grafika lewa",
        RIGHT_IMAGE: "Grafika prawa",
        IMAGE_WIDTH: "Szerokość grafiki w px",
        IMAGE_HEIGHT: "Wysokość grafiki w px",
        IMAGE_WIDTH_RIGHT: "Szerokość grafiki w px prawy",
        IMAGE_WIDTH_LEFT: "Szerokość grafiki w px lewy",
        IMAGE_HEIGHT_RIGHT: "Wysokość grafiki w px prawy",
        IMAGE_HEIGHT_LEFT: "Wysokość grafiki w px lewy",
        DESCRIPTION_POSITION: "Położenie opisu",
        LEFT_COLUMN_WIDTH: "Szerokość lewej kolumny",
        HEADER: "Nagłówek",
        HEADER_LEFT: "Nagłówek lewy",
        HEADER_RIGHT: "Nagłówek prawy",
        DESCRIPTION: "Opis",
        DESCRIPTION_LEFT: "Opis lewy",
        DESCRIPTION_RIGHT: "Opis prawy",
        TITLE: "Tytuł",
        IMAGE: "Grafika",
        IMAGE_LEFT: "Grafika lewa",
        IMAGE_RIGHT: "Grafika prawa",
        TEXT: "Tekst",
        TEXT_IMAGE: "Tekst - grafika",
        VIDEO_VIDEO: "Video - video",
        TEXT_TEXT: "Tekst - tekst",
        IMAGE_TEXT: "Grafika - tekst",
        IMAGE_IMAGE: "Grafika - grafika",
        VIDEO_PATH: "URL",
        VIDEO_PATH_LEFT: "URL lewy",
        VIDEO_PATH_RIGHT: "URL prawy",
        EMAIL: "Email",
        LABEL: "Label",
        NAVIGATION: "Nawigacja",
        ABOUT: "O mnie - opis",
        ABOUT_AUTHOR: "O autorze",
        ABOUT_GALLERY: "O mnie - taby",
        TAB_NAME: "Nazwa tabu",
        TAB_ITEM: "Wpis",
        INTRO: "Intro",
        PROJECT_SECTIONS: "Sekcje",
        VIDEO: "Video",
        YT_ID: "ID filmu z yt z youtube",
        YT_ID_RIGHT: "ID filmu z yt z youtube prawy",
        YT_ID_LEFT: "ID filmu z yt z youtube lewy",
        LOCAL_VIDEO: "Lokalny film",
        LOCAL_VIDEO_LEFT: "Lokalny film lewy",
        LOCAL_VIDEO_RIGHT: "Lokalny film prawy",
        GIF: "GIF",
        GIF_LEFT: "GIF lewy",
        GIF_RIGHT: "GIF prawy",
        POSTER_IMAGE: "Miniaturka",
        POSTER_IMAGE_LEFT: "Miniaturka lewa",
        POSTER_IMAGE_RIGHT: "Miniaturka prawa",
        URL: "URL",
        THUMBNAIL: "Miniaturka",
    },
    descriptions: {
        TITLE: "Tytuł wpisu w CMSie",
    },
} as const;

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
                label: v.labels.EMAIL,
                path: "content/email",
                fields: [
                    {
                        type: "string",
                        name: "email",
                        label: v.labels.EMAIL,
                        required: true,
                    },
                ],
            },
            {
                name: "navigation",
                label: v.labels.NAVIGATION,
                path: "content/navigation",
                fields: [
                    {
                        type: "string",
                        name: "label",
                        label: v.labels.LABEL,
                        required: true,
                    },
                    {
                        type: "string",
                        name: "url",
                        label: v.labels.VIDEO_PATH,
                        required: true,
                    },
                ],
            },
            {
                name: "about",
                label: v.labels.ABOUT,
                path: "content/aboutauthor",
                format: "md",
                templates: [
                    {
                        name: "aboutAuthor",
                        label: v.labels.ABOUT_AUTHOR,
                        fields: [
                            {
                                type: "string",
                                name: "header",
                                label: v.labels.HEADER,
                                required: true,
                            },
                            {
                                type: "image",
                                name: "photo",
                                label: v.labels.IMAGE,
                                required: true,
                            },
                            {
                                type: "number",
                                name: "photoWidth",
                                label: v.labels.IMAGE_WIDTH,
                                required: true,
                            },
                            {
                                type: "number",
                                name: "photoHeight",
                                label: v.labels.IMAGE_HEIGHT,
                                required: true,
                            },
                            {
                                type: "rich-text",
                                isBody: true,
                                name: "description",
                                label: v.labels.DESCRIPTION,
                                required: true,
                            },
                        ],
                    },
                ],
            },
            {
                name: "aboutGalleryContent",
                label: v.labels.ABOUT_GALLERY,
                path: "content/aboutgallery",
                format: "md",
                fields: [
                    {
                        type: "string",
                        name: "tabName",
                        label: v.labels.TAB_NAME,
                        required: true,
                    },
                    {
                        type: "string",
                        name: "header",
                        label: v.labels.HEADER,
                        required: true,
                    },
                    {
                        type: "object",
                        name: "tabItems",
                        label: v.labels.TAB_ITEM,
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
                        label: v.labels.TITLE,
                    },
                    {
                        type: "rich-text",
                        name: "intro",
                        label: v.labels.INTRO,
                        isBody: true,
                    },
                    {
                        type: "object",
                        name: "projectSections",
                        label: v.labels.PROJECT_SECTIONS,
                        list: true,
                        templates: [
                            {
                                name: "text",
                                label: v.labels.TEXT,
                                ui: {
                                    itemProps: (item) => getItemProps(item, "tekst"),
                                },
                                fields: [
                                    {
                                        type: "string",
                                        name: "title",
                                        label: v.labels.TITLE,
                                        description: v.descriptions.TITLE,
                                        required: true,
                                    },
                                    {
                                        type: "string",
                                        name: "header",
                                        label: v.labels.HEADER,
                                    },
                                    {
                                        type: "rich-text",
                                        name: "description",
                                        label: v.labels.DESCRIPTION,
                                        required: true,
                                    },
                                ],
                            },
                            {
                                name: "image",
                                label: v.labels.IMAGE,
                                ui: {
                                    itemProps: (item) => getItemProps(item, "grafika"),
                                },
                                fields: [
                                    {
                                        type: "string",
                                        name: "title",
                                        label: v.labels.TITLE,
                                        description: v.descriptions.TITLE,
                                        required: true,
                                    },
                                    {
                                        type: "string",
                                        name: "descriptionPosition",
                                        label: v.labels.DESCRIPTION_POSITION,
                                        options: ["top", "bottom"],
                                        required: true,
                                    },
                                    {
                                        type: "string",
                                        name: "header",
                                        label: v.labels.HEADER,
                                    },
                                    {
                                        type: "rich-text",
                                        name: "optionalDescription",
                                        label: v.labels.DESCRIPTION,
                                    },
                                    {
                                        type: "image",
                                        name: "image",
                                        label: v.labels.IMAGE,
                                        required: true,
                                    },
                                    {
                                        type: "number",
                                        name: "imageWidth",
                                        label: v.labels.IMAGE_WIDTH,
                                        required: true,
                                    },
                                    {
                                        type: "number",
                                        name: "imageHeight",
                                        label: v.labels.IMAGE_HEIGHT,
                                        required: true,
                                    },
                                ],
                            },
                            {
                                name: "video",
                                label: v.labels.VIDEO,
                                ui: {
                                    itemProps: (item) => getItemProps(item, "wideo"),
                                },
                                fields: [
                                    {
                                        type: "string",
                                        name: "title",
                                        label: v.labels.TITLE,
                                        description: v.descriptions.TITLE,
                                        required: true,
                                    },
                                    {
                                        type: "string",
                                        name: "descriptionPosition",
                                        label: v.labels.DESCRIPTION_POSITION,
                                        options: ["top", "bottom"],
                                        required: true,
                                    },
                                    {
                                        type: "string",
                                        name: "header",
                                        label: v.labels.HEADER,
                                    },
                                    {
                                        type: "rich-text",
                                        name: "optionalDescription",
                                        label: v.labels.DESCRIPTION,
                                    },
                                    {
                                        type: "string",
                                        name: "videoUrl",
                                        label: v.labels.VIDEO_PATH,
                                    },
                                    {
                                        type: "string",
                                        name: "videoId",
                                        label: v.labels.YT_ID,
                                    },
                                    {
                                        type: "boolean",
                                        name: "isLocal",
                                        label: v.labels.LOCAL_VIDEO,
                                    },
                                    {
                                        type: "boolean",
                                        name: "isGif",
                                        label: v.labels.GIF,
                                        ui: {
                                            description: "Czy video ma udawać GIF'a. Opcja tylko dla lokalnych filmów.",
                                        },
                                    },
                                    {
                                        type: "image",
                                        name: "posterImage",
                                        label: v.labels.POSTER_IMAGE,
                                    },
                                    {
                                        type: "number",
                                        name: "imageWidth",
                                        label: v.labels.IMAGE_WIDTH,
                                        required: true,
                                    },
                                    {
                                        type: "number",
                                        name: "imageHeight",
                                        label: v.labels.IMAGE_HEIGHT,
                                        required: true,
                                    },
                                ],
                            },
                            {
                                name: "videoVideo",
                                label: "Video - video",
                                ui: {
                                    itemProps: (item) => getItemProps(item, "wideo - wideo"),
                                },
                                fields: [
                                    {
                                        type: "string",
                                        name: "title",
                                        label: v.labels.TITLE,
                                        description: v.descriptions.TITLE,
                                        required: true,
                                    },
                                    {
                                        type: "string",
                                        name: "headerLeft",
                                        label: v.labels.HEADER_LEFT,
                                    },
                                    {
                                        type: "string",
                                        name: "headerRight",
                                        label: v.labels.HEADER_RIGHT,
                                    },
                                    {
                                        type: "rich-text",
                                        name: "optionalDescriptionLeft",
                                        label: v.labels.DESCRIPTION_LEFT,
                                    },
                                    {
                                        type: "rich-text",
                                        name: "optionalDescriptionRight",
                                        label: v.labels.DESCRIPTION_RIGHT,
                                    },
                                    {
                                        type: "string",
                                        name: "videoUrlLeft",
                                        label: v.labels.VIDEO_PATH_LEFT,
                                    },
                                    {
                                        type: "string",
                                        name: "videoIdLeft",
                                        label: v.labels.YT_ID_LEFT,
                                    },
                                    {
                                        type: "boolean",
                                        name: "isLocalLeft",
                                        label: v.labels.LOCAL_VIDEO_LEFT,
                                    },
                                    {
                                        type: "boolean",
                                        name: "isGifLeft",
                                        label: v.labels.GIF_LEFT,
                                        ui: {
                                            description: "Czy video ma udawać GIF'a. Opcja tylko dla lokalnych filmów.",
                                        },
                                    },
                                    {
                                        type: "string",
                                        name: "videoUrlRight",
                                        label: v.labels.VIDEO_PATH_RIGHT,
                                    },
                                    {
                                        type: "string",
                                        name: "videoIdRight",
                                        label: v.labels.YT_ID_RIGHT,
                                    },
                                    {
                                        type: "boolean",
                                        name: "isLocalRight",
                                        label: v.labels.LOCAL_VIDEO_RIGHT,
                                    },
                                    {
                                        type: "boolean",
                                        name: "isGifRight",
                                        label: v.labels.GIF_RIGHT,
                                        ui: {
                                            description: "Czy video ma udawać GIF'a. Opcja tylko dla lokalnych filmów.",
                                        },
                                    },
                                    {
                                        type: "image",
                                        name: "posterImageLeft",
                                        label: v.labels.POSTER_IMAGE_LEFT,
                                    },
                                    {
                                        type: "image",
                                        name: "posterImageRight",
                                        label: v.labels.POSTER_IMAGE_RIGHT,
                                    },
                                    {
                                        type: "number",
                                        name: "imageWidthLeft",
                                        label: v.labels.IMAGE_WIDTH_LEFT,
                                        required: true,
                                    },
                                    {
                                        type: "number",
                                        name: "imageWidthRight",
                                        label: v.labels.IMAGE_WIDTH_RIGHT,
                                        required: true,
                                    },
                                    {
                                        type: "number",
                                        name: "imageHeightLeft",
                                        label: v.labels.IMAGE_HEIGHT_LEFT,
                                        required: true,
                                    },
                                    {
                                        type: "number",
                                        name: "imageHeightRight",
                                        label: v.labels.IMAGE_HEIGHT_RIGHT,
                                        required: true,
                                    },
                                ],
                            },
                            {
                                name: "textText",
                                label: "Tekst - tekst",
                                ui: {
                                    itemProps: (item) => getItemProps(item, "tekst - tekst"),
                                },
                                fields: [
                                    {
                                        type: "string",
                                        name: "title",
                                        label: "Tytuł",
                                        description: v.descriptions.TITLE,
                                        required: true,
                                    },
                                    {
                                        type: "string",
                                        name: "leftColumnWidth",
                                        label: v.labels.LEFT_COLUMN_WIDTH,
                                        options: ["30", "40", "50", "60", "70"],
                                        required: true,
                                    },
                                    {
                                        type: "string",
                                        name: "headerLeft",
                                        label: v.labels.HEADER_LEFT,
                                    },
                                    {
                                        type: "string",
                                        name: "headerRight",
                                        label: v.labels.HEADER_RIGHT,
                                    },
                                    {
                                        type: "rich-text",
                                        name: "descriptionLeft",
                                        label: v.labels.DESCRIPTION_LEFT,
                                        required: true,
                                    },
                                    {
                                        type: "rich-text",
                                        name: "descriptionRight",
                                        label: v.labels.DESCRIPTION_RIGHT,
                                        required: true,
                                    },
                                ],
                            },
                            {
                                name: "imageImage",
                                label: "Grafika - grafika",
                                ui: {
                                    itemProps: (item) => getItemProps(item, "grafika - grafika"),
                                },
                                fields: [
                                    {
                                        type: "string",
                                        name: "title",
                                        label: "Tytuł",
                                        description: v.descriptions.TITLE,
                                        required: true,
                                    },
                                    {
                                        type: "string",
                                        name: "leftColumnWidth",
                                        label: v.labels.LEFT_COLUMN_WIDTH,
                                        options: ["30", "40", "50", "60", "70"],
                                        required: true,
                                    },
                                    {
                                        type: "string",
                                        name: "descriptionPosition",
                                        label: v.labels.DESCRIPTION_POSITION,
                                        options: ["top", "bottom"],
                                        required: true,
                                    },
                                    {
                                        type: "string",
                                        name: "headerLeft",
                                        label: v.labels.HEADER_LEFT,
                                    },
                                    {
                                        type: "string",
                                        name: "headerRight",
                                        label: v.labels.HEADER_RIGHT,
                                    },
                                    {
                                        type: "rich-text",
                                        name: "optionalDescriptionLeft",
                                        label: v.labels.DESCRIPTION_LEFT,
                                    },
                                    {
                                        type: "rich-text",
                                        name: "optionalDescriptionRight",
                                        label: v.labels.DESCRIPTION_RIGHT,
                                    },
                                    {
                                        type: "image",
                                        name: "imageLeft",
                                        label: v.labels.IMAGE_LEFT,
                                        required: true,
                                    },
                                    {
                                        type: "image",
                                        name: "imageRight",
                                        label: v.labels.IMAGE_RIGHT,
                                        required: true,
                                    },
                                    {
                                        type: "number",
                                        name: "imageWidth",
                                        label: v.labels.IMAGE_WIDTH,
                                        required: true,
                                    },
                                    {
                                        type: "number",
                                        name: "imageHeight",
                                        label: v.labels.IMAGE_HEIGHT,
                                        required: true,
                                    },
                                ],
                            },
                            {
                                name: "textImage",
                                label: "Tekst - grafika",
                                ui: {
                                    itemProps: (item) => getItemProps(item, "tekst - grafika"),
                                },
                                fields: [
                                    {
                                        type: "string",
                                        name: "title",
                                        label: "Tytuł",
                                        description: v.descriptions.TITLE,
                                        required: true,
                                    },
                                    {
                                        type: "string",
                                        name: "leftColumnWidth",
                                        label: v.labels.LEFT_COLUMN_WIDTH,
                                        options: ["30", "40", "50", "60", "70"],
                                        required: true,
                                    },
                                    {
                                        type: "string",
                                        name: "header",
                                        label: v.labels.HEADER,
                                    },
                                    {
                                        type: "rich-text",
                                        name: "description",
                                        label: v.labels.DESCRIPTION,
                                        required: true,
                                    },
                                    {
                                        type: "image",
                                        name: "image",
                                        label: v.labels.IMAGE,
                                        required: true,
                                    },
                                    {
                                        type: "number",
                                        name: "imageWidth",
                                        label: v.labels.IMAGE_WIDTH,
                                        required: true,
                                    },
                                    {
                                        type: "number",
                                        name: "imageHeight",
                                        label: v.labels.IMAGE_HEIGHT,
                                        required: true,
                                    },
                                ],
                            },
                            {
                                name: "imageText",
                                label: "Grafika - tekst",
                                ui: {
                                    itemProps: (item) => getItemProps(item, "grafika - tekst"),
                                },
                                fields: [
                                    {
                                        type: "string",
                                        name: "title",
                                        label: "Tytuł",
                                        description: v.descriptions.TITLE,
                                        required: true,
                                    },
                                    {
                                        type: "string",
                                        name: "leftColumnWidth",
                                        label: v.labels.LEFT_COLUMN_WIDTH,
                                        options: ["30", "40", "50", "60", "70"],
                                        required: true,
                                    },
                                    {
                                        type: "string",
                                        name: "header",
                                        label: v.labels.HEADER,
                                    },
                                    {
                                        type: "rich-text",
                                        name: "description",
                                        label: v.labels.DESCRIPTION,
                                        required: true,
                                    },
                                    {
                                        type: "image",
                                        name: "image",
                                        label: v.labels.IMAGE,
                                        required: true,
                                    },
                                    {
                                        type: "number",
                                        name: "imageWidth",
                                        label: v.labels.IMAGE_WIDTH,
                                        required: true,
                                    },
                                    {
                                        type: "number",
                                        name: "imageHeight",
                                        label: v.labels.IMAGE_HEIGHT,
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
                        label: v.labels.TITLE,
                    },
                    {
                        type: "rich-text",
                        name: "intro",
                        label: v.labels.INTRO,
                    },
                    {
                        type: "object",
                        name: "projectSections",
                        label: v.labels.PROJECT_SECTIONS,
                        list: true,
                        templates: [
                            {
                                name: "text",
                                label: v.labels.TEXT,
                                ui: {
                                    itemProps: (item) => getItemProps(item, "tekst"),
                                },
                                fields: [
                                    {
                                        type: "string",
                                        name: "title",
                                        label: v.labels.TITLE,
                                        description: v.descriptions.TITLE,
                                        required: true,
                                    },
                                    {
                                        type: "string",
                                        name: "header",
                                        label: v.labels.HEADER,
                                    },
                                    {
                                        type: "rich-text",
                                        name: "description",
                                        label: v.labels.DESCRIPTION,
                                        required: true,
                                    },
                                ],
                            },
                            {
                                name: "image",
                                label: v.labels.IMAGE,
                                ui: {
                                    itemProps: (item) => getItemProps(item, "grafika"),
                                },
                                fields: [
                                    {
                                        type: "string",
                                        name: "title",
                                        label: v.labels.TITLE,
                                        description: v.descriptions.TITLE,
                                        required: true,
                                    },
                                    {
                                        type: "string",
                                        name: "descriptionPosition",
                                        label: v.labels.DESCRIPTION_POSITION,
                                        options: ["top", "bottom"],
                                        required: true,
                                    },
                                    {
                                        type: "string",
                                        name: "header",
                                        label: v.labels.HEADER,
                                    },
                                    {
                                        type: "rich-text",
                                        name: "optionalDescription",
                                        label: v.labels.DESCRIPTION,
                                    },
                                    {
                                        type: "image",
                                        name: "image",
                                        label: v.labels.IMAGE,
                                        required: true,
                                    },
                                    {
                                        type: "number",
                                        name: "imageWidth",
                                        label: v.labels.IMAGE_WIDTH,
                                        required: true,
                                    },
                                    {
                                        type: "number",
                                        name: "imageHeight",
                                        label: v.labels.IMAGE_HEIGHT,
                                        required: true,
                                    },
                                ],
                            },
                            {
                                name: "video",
                                label: v.labels.VIDEO,
                                ui: {
                                    itemProps: (item) => getItemProps(item, "wideo"),
                                },
                                fields: [
                                    {
                                        type: "string",
                                        name: "title",
                                        label: v.labels.TITLE,
                                        description: v.descriptions.TITLE,
                                        required: true,
                                    },
                                    {
                                        type: "string",
                                        name: "descriptionPosition",
                                        label: v.labels.DESCRIPTION_POSITION,
                                        options: ["top", "bottom"],
                                        required: true,
                                    },
                                    {
                                        type: "string",
                                        name: "header",
                                        label: v.labels.HEADER,
                                    },
                                    {
                                        type: "rich-text",
                                        name: "optionalDescription",
                                        label: v.labels.DESCRIPTION,
                                    },
                                    {
                                        type: "string",
                                        name: "videoUrl",
                                        label: v.labels.VIDEO_PATH,
                                    },
                                    {
                                        type: "string",
                                        name: "videoId",
                                        label: v.labels.YT_ID,
                                    },
                                    {
                                        type: "boolean",
                                        name: "isLocal",
                                        label: v.labels.LOCAL_VIDEO,
                                    },
                                    {
                                        type: "boolean",
                                        name: "isGif",
                                        label: v.labels.GIF,
                                        ui: {
                                            description: "Czy video ma udawać GIF'a. Opcja tylko dla lokalnych filmów.",
                                        },
                                    },
                                    {
                                        type: "image",
                                        name: "posterImage",
                                        label: v.labels.POSTER_IMAGE,
                                    },
                                    {
                                        type: "number",
                                        name: "imageWidth",
                                        label: v.labels.IMAGE_WIDTH,
                                        required: true,
                                    },
                                    {
                                        type: "number",
                                        name: "imageHeight",
                                        label: v.labels.IMAGE_HEIGHT,
                                        required: true,
                                    },
                                ],
                            },
                            {
                                name: "videoVideo",
                                label: v.labels.VIDEO_VIDEO,
                                ui: {
                                    itemProps: (item) => getItemProps(item, "wideo - wideo"),
                                },
                                fields: [
                                    {
                                        type: "string",
                                        name: "title",
                                        label: v.labels.TITLE,
                                        description: v.descriptions.TITLE,
                                        required: true,
                                    },
                                    {
                                        type: "string",
                                        name: "headerLeft",
                                        label: v.labels.HEADER_LEFT,
                                    },
                                    {
                                        type: "string",
                                        name: "headerRight",
                                        label: v.labels.HEADER_RIGHT,
                                    },
                                    {
                                        type: "rich-text",
                                        name: "optionalDescriptionLeft",
                                        label: v.labels.DESCRIPTION_LEFT,
                                    },
                                    {
                                        type: "rich-text",
                                        name: "optionalDescriptionRight",
                                        label: v.labels.DESCRIPTION_RIGHT,
                                    },
                                    {
                                        type: "string",
                                        name: "videoUrlLeft",
                                        label: v.labels.VIDEO_PATH_LEFT,
                                    },
                                    {
                                        type: "string",
                                        name: "videoIdLeft",
                                        label: v.labels.YT_ID_LEFT,
                                    },
                                    {
                                        type: "boolean",
                                        name: "isLocalLeft",
                                        label: v.labels.LOCAL_VIDEO_LEFT,
                                    },
                                    {
                                        type: "boolean",
                                        name: "isGifLeft",
                                        label: v.labels.GIF_LEFT,
                                        ui: {
                                            description: "Czy video ma udawać GIF'a. Opcja tylko dla lokalnych filmów.",
                                        },
                                    },
                                    {
                                        type: "string",
                                        name: "videoUrlRight",
                                        label: v.labels.VIDEO_PATH_RIGHT,
                                    },
                                    {
                                        type: "string",
                                        name: "videoIdRight",
                                        label: v.labels.YT_ID_RIGHT,
                                    },
                                    {
                                        type: "boolean",
                                        name: "isLocalRight",
                                        label: v.labels.LOCAL_VIDEO_RIGHT,
                                    },
                                    {
                                        type: "boolean",
                                        name: "isGifRight",
                                        label: v.labels.GIF_RIGHT,
                                        ui: {
                                            description: "Czy video ma udawać GIF'a. Opcja tylko dla lokalnych filmów.",
                                        },
                                    },
                                    {
                                        type: "image",
                                        name: "posterImageLeft",
                                        label: v.labels.POSTER_IMAGE_LEFT,
                                    },
                                    {
                                        type: "image",
                                        name: "posterImageRight",
                                        label: v.labels.POSTER_IMAGE_RIGHT,
                                    },
                                    {
                                        type: "number",
                                        name: "imageWidthLeft",
                                        label: v.labels.IMAGE_WIDTH_LEFT,
                                        required: true,
                                    },
                                    {
                                        type: "number",
                                        name: "imageWidthRight",
                                        label: v.labels.IMAGE_WIDTH_RIGHT,
                                        required: true,
                                    },
                                    {
                                        type: "number",
                                        name: "imageHeightLeft",
                                        label: v.labels.IMAGE_HEIGHT_LEFT,
                                        required: true,
                                    },
                                    {
                                        type: "number",
                                        name: "imageHeightRight",
                                        label: v.labels.IMAGE_HEIGHT_RIGHT,
                                        required: true,
                                    },
                                ],
                            },
                            {
                                name: "textText",
                                label: v.labels.TEXT_TEXT,
                                ui: {
                                    itemProps: (item) => getItemProps(item, "tekst - tekst"),
                                },
                                fields: [
                                    {
                                        type: "string",
                                        name: "title",
                                        label: v.labels.TITLE,
                                        description: v.descriptions.TITLE,
                                        required: true,
                                    },
                                    {
                                        type: "string",
                                        name: "leftColumnWidth",
                                        label: v.labels.LEFT_COLUMN_WIDTH,
                                        options: ["30", "40", "50", "60", "70"],
                                        required: true,
                                    },
                                    {
                                        type: "string",
                                        name: "headerLeft",
                                        label: v.labels.HEADER_LEFT,
                                    },
                                    {
                                        type: "string",
                                        name: "headerRight",
                                        label: v.labels.HEADER_RIGHT,
                                    },
                                    {
                                        type: "rich-text",
                                        name: "descriptionLeft",
                                        label: v.labels.DESCRIPTION_LEFT,
                                        required: true,
                                    },
                                    {
                                        type: "rich-text",
                                        name: "descriptionRight",
                                        label: v.labels.DESCRIPTION_RIGHT,
                                        required: true,
                                    },
                                ],
                            },
                            {
                                name: "imageImage",
                                label: v.labels.IMAGE_IMAGE,
                                ui: {
                                    itemProps: (item) => getItemProps(item, "grafika - grafika"),
                                },
                                fields: [
                                    {
                                        type: "string",
                                        name: "title",
                                        label: v.labels.TITLE,
                                        description: v.descriptions.TITLE,
                                        required: true,
                                    },
                                    {
                                        type: "string",
                                        name: "leftColumnWidth",
                                        label: v.labels.LEFT_COLUMN_WIDTH,
                                        options: ["30", "40", "50", "60", "70"],
                                        required: true,
                                    },
                                    {
                                        type: "string",
                                        name: "descriptionPosition",
                                        label: v.labels.DESCRIPTION_POSITION,
                                        options: ["top", "bottom"],
                                        required: true,
                                    },
                                    {
                                        type: "string",
                                        name: "headerLeft",
                                        label: v.labels.HEADER_LEFT,
                                    },
                                    {
                                        type: "string",
                                        name: "headerRight",
                                        label: v.labels.HEADER_RIGHT,
                                    },
                                    {
                                        type: "rich-text",
                                        name: "optionalDescriptionLeft",
                                        label: v.labels.DESCRIPTION_LEFT,
                                    },
                                    {
                                        type: "rich-text",
                                        name: "optionalDescriptionRight",
                                        label: v.labels.DESCRIPTION_RIGHT,
                                    },
                                    {
                                        type: "image",
                                        name: "imageLeft",
                                        label: v.labels.LEFT_IMAGE,
                                        required: true,
                                    },
                                    {
                                        type: "image",
                                        name: "imageRight",
                                        label: v.labels.RIGHT_IMAGE,
                                        required: true,
                                    },
                                    {
                                        type: "number",
                                        name: "imageWidth",
                                        label: v.labels.IMAGE_WIDTH,
                                        required: true,
                                    },
                                    {
                                        type: "number",
                                        name: "imageHeight",
                                        label: v.labels.IMAGE_HEIGHT,
                                        required: true,
                                    },
                                ],
                            },
                            {
                                name: "textImage",
                                label: v.labels.TEXT_IMAGE,
                                ui: {
                                    itemProps: (item) => getItemProps(item, "tekst - grafika"),
                                },
                                fields: [
                                    {
                                        type: "string",
                                        name: "title",
                                        label: v.labels.TITLE,
                                        description: v.descriptions.TITLE,
                                        required: true,
                                    },
                                    {
                                        type: "string",
                                        name: "leftColumnWidth",
                                        label: v.labels.LEFT_COLUMN_WIDTH,
                                        options: ["30", "40", "50", "60", "70"],
                                        required: true,
                                    },
                                    {
                                        type: "string",
                                        name: "header",
                                        label: v.labels.HEADER,
                                    },
                                    {
                                        type: "rich-text",
                                        name: "description",
                                        label: v.labels.DESCRIPTION,
                                        required: true,
                                    },
                                    {
                                        type: "image",
                                        name: "image",
                                        label: v.labels.IMAGE,
                                        required: true,
                                    },
                                    {
                                        type: "number",
                                        name: "imageWidth",
                                        label: v.labels.IMAGE_WIDTH,
                                        required: true,
                                    },
                                    {
                                        type: "number",
                                        name: "imageHeight",
                                        label: v.labels.IMAGE_HEIGHT,
                                        required: true,
                                    },
                                ],
                            },
                            {
                                name: "imageText",
                                label: v.labels.IMAGE_TEXT,
                                ui: {
                                    itemProps: (item) => getItemProps(item, "grafika - tekst"),
                                },
                                fields: [
                                    {
                                        type: "string",
                                        name: "title",
                                        label: v.labels.TITLE,
                                        description: v.descriptions.TITLE,
                                        required: true,
                                    },
                                    {
                                        type: "string",
                                        name: "leftColumnWidth",
                                        label: v.labels.LEFT_COLUMN_WIDTH,
                                        options: ["30", "40", "50", "60", "70"],
                                        required: true,
                                    },
                                    {
                                        type: "string",
                                        name: "descriptionPosition",
                                        label: v.labels.DESCRIPTION_POSITION,
                                        options: ["top", "bottom"],
                                        required: true,
                                    },
                                    {
                                        type: "string",
                                        name: "header",
                                        label: v.labels.HEADER,
                                    },
                                    {
                                        type: "rich-text",
                                        name: "description",
                                        label: v.labels.DESCRIPTION,
                                        required: true,
                                    },
                                    {
                                        type: "image",
                                        name: "image",
                                        label: v.labels.IMAGE,
                                        required: true,
                                    },
                                    {
                                        type: "number",
                                        name: "imageWidth",
                                        label: v.labels.IMAGE_WIDTH,
                                        required: true,
                                    },
                                    {
                                        type: "number",
                                        name: "imageHeight",
                                        label: v.labels.IMAGE_HEIGHT,
                                        required: true,
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
			{
                name: "portraits",
                label: "Portrety",
                path: "content/projects/portraits",
                format: "md",
                fields: [
                    {
                        type: "string",
                        name: "title",
                        label: v.labels.TITLE,
                    },
                    {
                        type: "rich-text",
                        name: "intro",
                        label: v.labels.INTRO,
                        isBody: true,
                    },
                    {
                        type: "object",
                        name: "projectSections",
                        label: v.labels.PROJECT_SECTIONS,
                        list: true,
                        templates: [
                            {
                                name: "text",
                                label: v.labels.TEXT,
                                ui: {
                                    itemProps: (item) => getItemProps(item, "tekst"),
                                },
                                fields: [
                                    {
                                        type: "string",
                                        name: "title",
                                        label: v.labels.TITLE,
                                        description: v.descriptions.TITLE,
                                        required: true,
                                    },
                                    {
                                        type: "string",
                                        name: "header",
                                        label: v.labels.HEADER,
                                    },
                                    {
                                        type: "rich-text",
                                        name: "description",
                                        label: v.labels.DESCRIPTION,
                                        required: true,
                                    },
                                ],
                            },
                            {
                                name: "image",
                                label: v.labels.IMAGE,
                                ui: {
                                    itemProps: (item) => getItemProps(item, "grafika"),
                                },
                                fields: [
                                    {
                                        type: "string",
                                        name: "title",
                                        label: v.labels.TITLE,
                                        description: v.descriptions.TITLE,
                                        required: true,
                                    },
                                    {
                                        type: "string",
                                        name: "descriptionPosition",
                                        label: v.labels.DESCRIPTION_POSITION,
                                        options: ["top", "bottom"],
                                        required: true,
                                    },
                                    {
                                        type: "string",
                                        name: "header",
                                        label: v.labels.HEADER,
                                    },
                                    {
                                        type: "rich-text",
                                        name: "optionalDescription",
                                        label: v.labels.DESCRIPTION,
                                    },
                                    {
                                        type: "image",
                                        name: "image",
                                        label: v.labels.IMAGE,
                                        required: true,
                                    },
                                    {
                                        type: "number",
                                        name: "imageWidth",
                                        label: v.labels.IMAGE_WIDTH,
                                        required: true,
                                    },
                                    {
                                        type: "number",
                                        name: "imageHeight",
                                        label: v.labels.IMAGE_HEIGHT,
                                        required: true,
                                    },
                                ],
                            },
                            {
                                name: "video",
                                label: v.labels.VIDEO,
                                ui: {
                                    itemProps: (item) => getItemProps(item, "wideo"),
                                },
                                fields: [
                                    {
                                        type: "string",
                                        name: "title",
                                        label: v.labels.TITLE,
                                        description: v.descriptions.TITLE,
                                        required: true,
                                    },
                                    {
                                        type: "string",
                                        name: "descriptionPosition",
                                        label: v.labels.DESCRIPTION_POSITION,
                                        options: ["top", "bottom"],
                                        required: true,
                                    },
                                    {
                                        type: "string",
                                        name: "header",
                                        label: v.labels.HEADER,
                                    },
                                    {
                                        type: "rich-text",
                                        name: "optionalDescription",
                                        label: v.labels.DESCRIPTION,
                                    },
                                    {
                                        type: "string",
                                        name: "videoUrl",
                                        label: v.labels.VIDEO_PATH,
                                    },
                                    {
                                        type: "string",
                                        name: "videoId",
                                        label: v.labels.YT_ID,
                                    },
                                    {
                                        type: "boolean",
                                        name: "isLocal",
                                        label: v.labels.LOCAL_VIDEO,
                                    },
                                    {
                                        type: "boolean",
                                        name: "isGif",
                                        label: v.labels.GIF,
                                        ui: {
                                            description: "Czy video ma udawać GIF'a. Opcja tylko dla lokalnych filmów.",
                                        },
                                    },
                                    {
                                        type: "image",
                                        name: "posterImage",
                                        label: v.labels.POSTER_IMAGE,
                                    },
                                    {
                                        type: "number",
                                        name: "imageWidth",
                                        label: v.labels.IMAGE_WIDTH,
                                        required: true,
                                    },
                                    {
                                        type: "number",
                                        name: "imageHeight",
                                        label: v.labels.IMAGE_HEIGHT,
                                        required: true,
                                    },
                                ],
                            },
                            {
                                name: "videoVideo",
                                label: "Video - video",
                                ui: {
                                    itemProps: (item) => getItemProps(item, "wideo - wideo"),
                                },
                                fields: [
                                    {
                                        type: "string",
                                        name: "title",
                                        label: v.labels.TITLE,
                                        description: v.descriptions.TITLE,
                                        required: true,
                                    },
                                    {
                                        type: "string",
                                        name: "headerLeft",
                                        label: v.labels.HEADER_LEFT,
                                    },
                                    {
                                        type: "string",
                                        name: "headerRight",
                                        label: v.labels.HEADER_RIGHT,
                                    },
                                    {
                                        type: "rich-text",
                                        name: "optionalDescriptionLeft",
                                        label: v.labels.DESCRIPTION_LEFT,
                                    },
                                    {
                                        type: "rich-text",
                                        name: "optionalDescriptionRight",
                                        label: v.labels.DESCRIPTION_RIGHT,
                                    },
                                    {
                                        type: "string",
                                        name: "videoUrlLeft",
                                        label: v.labels.VIDEO_PATH_LEFT,
                                    },
                                    {
                                        type: "string",
                                        name: "videoIdLeft",
                                        label: v.labels.YT_ID_LEFT,
                                    },
                                    {
                                        type: "boolean",
                                        name: "isLocalLeft",
                                        label: v.labels.LOCAL_VIDEO_LEFT,
                                    },
                                    {
                                        type: "boolean",
                                        name: "isGifLeft",
                                        label: v.labels.GIF_LEFT,
                                        ui: {
                                            description: "Czy video ma udawać GIF'a. Opcja tylko dla lokalnych filmów.",
                                        },
                                    },
                                    {
                                        type: "string",
                                        name: "videoUrlRight",
                                        label: v.labels.VIDEO_PATH_RIGHT,
                                    },
                                    {
                                        type: "string",
                                        name: "videoIdRight",
                                        label: v.labels.YT_ID_RIGHT,
                                    },
                                    {
                                        type: "boolean",
                                        name: "isLocalRight",
                                        label: v.labels.LOCAL_VIDEO_RIGHT,
                                    },
                                    {
                                        type: "boolean",
                                        name: "isGifRight",
                                        label: v.labels.GIF_RIGHT,
                                        ui: {
                                            description: "Czy video ma udawać GIF'a. Opcja tylko dla lokalnych filmów.",
                                        },
                                    },
                                    {
                                        type: "image",
                                        name: "posterImageLeft",
                                        label: v.labels.POSTER_IMAGE_LEFT,
                                    },
                                    {
                                        type: "image",
                                        name: "posterImageRight",
                                        label: v.labels.POSTER_IMAGE_RIGHT,
                                    },
                                    {
                                        type: "number",
                                        name: "imageWidthLeft",
                                        label: v.labels.IMAGE_WIDTH_LEFT,
                                        required: true,
                                    },
                                    {
                                        type: "number",
                                        name: "imageWidthRight",
                                        label: v.labels.IMAGE_WIDTH_RIGHT,
                                        required: true,
                                    },
                                    {
                                        type: "number",
                                        name: "imageHeightLeft",
                                        label: v.labels.IMAGE_HEIGHT_LEFT,
                                        required: true,
                                    },
                                    {
                                        type: "number",
                                        name: "imageHeightRight",
                                        label: v.labels.IMAGE_HEIGHT_RIGHT,
                                        required: true,
                                    },
                                ],
                            },
                            {
                                name: "textText",
                                label: "Tekst - tekst",
                                ui: {
                                    itemProps: (item) => getItemProps(item, "tekst - tekst"),
                                },
                                fields: [
                                    {
                                        type: "string",
                                        name: "title",
                                        label: "Tytuł",
                                        description: v.descriptions.TITLE,
                                        required: true,
                                    },
                                    {
                                        type: "string",
                                        name: "leftColumnWidth",
                                        label: v.labels.LEFT_COLUMN_WIDTH,
                                        options: ["30", "40", "50", "60", "70"],
                                        required: true,
                                    },
                                    {
                                        type: "string",
                                        name: "headerLeft",
                                        label: v.labels.HEADER_LEFT,
                                    },
                                    {
                                        type: "string",
                                        name: "headerRight",
                                        label: v.labels.HEADER_RIGHT,
                                    },
                                    {
                                        type: "rich-text",
                                        name: "descriptionLeft",
                                        label: v.labels.DESCRIPTION_LEFT,
                                        required: true,
                                    },
                                    {
                                        type: "rich-text",
                                        name: "descriptionRight",
                                        label: v.labels.DESCRIPTION_RIGHT,
                                        required: true,
                                    },
                                ],
                            },
                            {
                                name: "imageImage",
                                label: "Grafika - grafika",
                                ui: {
                                    itemProps: (item) => getItemProps(item, "grafika - grafika"),
                                },
                                fields: [
                                    {
                                        type: "string",
                                        name: "title",
                                        label: "Tytuł",
                                        description: v.descriptions.TITLE,
                                        required: true,
                                    },
                                    {
                                        type: "string",
                                        name: "leftColumnWidth",
                                        label: v.labels.LEFT_COLUMN_WIDTH,
                                        options: ["30", "40", "50", "60", "70"],
                                        required: true,
                                    },
                                    {
                                        type: "string",
                                        name: "descriptionPosition",
                                        label: v.labels.DESCRIPTION_POSITION,
                                        options: ["top", "bottom"],
                                        required: true,
                                    },
                                    {
                                        type: "string",
                                        name: "headerLeft",
                                        label: v.labels.HEADER_LEFT,
                                    },
                                    {
                                        type: "string",
                                        name: "headerRight",
                                        label: v.labels.HEADER_RIGHT,
                                    },
                                    {
                                        type: "rich-text",
                                        name: "optionalDescriptionLeft",
                                        label: v.labels.DESCRIPTION_LEFT,
                                    },
                                    {
                                        type: "rich-text",
                                        name: "optionalDescriptionRight",
                                        label: v.labels.DESCRIPTION_RIGHT,
                                    },
                                    {
                                        type: "image",
                                        name: "imageLeft",
                                        label: v.labels.IMAGE_LEFT,
                                        required: true,
                                    },
                                    {
                                        type: "image",
                                        name: "imageRight",
                                        label: v.labels.IMAGE_RIGHT,
                                        required: true,
                                    },
                                    {
                                        type: "number",
                                        name: "imageWidth",
                                        label: v.labels.IMAGE_WIDTH,
                                        required: true,
                                    },
                                    {
                                        type: "number",
                                        name: "imageHeight",
                                        label: v.labels.IMAGE_HEIGHT,
                                        required: true,
                                    },
                                ],
                            },
                            {
                                name: "textImage",
                                label: "Tekst - grafika",
                                ui: {
                                    itemProps: (item) => getItemProps(item, "tekst - grafika"),
                                },
                                fields: [
                                    {
                                        type: "string",
                                        name: "title",
                                        label: "Tytuł",
                                        description: v.descriptions.TITLE,
                                        required: true,
                                    },
                                    {
                                        type: "string",
                                        name: "leftColumnWidth",
                                        label: v.labels.LEFT_COLUMN_WIDTH,
                                        options: ["30", "40", "50", "60", "70"],
                                        required: true,
                                    },
                                    {
                                        type: "string",
                                        name: "header",
                                        label: v.labels.HEADER,
                                    },
                                    {
                                        type: "rich-text",
                                        name: "description",
                                        label: v.labels.DESCRIPTION,
                                        required: true,
                                    },
                                    {
                                        type: "image",
                                        name: "image",
                                        label: v.labels.IMAGE,
                                        required: true,
                                    },
                                    {
                                        type: "number",
                                        name: "imageWidth",
                                        label: v.labels.IMAGE_WIDTH,
                                        required: true,
                                    },
                                    {
                                        type: "number",
                                        name: "imageHeight",
                                        label: v.labels.IMAGE_HEIGHT,
                                        required: true,
                                    },
                                ],
                            },
                            {
                                name: "imageText",
                                label: "Grafika - tekst",
                                ui: {
                                    itemProps: (item) => getItemProps(item, "grafika - tekst"),
                                },
                                fields: [
                                    {
                                        type: "string",
                                        name: "title",
                                        label: "Tytuł",
                                        description: v.descriptions.TITLE,
                                        required: true,
                                    },
                                    {
                                        type: "string",
                                        name: "leftColumnWidth",
                                        label: v.labels.LEFT_COLUMN_WIDTH,
                                        options: ["30", "40", "50", "60", "70"],
                                        required: true,
                                    },
                                    {
                                        type: "string",
                                        name: "header",
                                        label: v.labels.HEADER,
                                    },
                                    {
                                        type: "rich-text",
                                        name: "description",
                                        label: v.labels.DESCRIPTION,
                                        required: true,
                                    },
                                    {
                                        type: "image",
                                        name: "image",
                                        label: v.labels.IMAGE,
                                        required: true,
                                    },
                                    {
                                        type: "number",
                                        name: "imageWidth",
                                        label: v.labels.IMAGE_WIDTH,
                                        required: true,
                                    },
                                    {
                                        type: "number",
                                        name: "imageHeight",
                                        label: v.labels.IMAGE_HEIGHT,
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
                        label: v.labels.TITLE,
                        required: true,
                    },
                    {
                        type: "rich-text",
                        name: "description",
                        label: v.labels.DESCRIPTION,
                        isBody: true,
                        required: true,
                    },
                    {
                        type: "string",
                        name: "url",
                        label: v.labels.URL,
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
                        label: v.labels.THUMBNAIL,
                        required: true,
                    },
                    {
                        type: "string",
                        name: "title",
                        label: v.labels.TITLE,
                        required: true,
                    },
                    {
                        type: "rich-text",
                        name: "description",
                        label: v.labels.DESCRIPTION,
                        isBody: true,
                        required: true,
                    },
                    {
                        type: "string",
                        name: "url",
                        label: v.labels.URL,
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
                        label: v.labels.THUMBNAIL,
                        required: true,
                    },
                    {
                        type: "string",
                        name: "title",
                        label: v.labels.TITLE,
                        required: true,
                    },
                    {
                        type: "rich-text",
                        name: "description",
                        label: v.labels.DESCRIPTION,
                        isBody: true,
                        required: true,
                    },
                    {
                        type: "string",
                        name: "url",
                        label: v.labels.URL,
                        required: true,
                    },
                ],
            },
			{
                name: "portraitThumbnails",
                label: "Miniaturki portretów",
                path: "content/thumbnails/portraits",
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
                        label: v.labels.TITLE,
                        required: true,
                    },
                    {
                        type: "rich-text",
                        name: "description",
                        label: v.labels.DESCRIPTION,
                        isBody: true,
                        required: true,
                    },
                    {
                        type: "string",
                        name: "url",
                        label: v.labels.URL,
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
                        label: v.labels.TITLE,
                        required: true,
                    },
                    {
                        type: "rich-text",
                        name: "description",
                        label: v.labels.DESCRIPTION,
                        isBody: true,
                        required: true,
                    },
                ],
            },
        ],
    },
});
