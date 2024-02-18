import { PropsWithChildren } from "react";
import * as P from "./ProjectFeature.parts";
import Text from "../../../generics/Text/Text";
import Flexbox from "../../../generics/Flexbox/Flexbox";

interface ProjectFeatureProps extends PropsWithChildren {
    withDescription?: boolean;
    withHeader?: boolean;
}

export default function ProjectFeature({ children, withDescription = true, withHeader = true }: ProjectFeatureProps) {
    return (
        <>
            <Flexbox $marginT="30px">
                {withHeader && (
                    <Text tag="h1" size="3xl" bold>
                        Header
                    </Text>
                )}
            </Flexbox>
            <P.FeatureWrapper>
                {children}
                {withDescription && (
                    <P.DescriptionWrapper>
                        <Text tag="h3" bold size="xl">
                            Header
                        </Text>
                        <Text size="l">Adipisicing proident laboris adipisicing ut minim officia non.</Text>
                    </P.DescriptionWrapper>
                )}
            </P.FeatureWrapper>
        </>
    );
}
