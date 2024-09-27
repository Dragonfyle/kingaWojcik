import { AboutGalleryContent } from "tina/__generated__/types";

import ListItem from "./ListItem/ListItem";
import { ListProps } from "./List.types";

export default function List({ source }: ListProps) {
    function renderList(source: AboutGalleryContent) {
        return source.tabItems.map((item) => <ListItem key={item.title1} source={item} />);
    }

    return (
        <section className="flex flex-col items-center gap-12">
            <div className="flex w-full justify-start border-b-2 border-leading-secondary-1">
                <h1 className="text-2xl uppercase">{source.header}</h1>
            </div>

            <div className="flex w-full flex-col justify-center gap-y-8 pr-[1%] xxl:pr-[5%]">{renderList(source)}</div>
        </section>
    );
}
