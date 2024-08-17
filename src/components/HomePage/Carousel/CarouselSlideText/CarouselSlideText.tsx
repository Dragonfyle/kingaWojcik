import { useThemeContext } from "$contexts/ThemeContext";
import { CarouselSlideTextProps } from "./CarouselSlideText.types";
import * as P from "./CarouselSlideText.parts";

export default function CarouselSlideText({ isActive, title, description }: CarouselSlideTextProps) {
    const { theme } = useThemeContext();

    return (
        <P.DescriptionWrapper $isActive={isActive}>
            <P.Title tag="h2" bold size="4xl" lineHeight={1.2} color={theme.colors.leading.main[2]}>
                {title}
            </P.Title>
            <P.SubText size="xl" color={theme.colors.leading.main[2]}>
                {description}
            </P.SubText>
        </P.DescriptionWrapper>
    );
}
