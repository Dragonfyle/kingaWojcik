import { Link } from "react-router-dom";

import { useThemeContext } from "$contexts/ThemeContext";
import Divider from "$generics/Divider/Divider";
import Flexbox from "$generics/Flexbox/Flexbox";
import Text from "$generics/Text/Text";

import { FooterSectionProps } from "./FooterSection.types";
import * as P from "./FooterSection.parts";

export default function FooterSection({ sectionName, listItems, links }: FooterSectionProps) {
    const {
        theme: { colors },
    } = useThemeContext();

    function renderList(listItems: string[]) {
        const values = Object.values(listItems);

        return values.map((value, idx) =>
            links[idx] ? (
                <Link key={value} to={links[idx]}>
                    <P.StyledLi>
                        <Text size="s" color={colors.white[1]}>
                            {value}
                        </Text>
                    </P.StyledLi>
                </Link>
            ) : (
                <P.StyledLi key={value}>
                    <Text size="s" color={colors.white[1]}>
                        {value}
                    </Text>
                </P.StyledLi>
            )
        );
    }

    return (
        <Flexbox $direction="column" $marginT="40px" $marginL="auto" $marginR="auto">
            <P.FooterSectionTitle size="xl" color={colors.white[1]} lineHeight={1.2}>
                {sectionName}
            </P.FooterSectionTitle>
            <Divider color={colors.leading.secondary[2]} />
            <P.StyledUl>{renderList(listItems)}</P.StyledUl>
        </Flexbox>
    );
}
