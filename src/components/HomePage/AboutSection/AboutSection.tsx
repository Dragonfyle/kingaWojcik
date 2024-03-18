import aboutKinga from "/author_kinga_wojcik.jpg";
import { Link } from "react-router-dom";
import { CONFIG } from "../../../constants/config";
import * as P from "./AboutSection.parts";
import { AboutSectionData } from "../../../data/aboutSectionData";

interface AboutSectionProps {
    source: AboutSectionData;
}

export default function AboutSection({ source }: AboutSectionProps) {
    const aboutPageUrl = CONFIG.PATHS.ABOUT;

    return (
        <P.StyledSection>
            <Link to={aboutPageUrl}>
                <img src={aboutKinga} height={200} />
            </Link>
        </P.StyledSection>
    );
}
