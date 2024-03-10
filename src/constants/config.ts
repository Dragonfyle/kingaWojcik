import { SIZE } from "../styles/breakpoints";

const _config = Object.freeze({
    APP: { MAX_MOBILE_WIDTH: SIZE.L },

    CAROUSEL: { INTERVAL: 100, SLIDE_LENGTH_MS: 5000 },

    PROJECT_PANEL: { THUMBNAIL_WIDTH: 550 },

    PATHS: {
        HOME: "/",
        BRANDING_SECTION: "/#brandingowe",
        EDITORIAL_SECTION: "/#wydawnicze",
        PROJECTS: {
            EDITORIAL: {
                1: "editorial-1",
            },
            BRANDING: {
                1: "branding-1",
                2: "branding-2",
            },
        },
        ABOUT: "about",
        CONTACT: "contact",
        COLLABORATION: "collaboration",
    },
});

const CONFIG = new Proxy(_config, {
    set: () => {
        throw new Error("config is readonly, do not mutate");
    },
});

export { CONFIG };
