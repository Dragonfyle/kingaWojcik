import { createBrowserRouter } from "react-router-dom";
import { CONFIG } from "../constants/config";
import HomePage from "../pages/Home";
import Layout from "../components/Layout/Layout";
import Branding1 from "../pages/Branding1";
import Branding2 from "../pages/Branding2";

const browserRouter = createBrowserRouter([
    {
        path: CONFIG.PATHS.HOME,
        element: <Layout />,
        children: [
            {
                path: CONFIG.PATHS.HOME,
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
        ],
    },
]);

export { browserRouter };
