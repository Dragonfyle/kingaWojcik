import Link from "next/link";

import Divider from "$generics/Divider/Divider";

import { FooterSectionProps } from "./FooterSection.types";
import { defaultTheme } from "$styles/DefaultTheme";

export default function FooterSection({ sectionName, items }: FooterSectionProps) {
    function renderList(items: { label: string; url?: string }[]) {
        return items.map((item) =>
            item.url ? (
                <Link className="no-underline" key={item.url} href={item.url}>
                    <li className="flex">
                        <span className="text-s text-white-2 l:text-ms">{item.label}</span>
                    </li>
                </Link>
            ) : (
                <li className="flex" key={item.label}>
                    <span className="text-s text-white-2 l:text-ms">{item.label}</span>
                </li>
            )
        );
    }

    return (
        <div className="flex w-full flex-col gap-y-3">
            <p className="text-l text-white-2">{sectionName}</p>

            <Divider color={defaultTheme.colors.leading.secondary[2]} />

            <ul className="flex list-none flex-col gap-1">{renderList(items)}</ul>
        </div>
    );
}
