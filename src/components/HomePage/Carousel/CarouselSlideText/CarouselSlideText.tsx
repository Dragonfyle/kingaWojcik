import { useThemeContext } from "$contexts/ThemeContext";
import * as P from "./CarouselSlideText.parts";
import { CarouselSlideTextProps } from "./CarouselSlideText.types";

export default function CarouselSlideText({ isActive, prelude, title, description }: CarouselSlideTextProps) {
    const { theme } = useThemeContext();

    return (
        <P.DescriptionWrapper $isActive={isActive}>
            <P.StyledP size="2xl" color={theme.colors.white[1]}>
                {prelude}
            </P.StyledP>
            <P.StyledH2 bold size="4xl" lineHeight={1.2} color={theme.colors.white[1]}>
                {title}
            </P.StyledH2>
            <P.StyledP size="2xl" color={theme.colors.white[1]}>
                {description}
            </P.StyledP>
        </P.DescriptionWrapper>
    );
}
