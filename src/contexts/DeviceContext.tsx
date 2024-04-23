import { createContext, useContext, useEffect, useState } from "react";

import { CONFIG } from "$constants/config";

const DeviceContext = createContext({
    isMobile: false,
    isPhone: false,
});

const DeviceContextProvider = ({ children }: React.PropsWithChildren) => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const isMobile = windowWidth < CONFIG.APP.MAX_MOBILE_WIDTH;
    const isPhone = windowWidth < CONFIG.APP.MAX_PHONE_WIDTH;

    function getWindowWidth([
        {
            contentRect: { width },
        },
    ]: Array<ResizeObserverEntry>) {
        setWindowWidth(width);
    }

    useEffect(() => {
        const resizeObserver = new ResizeObserver(getWindowWidth);

        resizeObserver.observe(document.body);
    });

    useEffect(() => {
        setWindowWidth(window.innerWidth);
    }, []);
    return <DeviceContext.Provider value={{ isMobile, isPhone }}>{children}</DeviceContext.Provider>;
};

const useDeviceContext = () => useContext(DeviceContext);

export { DeviceContextProvider, useDeviceContext };
