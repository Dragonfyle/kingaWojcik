import { CONFIG } from "$constants/config";
import { ProjectPanelData } from "$data/ProjectPanelData";
import navigationItems from "$data/navigationData";

import FooterSection from "../FooterSection";

export default function FooterSections() {
    const middleSectionTitles = ProjectPanelData.branding.content.map((project) => project.title);
    const middleSectionLinks = ProjectPanelData.branding.content.map((project) => project.projectUrl);
    const rightSectionTitles = ProjectPanelData.illustrations.content.map((project) => project.title);
    const rightSectionLinks = ProjectPanelData.illustrations.content.map((project) => project.projectUrl);
    const leftSectionTitles = [...navigationItems.map((item) => item.label), CONFIG.EMAIL];
    const leftSectionLinks = [
        CONFIG.PATHS.ABOUT,
        CONFIG.PATHS.ILLUSTRATIONS_SECTION,
        CONFIG.PATHS.BRANDING_SECTION,
        CONFIG.PATHS.ARTICLES,
    ];

    return (
        <div className="w-89% my-0 flex flex-col flex-nowrap justify-between gap-y-16 m:flex-row m:gap-5">
            <FooterSection sectionName="Menu" listItems={leftSectionTitles} links={leftSectionLinks} />
            <FooterSection
                sectionName="Projekty Brandingowe"
                listItems={middleSectionTitles}
                links={middleSectionLinks}
            />

            <FooterSection sectionName="Ilustracje" listItems={rightSectionTitles} links={rightSectionLinks} />
        </div>
    );
}
