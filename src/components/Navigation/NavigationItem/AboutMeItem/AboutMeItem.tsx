import NavigationItem from "../NavigationItem";
import { AboutMeItemProps } from "./AboutMeItem.types";
import * as P from "./AboutMeItem.parts";

export default function AboutMeItem({ children, to }: AboutMeItemProps) {
    return (
        <P.AboutMeItemWrapper>
            <NavigationItem to={to}>{children}</NavigationItem>
        </P.AboutMeItemWrapper>
    );
}
