import Flexbox from "$generics/Flexbox/Flexbox";
import Text from "$generics/Text/Text";
import { AboutSectionData } from "$data/aboutSectionData";
import * as P from "./AboutAuthor.parts";

interface AboutSectionProps {
    source: AboutSectionData;
}

export default function AboutAuthor({ source }: AboutSectionProps) {
    return (
        <P.StyledSection>
            <Flexbox>
                <img src={source.imgUrl} />
            </Flexbox>
            <P.StyledHeader>
                <Text bold uppercase size="xl">
                    Kinga Ewa Wójcik
                </Text>
            </P.StyledHeader>
            <Flexbox $wrap="nowrap" $colGap="100px">
                <Text>{source.description}</Text>
            </Flexbox>
        </P.StyledSection>
    );
}
