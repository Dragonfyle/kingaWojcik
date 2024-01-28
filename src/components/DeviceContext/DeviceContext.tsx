import { createContext, useContext, useEffect, useState } from "react";
import { CONFIG } from "../../constants/config";

const DeviceContext = createContext({
    isMobile: false,
});

const DeviceContextProvider = ({ children }: React.PropsWithChildren) => {
    const [isMobile, setIsMobile] = useState(false);

    function getWindowWidth() {
        setIsMobile(window.innerWidth <= CONFIG.APP.MAX_MOBILE_WIDTH);
    }

    useEffect(() => {
        const resizeObserver = new ResizeObserver(getWindowWidth);

        resizeObserver.observe(document.body);
    });

    useEffect(() => {
        setIsMobile(window.innerWidth <= CONFIG.APP.MAX_MOBILE_WIDTH);
    }, []);
    return <DeviceContext.Provider value={{ isMobile }}>{children}</DeviceContext.Provider>;
};

const useDeviceContext = () => useContext(DeviceContext);

export { DeviceContextProvider, useDeviceContext };
