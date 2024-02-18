import React, { useContext, createContext } from "react";
import { defaultTheme } from "../styles/DefaultTheme";
import { DefaultTheme } from "styled-components";

interface ThemeContextProps {
    children: React.ReactNode;
}

interface ThemeContext {
    theme: DefaultTheme;
}

const ThemeContext = createContext({} as ThemeContext);

const ThemeContextProvider = ({ children }: ThemeContextProps) => {
    const theme = defaultTheme;

    return (
        <ThemeContext.Provider
            value={{
                theme,
            }}>
            {children}
        </ThemeContext.Provider>
    );
};

const useThemeContext = () => {
    return useContext(ThemeContext);
};

export { useThemeContext };

export default ThemeContextProvider;
