import { createBrowserRouter } from "react-router-dom";

import { CONFIG } from "$constants/config";
import Layout from "$components/Layout/";
import AboutPage from "$components/AboutPage/AboutPage";
import HomePage from "$pages/Home";
import Branding1 from "$pages/Branding1";
import Branding2 from "$pages/Branding2";
import Branding3 from "$pages/Branding3";
import Branding4 from "$pages/Branding4";
import Editorial1 from "$pages/Editorial1";
import Editorial2 from "$pages/Editorial2";

const browserRouter = createBrowserRouter([
    {
        path: CONFIG.PATHS.HOME,
        element: <Layout />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: CONFIG.PATHS.PROJECTS.BRANDING[1],
                element: <Branding1 />,
            },
            {
                path: CONFIG.PATHS.PROJECTS.BRANDING[2],
                element: <Branding2 />,
            },
            {
                path: CONFIG.PATHS.PROJECTS.BRANDING[3],
                element: <Branding3 />,
            },
            {
                path: CONFIG.PATHS.PROJECTS.BRANDING[4],
                element: <Branding4 />,
            },
            {
                path: CONFIG.PATHS.PROJECTS.EDITORIAL[1],
                element: <Editorial1 />,
            },
            {
                path: CONFIG.PATHS.PROJECTS.EDITORIAL[2],
                element: <Editorial2 />,
            },
            {
                path: CONFIG.PATHS.ABOUT,
                element: <AboutPage />,
            },
        ],
    },
]);

export { browserRouter };
