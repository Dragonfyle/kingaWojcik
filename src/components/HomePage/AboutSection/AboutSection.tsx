import { wspolpraca } from "../Carousel/CarouselSlide/CarouselSlide.utils";
import Flexbox from "../../generics/Flexbox/Flexbox";
import Text from "../../generics/Text/Text";
import * as P from "./AboutSection.parts";
import { Link } from "react-router-dom";
import { CONFIG } from "../../../constants/config";

export default function AboutSection() {
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
                        <Text>
                            Duis mollit et exercitation esse laborum eiusmod non dolor ad in non aute non.Amet
                            reprehenderit commodo excepteur cupidatat et aliqua commodo aute occaecat officia dolor
                            sint. Anim nostrud aliquip nostrud et quis. Duis aliqua enim ad ex nulla do quis enim. Culpa
                            quis aliqua labore cupidatat dolore do irure sint ea ad. Mollit tempor laboris in nostrud
                            minim laborum occaecat ex enim aute. Sit id reprehenderit adipisicing aliqua pariatur culpa
                            cillum ea consequat incididunt. Exercitation adipisicing officia quis qui laborum mollit ea
                            exercitation consectetur deserunt.
                        </Text>
                        <img src={wspolpraca[0]} width={200} />
                    </Flexbox>
                </Flexbox>
            </Link>
        </P.StyledSection>
    );
}
