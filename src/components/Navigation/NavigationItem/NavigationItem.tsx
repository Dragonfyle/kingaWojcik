import Link from "next/link";

import { NavigationItemProps } from "./NavigationItem.types";

export default function NavigationItem({ children, to = "", onClick, className }: NavigationItemProps) {
    return (
        <div className="h-full cursor-pointer hover:bg-leading-main-2" onClick={onClick}>
            <Link
                href={to}
                className="flex h-full items-center pl-[18px] text-s font-bold uppercase text-leading-main-1 no-underline s:pl-[24px] l:px-4">
                <p className={`${className} text-2xl font-bold uppercase l:text-s`}>{children}</p>
            </Link>
        </div>
    );
}
