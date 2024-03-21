import Flexbox from "../generics/Flexbox/Flexbox";
import KingaBrand from "../generics/KingaBrand/KingaBrand";
import LinkedinIcon from "../generics/LinkedinIcon/LinkedinIcon";
import HamburgerIcon from "./HamburgerIcon/HamburgerIcon";
import { useThemeContext } from "../../contexts/ThemeContext";
import { useRef, useState } from "react";
import NavigationItem from "../Navigation/NavigationItem/NavigationItem";
import { CONFIG } from "../../constants/config";
import { CopiedConfirmation } from "../generics/CopiedConfirmation/CopiedConfirmation";
import * as P from "./MobileNavigation.parts";

export default function MobileNavigation() {
    const { theme } = useThemeContext();
    const [isExpanded, setIsExpanded] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const dialogRef = useRef(null);

    function handleHamburgerClick() {
        setIsExpanded((prev) => !prev);
    }

    function copyToClipboard(value: string) {
        navigator.clipboard.writeText(value);
    }

    function showCopiedPopup() {
        if (isModalVisible) return;

        setIsModalVisible(true);
        setTimeout(() => setIsModalVisible(false), CONFIG.COPIED_TIMEOUT);
    }

    function handleEmailClick() {
        copyToClipboard(CONFIG.EMAIL);
        showCopiedPopup();
    }

    function handleMenuItemTouch() {
        setIsExpanded(false);
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
            {isExpanded && (
                <P.Menu>
                    <NavigationItem label="O mnie" isLink to={CONFIG.PATHS.ABOUT} onClick={handleMenuItemTouch} />
                    <NavigationItem
                        label="Projekty brandingowe"
                        isLink
                        to={CONFIG.PATHS.BRANDING_SECTION}
                        onClick={handleMenuItemTouch}
                    />
                    <NavigationItem
                        label="Projekty wydawnicze"
                        isLink
                        to={CONFIG.PATHS.EDITORIAL_SECTION}
                        onClick={handleMenuItemTouch}
                    />
                    <NavigationItem label={CONFIG.EMAIL} onClick={handleEmailClick}>
                        {isModalVisible && <CopiedConfirmation ref={dialogRef}></CopiedConfirmation>}
                    </NavigationItem>
                </P.Menu>
            )}
        </>
    );
}
