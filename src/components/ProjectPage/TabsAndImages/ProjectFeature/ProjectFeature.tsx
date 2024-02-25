import * as P from "./ProjectFeature.parts";
import Text from "../../../generics/Text/Text";
import Flexbox from "../../../generics/Flexbox/Flexbox";
import { Feature } from "../../../../data/TabbedGalleryData";

interface ProjectFeatureProps {
    source: Feature;
    withH1?: boolean;
    withH3?: boolean;
    withSideDescription?: boolean;
    withTopDescription?: boolean;
    withBottomDescription?: boolean;
}

export default function ProjectFeature({
    source,
    withH1 = false,
    withH3 = false,
    withSideDescription = false,
    withTopDescription = false,
    withBottomDescription = false,
}: ProjectFeatureProps) {
    return (
        <>
            <Flexbox $marginT="50px" $direction="column">
                {withH1 && (
                    <Text tag="h1" size="3xl" bold>
                        {source.headerH1}
                    </Text>
                )}

                {withTopDescription && (
                    <Flexbox $marginB="60px">
                        <Text size="xl">{source.topDescription}</Text>
                    </Flexbox>
                )}
            </Flexbox>
            <P.FeatureWrapper>
                <Flexbox $wrap="nowrap">
                    <img src={source.img} />
                    {withSideDescription && (
                        <P.DescriptionWrapper>
                            {withH3 && (
                                <Text tag="h3" bold size="xl">
                                    {source.headerH3}
                                </Text>
                            )}
                            <Text size="l">{source.sideDescription}</Text>
                        </P.DescriptionWrapper>
                    )}
                </Flexbox>
                <Flexbox $marginT="50px">
                    {withBottomDescription && <Text size="xl">{source.bottomDescription}</Text>}
                </Flexbox>
            </P.FeatureWrapper>
        </>
    );
}
