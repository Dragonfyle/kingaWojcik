"use client";

import React, { useState, useEffect, createContext, useContext } from "react";

import { CONFIG } from "$constants/config";

const DeviceContext = createContext({
    isMobile: false,
    isPhone: false,
});

const DeviceContextProvider = ({ children }: React.PropsWithChildren) => {
    const [windowWidth, setWindowWidth] = useState(0); // Initialize with 0
    const isMobile = windowWidth < CONFIG.APP.MAX_MOBILE_WIDTH;
    const isPhone = windowWidth < CONFIG.APP.MAX_PHONE_WIDTH;

    useEffect(() => {
        // Update windowWidth when the component mounts
        setWindowWidth(window.innerWidth);

        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);

        // Clean up the event listener
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return <DeviceContext.Provider value={{ isMobile, isPhone }}>{children}</DeviceContext.Provider>;
};

const useDeviceContext = () => useContext(DeviceContext);

export { DeviceContextProvider, useDeviceContext };
