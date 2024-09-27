"use client";

import React, { useState, useEffect, createContext, useContext } from "react";

import { CONFIG } from "$constants/config";

const DeviceContext = createContext({
    isMobile: false,
    isPhone: false,
});

const DeviceContextProvider = ({ children }: React.PropsWithChildren) => {
    const [isMobile, setIsMobile] = useState(true);
    const [isPhone, setIsPhone] = useState(true);

    function getWindowSize() {
        // TODO: add some debounce here
        setIsMobile(window.innerWidth < CONFIG.APP.MAX_MOBILE_WIDTH);
        setIsPhone(window.innerWidth < CONFIG.APP.MAX_PHONE_WIDTH);
    }

    useEffect(() => {
        const observer = new ResizeObserver(getWindowSize);

        observer.observe(document.body);
    }, []);

    return <DeviceContext.Provider value={{ isMobile, isPhone }}>{children}</DeviceContext.Provider>;
};

const useDeviceContext = () => useContext(DeviceContext);

export { DeviceContextProvider, useDeviceContext };
