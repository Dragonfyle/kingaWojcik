import aboutKinga from "$img/author/author_kinga_wojcik.jpg";
import { Link } from "react-router-dom";
import { CONFIG } from "$constants/config";
import * as P from "./AboutSection.parts";

export default function AboutSection() {
    const aboutPageUrl = CONFIG.PATHS.ABOUT;

    return (
        <P.StyledSection>
            <Link to={aboutPageUrl}>
                <img src={aboutKinga} height={200} />
            </Link>
        </P.StyledSection>
    );
}
