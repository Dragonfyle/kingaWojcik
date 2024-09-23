import { AboutMeItemProps } from "./AboutMeItem.types";
import NavigationItem from "../NavigationItem";

export default function AboutMeItem({ children, to }: AboutMeItemProps) {
    return (
        <div className="[&>div]:bg-leading-main-2 [&>div]:hover:bg-leading-secondary-1 [&_p]:hover:text-white-1">
            <NavigationItem to={to}>{children}</NavigationItem>
        </div>
    );
}
