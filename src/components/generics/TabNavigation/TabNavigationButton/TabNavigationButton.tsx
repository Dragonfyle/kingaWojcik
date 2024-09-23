import { ButtonProps } from "./TabNavigationButton.types";

export default function Button({ children, isActive, onClick }: ButtonProps) {
    const group = isActive ? "active" : "";
    const bg = isActive ? "bg-leading-main-2" : "bg-leading-secondary-1 hover:bg-leading-main-2 hover:opacity-50";
    const afterBg = isActive ? "first:after:bg-leading-main-2" : "first:after:bg-leading-secondary-1";
    const after = isActive
        ? `first:after:content-[''] first:after:absolute first:after:top-0 first:after:left-0 first:after:w-[7%] first:after:h-full ${afterBg} first:after:skew-x-12`
        : "";
    const afterHover = `first:hover:after:content-['']  first:hover:after:absolute first:hover:after:top-0 first:hover:after:left-0 first:hover:after:w-[7%] first:hover:after:h-full first:hover:after:bg-leading-main-2 first:hover:after:skew-x-12`;

    return (
        <button
            className={`${after} group relative flex h-full -skew-x-12 cursor-pointer items-center border-none ${bg} px-3 py-4 s:px-8 ${group} ${afterHover}`}
            onClick={onClick}>
            <div className="skew-x-12 transform">
                <span className="whitespace-nowrap text-ms uppercase text-white-1 group-hover:text-leading-secondary-1 group-[.active]:text-leading-secondary-1">
                    {children}
                </span>
            </div>
        </button>
    );
}
