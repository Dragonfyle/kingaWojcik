import Link from "next/link";

import Divider from "$generics/Divider/Divider";

import { FooterSectionProps } from "./FooterSection.types";
import { defaultTheme } from "$styles/DefaultTheme";

export default function FooterSection({ sectionName, listItems, links }: FooterSectionProps) {
    function renderList(listItems: string[]) {
        const values = Object.values(listItems);

        return values.map((value, idx) =>
            links[idx] ? (
                <Link className="no-underline" key={value} href={links[idx] ?? ""}>
                    <li className="flex">
                        <span className="text-s text-white-2 l:text-ms">{value}</span>
                    </li>
                </Link>
            ) : (
                <li className="flex" key={value}>
                    <span className="text-s text-white-2 l:text-ms">{value}</span>
                </li>
            )
        );
    }

    return (
        <div className="flex w-full flex-col gap-y-3">
            <p className="text-l text-white-2">{sectionName}</p>

            <Divider color={defaultTheme.colors.leading.secondary[2]} />

            <ul className="flex list-none flex-col gap-1">{renderList(listItems)}</ul>
        </div>
    );
}
