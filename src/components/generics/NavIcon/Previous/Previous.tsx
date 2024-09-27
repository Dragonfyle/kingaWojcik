import IconNext from "$assets/icons/previous.svg";

import { NavIconProps } from "../NavIcon.types";

export default function PreviousIcon({ onClick, tooltipValue, isDisabled = false }: NavIconProps) {
    const withTooltip = !!tooltipValue;
    const color = isDisabled ? "text-gray-100" : "text-gray-500";
    const hoverColor = isDisabled ? "hover:text-gray-100" : "hover:text-leading-main-1";

    return (
        <div className="group relative">
            <IconNext
                onClick={onClick}
                className={`relative cursor-pointer select-none fill-current ${color} ${hoverColor}`}
                style={{
                    width: "50px",
                    height: "50px",
                }}
            />

            {withTooltip && (
                <div className="absolute -top-full left-0">
                    <p className="text-white whitespace-nowrap bg-gray-300 px-2 py-1 group-hover-visible">
                        {tooltipValue}
                    </p>
                </div>
            )}
        </div>
    );
}
