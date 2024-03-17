import KingaBrand from "../generics/KingaBrand/KingaBrand";
import Flexbox from "../generics/Flexbox/Flexbox";
import * as P from "./Navagation.parts";
import NavigationItem from "./NavigationItem/NavigationItem";
import { CONFIG } from "../../constants/config";
import { useRef, useState } from "react";
import Text from "../generics/Text/Text";

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
        // dialogRef.current.show();
        // setTimeout(() => dialogRef.current.close(), MODAL_TIMEOUT);
        setTimeout(() => setIsModalVisible(false), MODAL_TIMEOUT);
    }

    function handleClick() {
        copyToClipboard(EMAIL);
        showCopiedPopup();
    }

    return (
        <P.NavigationWrapper>
            <P.ListWrapper>
                {/* <Flexbox tag="ul" $wrap="nowrap"> */}
                <KingaBrand />
                <NavigationItem label="O mnie" isLink to={CONFIG.PATHS.ABOUT} />
                {/* </Flexbox> */}
                {/* <Flexbox tag="ul" $justify="flex-end" $wrap="nowrap"> */}
                <NavigationItem label="Projekty brandingowe" to />
                <NavigationItem label="Projekty wydawnicze" to />
                <NavigationItem label={EMAIL} onClick={handleClick}>
                    {isModalVisible && (
                        <P.StyledDialog ref={dialogRef}>
                            <Text size="s">skopiowane</Text>
                        </P.StyledDialog>
                    )}
                </NavigationItem>
                {/* </Flexbox> */}
            </P.ListWrapper>
        </P.NavigationWrapper>
    );
}
