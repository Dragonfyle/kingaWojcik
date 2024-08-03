import Text from "$components/generics/Text";
import { useThemeContext } from "$contexts/ThemeContext";
import { CarouselSlideTextProps } from "./CarouselSlideText.types";
import * as P from "./CarouselSlideText.parts";

export default function CarouselSlideText({ isActive, prelude, title, description }: CarouselSlideTextProps) {
    const { theme } = useThemeContext();

    return (
        <P.DescriptionWrapper $isActive={isActive}>
            <Text size="xl" color={theme.colors.leading.main[1]}>
                {prelude}
            </Text>
            <P.Title tag="h2" bold size="4xl" lineHeight={1.2} color={theme.colors.leading.main[1]}>
                {title}
            </P.Title>
            <Text size="xl" color={theme.colors.leading.main[1]}>
                {description}
            </Text>
        </P.DescriptionWrapper>
    );
}
