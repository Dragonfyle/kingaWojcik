import * as P from "./CarouselSlideText.parts";

interface CarouselSlideText extends React.PropsWithChildren {
    isActive: boolean;
    title: string;
    description: string;
}

export default function CarouselSlideText({ isActive, title, description }: CarouselSlideText) {
    return (
        <P.DescriptionWrapper $isActive={isActive}>
            <P.StyledH2>{title}</P.StyledH2>
            <P.StyledP>{description}</P.StyledP>
        </P.DescriptionWrapper>
    );
}
