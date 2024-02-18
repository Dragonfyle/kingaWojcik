import { GlobalStyles } from "./styles/GlobalStyles";
import { DeviceContextProvider } from "./components/HomePage/contexts/DeviceContext/DeviceContext";
import { RouterProvider } from "react-router-dom";
import { browserRouter } from "./router/browserRouter.tsx";
import ThemeContextProvider from "./contexts/ThemeContext.tsx";
import { ThemeProvider } from "./contexts/ThemeProvider.tsx";

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
