import Flexbox from "../../generics/Flexbox/Flexbox";
import KingaBrand from "../../generics/KingaBrand/KingaBrand";
import LinkedinIcon from "../../generics/LinkedinIcon/LinkedinIcon";
import HamburgerIcon from "./HamburgerIcon/HamburgerIcon";
import { useThemeContext } from "../../../contexts/ThemeContext";
import { useRef, useState } from "react";
import NavigationItem from "../../Navigation/NavigationItem/NavigationItem";
import { CopiedConfirmation } from "../../generics/CopiedConfirmation/CopiedConfirmation";
import { handleEmailClick } from "$components/Navigation/Navigation.utils";
import navigationItems from "$data/navigationData";
import NavigationEmail from "$components/Navigation/NavigationItem/NavigationEmail/NavigationEmail";
import * as P from "./MobileNavigation.parts";
import NavigationHeader from "./NavigationHeader/NavigationHeader";
import Divider from "$components/generics/Divider/Divider";
import MenuCross from "$components/generics/MenuCrossIcon/MenuCrossIcon";

export default function MobileNavigation() {
    const {
        theme: { colors },
    } = useThemeContext();
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
                    <NavigationItem
                        key={label}
                        to={link}
                        onClick={handleMenuItemTouch}
                        backgroundColor={colors.white.trans[2]}>
                        {label}
                    </NavigationItem>
                ))}
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
                {!isExpanded && (
                    <HamburgerIcon
                        size="35px"
                        fgColor={colors.leading.secondary[1]}
                        bgColor={colors.leading.main[2]}
                        onClick={handleHamburgerClick}
                    />
                )}
            </P.NavigationWrapper>

            {isExpanded && (
                <P.Menu>
                    <Flexbox $width="90%" $justify="flex-end">
                        <MenuCross
                            size="35px"
                            fgColor={colors.leading.main[2]}
                            bgColor={colors.supplementary[3]}
                            onClick={handleMenuItemTouch}
                        />
                    </Flexbox>
                    <Flexbox $direction="column" $width="75%" $rowGap="10px">
                        <NavigationHeader />
                        <Divider height={3} width="100%" mTop={0} mBot={20} color={colors.supplementary[3]} />
                        {renderItems(navigationItems)}
                        <Divider height={3} width="100%" mTop={70} mBot={0} color={colors.supplementary[3]} />
                        <NavigationEmail
                            onClick={() => handleEmailClick(isModalVisible, setIsModalVisible)}
                            backgroundColor={colors.white.trans[2]}>
                            {isModalVisible && <CopiedConfirmation ref={dialogRef}></CopiedConfirmation>}
                        </NavigationEmail>
                    </Flexbox>
                </P.Menu>
            )}
        </>
    );
}
