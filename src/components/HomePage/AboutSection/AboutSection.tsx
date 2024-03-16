import { wspolpraca } from "../Carousel/CarouselSlide/CarouselSlide.utils";
import Flexbox from "../../generics/Flexbox/Flexbox";
import Text from "../../generics/Text/Text";
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
                <Flexbox $direction="column">
                    <P.StyledHeader>
                        <Text bold uppercase size="xl">
                            Sint commodo
                        </Text>
                    </P.StyledHeader>
                    <Flexbox $wrap="nowrap" $colGap="100px">
                        <Text>{source.description}</Text>
                        <img src={source.imgUrl} width={200} />
                    </Flexbox>
                </Flexbox>
            </Link>
        </P.StyledSection>
    );
}
