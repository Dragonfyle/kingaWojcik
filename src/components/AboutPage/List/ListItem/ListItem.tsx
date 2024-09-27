import { TinaMarkdown } from "tinacms/dist/rich-text";
import { ListItemProps } from "./ListItem.types";

export default function ListItem({ source }: ListItemProps) {
    return (
        <div className="grid grid-cols-[2.1fr_6fr] gap-10 xxl:grid-cols-[1.5fr_6fr]">
            <div className="flex flex-col items-end">
                <p className="text-nowrap text-right text-ms">{source.title1}</p>

                {source.title2 && <p className="text-right text-ms">{source.title2}</p>}
            </div>

            <div className="flex flex-col pl-[5%] *:text-s m:*:text-m">
                <div className="flex flex-col gap-4">
                    {source.description1 && <TinaMarkdown content={source.description1} />}
                </div>
                <div className="flex flex-col gap-4">
                    {source.description2 && <TinaMarkdown content={source.description2} />}
                </div>
                <div className="flex flex-col gap-4">
                    {source.description3 && <TinaMarkdown content={source.description3} />}
                </div>
            </div>
        </div>
    );
}
