import { useContext, createContext } from "react";
import { DefaultTheme } from "styled-components";

import { defaultTheme } from "$styles/DefaultTheme";

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
