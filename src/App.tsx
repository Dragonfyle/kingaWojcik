import { RouterProvider } from "react-router-dom";

import { DeviceContextProvider } from "$contexts/DeviceContext";
import { GlobalStyles } from "$styles/GlobalStyles";

import { browserRouter } from "./router/browserRouter.tsx";
import { ThemeProvider } from "./contexts/ThemeProvider.tsx";
import ThemeContextProvider from "./contexts/ThemeContext.tsx";

function App() {
    return (
        <>
            <ThemeContextProvider>
                <ThemeProvider>
                    <DeviceContextProvider>
                        <GlobalStyles />
                        <RouterProvider router={browserRouter} />
                    </DeviceContextProvider>
                </ThemeProvider>
            </ThemeContextProvider>
        </>
    );
}

export default App;
