import IconNext from "$assets/icons/next.svg";

import { NavIconProps } from "../NavIcon.types";

export default function NextIcon({ onClick, tooltipValue, isDisabled = false }: NavIconProps) {
    const withTooltip = !!tooltipValue;
    const color = isDisabled ? "text-gray-100" : "text-black";
    const hoverColor = isDisabled ? "hover:text-gray-100" : "hover:text-leading-main-1";

    return (
        <div className="group relative">
            <IconNext
                onClick={onClick}
                className={`relative cursor-pointer select-none fill-current ${color} ${hoverColor}`}
                style={{
                    width: "100px",
                    height: "50px",
                }}
            />

            {withTooltip && (
                <div className="absolute -top-full right-0">
                    <p className="group-hover-visible text-white whitespace-nowrap bg-gray-300 px-2 py-1">
                        {tooltipValue}
                    </p>
                </div>
            )}
        </div>
    );
}
