import { useState } from "react";

import Flexbox from "$generics/Flexbox/";
import KingaBrand from "$generics/KingaBrand/";
import LinkedinIcon from "$generics/LinkedinIcon/";
import { useThemeContext } from "$contexts/ThemeContext";
import navigationItems from "$data/navigationData";
import Divider from "$components/generics/Divider/";
import MenuCross from "$components/generics/MenuCrossIcon/";

import NavigationHeader from "./NavigationHeader/";
import MobileNavigationItem from "./MobileNavigationItem/";
import HamburgerIcon from "./HamburgerIcon/";
import * as P from "./MobileNavigation.parts";

export default function MobileNavigation() {
    const {
        theme: { colors },
    } = useThemeContext();
    const [isExpanded, setIsExpanded] = useState(false);

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
                    <MobileNavigationItem key={label} to={link} onClick={handleMenuItemTouch}>
                        {label}
                    </MobileNavigationItem>
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
                    </Flexbox>
                </P.Menu>
            )}
        </>
    );
}
