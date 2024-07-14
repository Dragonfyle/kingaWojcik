import { CONFIG } from "$constants/config";
import { ProjectPanelData } from "$data/ProjectPanelData";
import navigationItems from "$data/navigationData";

import FooterSection from "./FooterSection/";
import * as P from "./Footer.parts";

export default function Footer() {
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
        </P.Wrapper>
    );
}
