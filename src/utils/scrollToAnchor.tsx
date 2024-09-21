import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
const DELAY = 100;

export default function ScrollToAnchor() {
    const location = useRouter();
    const lastHash = useRef("");

    useEffect(() => {
        if (location.asPath) {
            lastHash.current = location.asPath.slice(1);
        }

        if (lastHash.current && document.getElementById(lastHash.current)) {
            setTimeout(() => {
                document.getElementById(lastHash.current)?.scrollIntoView({ behavior: "smooth", block: "start" });
                lastHash.current = "";
            }, DELAY);
        }
    }, [location]);

    return null;
}
