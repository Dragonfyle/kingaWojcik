import Link from "next/link";

import { NavigationItemProps } from "./NavigationItem.types";

export default function NavigationItem({ children, to = "", onClick }: NavigationItemProps) {
    return (
        <div className="relative flex cursor-pointer items-center hover:bg-leading-main-2" onClick={onClick}>
            <Link href={to} className="h-full px-4 py-3 text-leading-main-1 no-underline">
                <p className="text-l font-bold uppercase hover:text-leading-main-1">{children}</p>
            </Link>
        </div>
    );
}
