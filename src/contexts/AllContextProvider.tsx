"use client";

import { DeviceContextProvider } from "$contexts/DeviceContext";
import { GlobalStyles } from "$styles/GlobalStyles";

import { ThemeProvider } from "./ThemeProvider.tsx";
import ThemeContextProvider from "./ThemeContext.tsx";
import LayoutWrapper from "$components/generics/LayoutWrapper/LayoutWrapper.tsx";

function AllContextProvider({ children }: { children: React.ReactNode }) {
    return (
        <>
            <ThemeContextProvider>
                <ThemeProvider>
                    <DeviceContextProvider>
                        <GlobalStyles />
                        <LayoutWrapper>{children}</LayoutWrapper>
                    </DeviceContextProvider>
                </ThemeProvider>
            </ThemeContextProvider>
        </>
    );
}

export default AllContextProvider;
