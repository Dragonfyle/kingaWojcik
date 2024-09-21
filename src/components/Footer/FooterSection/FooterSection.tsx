import Link from "next/link";

import Divider from "$generics/Divider/Divider";
import Text from "$generics/Text/Text";

import { FooterSectionProps } from "./FooterSection.types";
import { defaultTheme } from "$styles/DefaultTheme";

export default function FooterSection({ sectionName, listItems, links }: FooterSectionProps) {
    function renderList(listItems: string[]) {
        const values = Object.values(listItems);

        return values.map((value, idx) =>
            links[idx] ? (
                <Link className="no-underline" key={value} href={links[idx] ?? ""}>
                    <li className="flex">
                        <Text className="text-s hover:text-leading-main-2" color={defaultTheme.colors.white[1]}>
                            {value}
                        </Text>
                    </li>
                </Link>
            ) : (
                <li className="flex" key={value}>
                    <Text className="hover:text-leading-main-2" color={defaultTheme.colors.white[1]}>
                        {value}
                    </Text>
                </li>
            )
        );
    }

    return (
        <div className="flex w-full flex-col gap-y-3">
            <Text className="xxl:text-l" color={defaultTheme.colors.white[1]} lineHeight={1.2}>
                {sectionName}
            </Text>
            <Divider color={defaultTheme.colors.leading.secondary[2]} />
            <ul className="flex list-none flex-col gap-1">{renderList(listItems)}</ul>
        </div>
    );
}
