import { Link } from "react-router-dom";
import { useThemeContext } from "../../../contexts/ThemeContext";
import Divider from "../../generics/Divider/Divider";
import Flexbox from "../../generics/Flexbox/Flexbox";
import Text from "../../generics/Text/Text";
import * as P from "./FooterSection.parts";

interface FooterSectionProps {
    sectionName: string;
    listItems: string[];
    links: string[];
}

export default function FooterSection({ sectionName, listItems, links }: FooterSectionProps) {
    const {
        theme: { colors },
    } = useThemeContext();

    function renderList(listItems: string[]) {
        const values = Object.values(listItems);

        return values.map((value, idx) => (
            <Link key={value} to={links[idx]}>
                <P.StyledLi>
                    <Text size="s" color={colors.white[1]}>
                        {value}
                    </Text>
                </P.StyledLi>
            </Link>
        ));
    }

    return (
        <Flexbox $direction="column" $marginT="40px" $marginL="auto" $marginR="auto">
            <Text size="xl" color={colors.white[1]} lineHeight={1.2}>
                {sectionName}
            </Text>
            <Divider color={colors.leading.secondary[2]} />
            <P.StyledUl>{renderList(listItems)}</P.StyledUl>
        </Flexbox>
    );
}
