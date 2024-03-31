import { useRef, useState } from "react";
import KingaBrand from "../generics/KingaBrand/KingaBrand";
import NavigationItem from "./NavigationItem/NavigationItem";
import LinkedinIcon from "../generics/LinkedinIcon/LinkedinIcon";
import { CopiedConfirmation } from "$components/generics/CopiedConfirmation/CopiedConfirmation";
import Flexbox from "../generics/Flexbox/Flexbox";
import { useThemeContext } from "../../contexts/ThemeContext";
import navigationItems from "$data/navigationData";
import NavigationEmail from "./NavigationItem/NavigationEmail/NavigationEmail";
import { handleEmailClick } from "./Navigation.utils";
import * as P from "./Navagation.parts";

export default function Navigation() {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const dialogRef = useRef(null);
    const { theme } = useThemeContext();

    function renderItems(source: typeof navigationItems) {
        return (
            <>
                {source.map(({ label, link }) => (
                    <NavigationItem
                        key={label}
                        backgroundColor={label === "O mnie" ? theme.colors.leading.main[2] : undefined}
                        to={link}>
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
        <P.NavigationWrapper>
            <P.ListWrapper>
                <Flexbox $width="auto">
                    <LinkedinIcon size={25} />
                    <KingaBrand />
                </Flexbox>
                {renderItems(navigationItems)}
            </P.ListWrapper>
        </P.NavigationWrapper>
    );
}
