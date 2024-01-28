import * as P from "./CarouselImageDescription.parts";

interface CarouselImageDescription extends React.PropsWithChildren {
    isActive: boolean;
}

export default function CarouselImageDescription({ children, isActive }: CarouselImageDescription) {
    return (
        <P.DescriptionWrapper $isActive={isActive}>
            <P.StyledP>{children}</P.StyledP>
        </P.DescriptionWrapper>
    );
}
