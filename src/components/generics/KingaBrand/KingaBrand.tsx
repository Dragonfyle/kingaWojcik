import Link from "next/link";
import { CONFIG } from "$constants/config";

import { KingaBrandProps } from "./KingaBrand.types";

export default function KingaBrand({ onClick }: KingaBrandProps) {
    function handleClick() {
        if (onClick) {
            onClick();
        }

        if (window.location.pathname === CONFIG.PATHS.HOME) {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    }

    return (
        <Link href={CONFIG.PATHS.HOME} onClick={handleClick} className="flex items-center font-bold no-underline">
            Kinga Ewa Wójcik
        </Link>
    );
}
