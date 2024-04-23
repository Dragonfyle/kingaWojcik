import { CONFIG } from "$constants/config";
import { ProjectPanelData } from "$data/projectPanelData";

import FooterSection from "./FooterSection/";
import * as P from "./Footer.parts";

export default function Footer() {
    const middleSectionTitles = ProjectPanelData.branding.content.map((project) => project.title);
    const middleSectionLinks = ProjectPanelData.branding.content.map((project) => project.projectUrl);
    const rightSectionTitles = ProjectPanelData.editorial.content.map((project) => project.title);
    const rightSectionLinks = ProjectPanelData.editorial.content.map((project) => project.projectUrl);
    const leftSectionTitles = ["O mnie", "Projekty Brandingowe", "Projekty Wydawnicze"];
    const leftSectionLinks = [CONFIG.PATHS.ABOUT, CONFIG.PATHS.BRANDING_SECTION, CONFIG.PATHS.EDITORIAL_SECTION];

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
