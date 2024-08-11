import { createBrowserRouter } from "react-router-dom";

import { CONFIG } from "$constants/config";
import Layout from "$components/Layout/";
import AboutPage from "$components/AboutPage/AboutPage";
import HomePage from "$pages/Home";
import Branding1 from "$pages/Branding1";
import Branding2 from "$pages/Branding2";
import Branding3 from "$pages/Branding3";
import Branding4 from "$pages/Branding4";
import Illustrations1 from "$pages/Illustrations1";
import Illustrations2 from "$pages/Illustrations2";
import Illustrations3 from "$pages/Illustrations3";

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
                path: CONFIG.PATHS.PROJECTS.ILLUSTRATIONS[1],
                element: <Illustrations1 />,
            },
            {
                path: CONFIG.PATHS.PROJECTS.ILLUSTRATIONS[2],
                element: <Illustrations2 />,
            },
            {
                path: CONFIG.PATHS.PROJECTS.ILLUSTRATIONS[3],
                element: <Illustrations3 />,
            },
            {
                path: CONFIG.PATHS.ABOUT,
                element: <AboutPage />,
            },
        ],
    },
]);

export { browserRouter };
