import { AboutMeItemProps } from "./AboutMeItem.types";
import NavigationItem from "../NavigationItem";

export default function AboutMeItem({ children, to }: AboutMeItemProps) {
    return (
        <div className="bg-leading-main-2 ">
            <NavigationItem to={to}>{children}</NavigationItem>
        </div>
    );
}
