"use client";

import React from "react";
import { ThemeProvider as ThemeProviderComponent } from "styled-components";

import { useThemeContext } from "./ThemeContext";

type ThemeProviderProps = {
    children: React.ReactElement;
};

const ThemeProvider = ({ children }: ThemeProviderProps) => {
    const { theme } = useThemeContext();

    return <ThemeProviderComponent theme={theme}>{children}</ThemeProviderComponent>;
};

export { ThemeProvider };
