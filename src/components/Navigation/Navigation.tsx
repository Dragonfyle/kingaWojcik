import KingaBrand from "../generics/KingaBrand/KingaBrand";
import NavigationItem from "./NavigationItem/NavigationItem";
import { CONFIG } from "../../constants/config";
import { useRef, useState } from "react";
import Text from "../generics/Text/Text";
import * as P from "./Navagation.parts";
import LinkedinIcon from "../generics/LinkedinIcon/LinkedinIcon";

const EMAIL = "wojcik.kinga.ewa@gmail.com";
const MODAL_TIMEOUT = 5000;

export default function Navigation() {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const dialogRef = useRef(null);

    function copyToClipboard(value: string) {
        navigator.clipboard.writeText(value);
    }

    function showCopiedPopup() {
        if (isModalVisible) return;

        setIsModalVisible(true);
        setTimeout(() => setIsModalVisible(false), MODAL_TIMEOUT);
    }

    function handleClick() {
        copyToClipboard(EMAIL);
        showCopiedPopup();
    }

    return (
        <P.NavigationWrapper>
            <P.ListWrapper>
                <LinkedinIcon size={25} />
                <KingaBrand />
                <NavigationItem label="O mnie" isLink to={CONFIG.PATHS.ABOUT} />
                <NavigationItem label="Projekty brandingowe" isLink to={CONFIG.PATHS.BRANDING_SECTION} />
                <NavigationItem label="Projekty wydawnicze" isLink to={CONFIG.PATHS.EDITORIAL_SECTION} />
                <NavigationItem label={EMAIL} onClick={handleClick}>
                    {isModalVisible && (
                        <P.Modal ref={dialogRef}>
                            <Text size="s">skopiowane</Text>
                        </P.Modal>
                    )}
                </NavigationItem>
            </P.ListWrapper>
        </P.NavigationWrapper>
    );
}
