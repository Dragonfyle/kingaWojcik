import Flexbox from "../generics/Flexbox/Flexbox";
import KingaBrand from "../generics/KingaBrand/KingaBrand";
import LinkedinIcon from "../generics/LinkedinIcon/LinkedinIcon";
import HamburgerIcon from "./HamburgerIcon/HamburgerIcon";
import { useThemeContext } from "../../contexts/ThemeContext";
import { useRef, useState } from "react";
import NavigationItem from "../Navigation/NavigationItem/NavigationItem";
import { CopiedConfirmation } from "../generics/CopiedConfirmation/CopiedConfirmation";
import { handleEmailClick } from "$components/Navigation/Navigation.utils";
import navigationItems from "$data/navigationData";
import NavigationEmail from "$components/Navigation/NavigationItem/NavigationEmail/NavigationEmail";
import * as P from "./MobileNavigation.parts";

export default function MobileNavigation() {
    const { theme } = useThemeContext();
    const [isExpanded, setIsExpanded] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const dialogRef = useRef(null);

    function handleHamburgerClick() {
        setIsExpanded((prev) => !prev);
    }

    function handleMenuItemTouch() {
        setIsExpanded(false);
    }

    function renderItems(source: typeof navigationItems) {
        return (
            <>
                {source.map(({ label, link }) => (
                    <NavigationItem key={label} to={link} onClick={handleMenuItemTouch}>
                        {label}
                    </NavigationItem>
                ))}
                <NavigationEmail onClick={() => handleEmailClick(isModalVisible, setIsModalVisible)}>
                    {isModalVisible && <CopiedConfirmation ref={dialogRef}></CopiedConfirmation>}
                </NavigationEmail>
            </>
        );
    }

    return (
        <>
            <P.NavigationWrapper>
                <Flexbox $width="auto">
                    <LinkedinIcon size={25} />
                    <KingaBrand onClick={handleMenuItemTouch} />
                </Flexbox>
                <HamburgerIcon
                    size="50px"
                    fgColor={theme.colors.leading.secondary[1]}
                    bgColor={theme.colors.leading.main[2]}
                    onClick={handleHamburgerClick}
                />
            </P.NavigationWrapper>
            {isExpanded && <P.Menu>{renderItems(navigationItems)} </P.Menu>}
        </>
    );
}
