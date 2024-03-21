import KingaBrand from "../generics/KingaBrand/KingaBrand";
import NavigationItem from "./NavigationItem/NavigationItem";
import { CONFIG } from "../../constants/config";
import { useRef, useState } from "react";
import * as P from "./Navagation.parts";
import LinkedinIcon from "../generics/LinkedinIcon/LinkedinIcon";
import Flexbox from "../generics/Flexbox/Flexbox";
import { CopiedConfirmation } from "../generics/CopiedConfirmation/CopiedConfirmation";
import { useThemeContext } from "../../contexts/ThemeContext";

export default function Navigation() {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const dialogRef = useRef(null);
    const { theme } = useThemeContext();

    function copyToClipboard(value: string) {
        navigator.clipboard.writeText(value);
    }

    function showCopiedPopup() {
        if (isModalVisible) return;

        setIsModalVisible(true);
        setTimeout(() => setIsModalVisible(false), CONFIG.COPIED_TIMEOUT);
    }

    function handleClick() {
        copyToClipboard(CONFIG.EMAIL);
        showCopiedPopup();
    }

    return (
        <P.NavigationWrapper>
            <P.ListWrapper>
                <Flexbox $width="auto">
                    <LinkedinIcon size={25} />
                    <KingaBrand />
                </Flexbox>
                <NavigationItem
                    label="O mnie"
                    isLink
                    to={CONFIG.PATHS.ABOUT}
                    backgroundColor={theme.colors.leading.main[2]}
                />
                <NavigationItem label="Projekty brandingowe" isLink to={CONFIG.PATHS.BRANDING_SECTION} />
                <NavigationItem label="Projekty wydawnicze" isLink to={CONFIG.PATHS.EDITORIAL_SECTION} />
                <NavigationItem label={CONFIG.EMAIL} onClick={handleClick}>
                    {isModalVisible && <CopiedConfirmation ref={dialogRef}></CopiedConfirmation>}
                </NavigationItem>
            </P.ListWrapper>
        </P.NavigationWrapper>
    );
}
