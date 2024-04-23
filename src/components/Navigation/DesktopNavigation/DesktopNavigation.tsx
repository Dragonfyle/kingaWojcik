import { useRef, useState } from "react";

import navigationItems from "$data/navigationData";
import KingaBrand from "$generics/KingaBrand/";
import Flexbox from "$generics/Flexbox/";
import NavigationItem from "$components/Navigation/NavigationItem/";
import LinkedinIcon from "$generics/LinkedinIcon/";
import { CopiedConfirmation } from "$components/generics/CopiedConfirmation/";
import NavigationEmail from "$components/Navigation/NavigationItem/NavigationEmail/";

import AboutMeItem from "../NavigationItem/AboutMeItem/";
import { handleEmailClick } from "../Navigation.utils";
import * as P from "./DesktopNavigation.parts";

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
