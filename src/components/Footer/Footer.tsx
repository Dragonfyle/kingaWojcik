import { CONFIG } from "../../constants/config";
import { ProjectPanelData } from "../../data/projectPanelData";
import Flexbox from "../generics/Flexbox/Flexbox";
import * as P from "./Footer.parts";
import FooterSection from "./FooterSection/FooterSection";

export default function Footer() {
    const middleSectionTitles = ProjectPanelData.branding.content.map((project) => project.title);
    const middleSectionLinks = ProjectPanelData.branding.content.map((project) => project.projectUrl);
    const rightSectionTitles = ProjectPanelData.editorial.content.map((project) => project.title);
    const rightSectionLinks = ProjectPanelData.branding.content.map((project) => project.projectUrl);
    const leftSectionTitles = ["O mnie", "Kontakt", "Projekty Brandingowe", "Projekty Wydawnicze", "Współpraca"];
    const leftSectionLinks = [
        CONFIG.PATHS.ABOUT,
        CONFIG.PATHS.CONTACT,
        CONFIG.PATHS.BRANDING_SECTION,
        CONFIG.PATHS.EDITORIAL_SECTION,
        CONFIG.PATHS.COLLABORATION,
    ];

    return (
        <P.Wrapper>
            <Flexbox $width="69%" $wrap="nowrap" $marginL="11%">
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
            </Flexbox>
        </P.Wrapper>
    );
}
