import { useThemeContext } from "../../../../contexts/ThemeContext";
import * as P from "./CarouselSlideText.parts";

interface CarouselSlideText extends React.PropsWithChildren {
    isActive: boolean;
    title: string;
    description: string;
}

export default function CarouselSlideText({ isActive, title, description }: CarouselSlideText) {
    const { theme } = useThemeContext();

    return (
        <P.DescriptionWrapper $isActive={isActive}>
            <P.StyledH2 bold size="5xl" lineHeight={1.2} variant={theme.colors.leading.white[1]}>
                {title}
            </P.StyledH2>
            <P.StyledP size="3xl" variant={theme.colors.leading.white[1]}>
                {description}
            </P.StyledP>
        </P.DescriptionWrapper>
    );
}
