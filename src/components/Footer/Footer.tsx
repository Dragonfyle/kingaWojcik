import { CONFIG } from "$constants/config";
import { ProjectPanelData } from "$data/ProjectPanelData";
import navigationItems from "$data/navigationData";

import FooterSection from "./FooterSection/";
import * as P from "./Footer.parts";
import Flexbox from "$components/generics/Flexbox";
import Text from "$components/generics/Text";
import { useThemeContext } from "$contexts/ThemeContext";

export default function Footer() {
    const {
        theme: { colors },
    } = useThemeContext();
    const middleSectionTitles = ProjectPanelData.branding.content.map((project) => project.title);
    const middleSectionLinks = ProjectPanelData.branding.content.map((project) => project.projectUrl);
    const rightSectionTitles = ProjectPanelData.editorial.content.map((project) => project.title);
    const rightSectionLinks = ProjectPanelData.editorial.content.map((project) => project.projectUrl);
    const leftSectionTitles = [...navigationItems.map((item) => item.label), CONFIG.EMAIL];
    const leftSectionLinks = [
        CONFIG.PATHS.ABOUT,
        CONFIG.PATHS.ARTICLES,
        CONFIG.PATHS.BRANDING_SECTION,
        CONFIG.PATHS.EDITORIAL_SECTION,
    ];

    return (
        <P.Wrapper>
            <Flexbox dir="column" $rowGap="40px">
                <P.StyledFlexbox>
                    <FooterSection sectionName="Menu" listItems={leftSectionTitles} links={leftSectionLinks} />
                    <FooterSection
                        sectionName="Projekty Brandingowe"
                        listItems={middleSectionTitles}
                        links={middleSectionLinks}
                    />

                    <FooterSection
                        sectionName="Projekty wydawnicze"
                        listItems={rightSectionTitles}
                        links={rightSectionLinks}
                    />
                </P.StyledFlexbox>

                <P.StyledFlexbox>
                    <Text size="xs" color={colors.white[1]}>
                        Code by Michal Rygorowicz
                    </Text>
                </P.StyledFlexbox>
            </Flexbox>
        </P.Wrapper>
    );
}
