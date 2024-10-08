import { SIZE } from "$styles/breakpoints";

const _config = Object.freeze({
    APP: { MAX_MOBILE_WIDTH: SIZE.L, MAX_PHONE_WIDTH: SIZE.S },

    CAROUSEL: { INTERVAL: 100, TRANSITION: 130, SLIDE_LENGTH_MS: 5000 },

    PROJECT_PANEL: { THUMBNAIL_WIDTH: 550, THUMBNAIL_HEIGHT: 309 },

    PATHS: {
        HOME: "/",
        ARTICLES: "/#artykuly",
        BRANDING_SECTION: "/#brandingowe",
        ILLUSTRATIONS_SECTION: "/#ilustracje",
        PROJECTS: {
            ILLUSTRATIONS: {
                1: "illustrations-1",
                2: "illustrations-2",
                3: "illustrations-3",
            },
            BRANDING: {
                1: "branding-1",
                2: "branding-2",
                3: "branding-3",
                4: "branding-4",
            },
        },
        ABOUT: "about",
        CONTACT: "contact",
        COLLABORATION: "collaboration",
    },
    EMAIL: "wojcik.kinga.ewa@gmail.com",
    COPIED_TIMEOUT: 5000,
});

const CONFIG = new Proxy(_config, {
    set: () => {
        throw new Error("config is readonly, do not mutate");
    },
});

export { CONFIG };
