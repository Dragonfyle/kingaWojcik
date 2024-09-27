import { ItemIndicatorProps } from "./ItemIndicator.types";

export default function ItemIndicator({ isActive }: ItemIndicatorProps) {
    const color = isActive ? "bg-leading-main-1" : "bg-leading-secondary-2";

    return <div className={`h-5 w-5 rounded-full ${color}`} />;
}
