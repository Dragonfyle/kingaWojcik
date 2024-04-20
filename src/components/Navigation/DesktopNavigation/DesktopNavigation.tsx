import { useRef, useState } from "react";
import KingaBrand from "../../generics/KingaBrand/KingaBrand";
import NavigationItem from ".././NavigationItem/NavigationItem";
import LinkedinIcon from "../../generics/LinkedinIcon/LinkedinIcon";
import { CopiedConfirmation } from "$components/generics/CopiedConfirmation/CopiedConfirmation";
import Flexbox from "../../generics/Flexbox/Flexbox";
import navigationItems from "$data/navigationData";
import NavigationEmail from ".././NavigationItem/NavigationEmail/NavigationEmail";
import { handleEmailClick } from ".././Navigation.utils";
import * as P from "./DesktopNavigation.parts";
import AboutMeItem from "../NavigationItem/AboutMeItem/AboutMeItem";

export default function Navigation() {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const dialogRef = useRef(null);

    function renderItems(source: typeof navigationItems) {
        return (
            <>
                {source.map(({ label, link }) => {
                    return label === "O mnie" ? (
                        <AboutMeItem key={label} to={link}>
                            {label}
                        </AboutMeItem>
                    ) : (
                        <NavigationItem key={label} to={link}>
                            {label}
                        </NavigationItem>
                    );
                })}
            </>
        );
    }

    return (
        <P.NavigationWrapper>
            <P.ListWrapper>
                <Flexbox $width="auto">
                    <LinkedinIcon size={25} />
                    <KingaBrand />
                </Flexbox>
                {renderItems(navigationItems)}

                <NavigationEmail onClick={() => handleEmailClick(isModalVisible, setIsModalVisible)}>
                    {isModalVisible && <CopiedConfirmation ref={dialogRef}></CopiedConfirmation>}
                </NavigationEmail>
            </P.ListWrapper>
        </P.NavigationWrapper>
    );
}
