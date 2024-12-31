import StyledTinaMarkup from "$components/generics/StyledTinaMarkup";

import { ListItemProps } from "./ListItem.types";

export default function ListItem({ source }: ListItemProps) {
    const descriptions = Object.entries(source)
        .filter(([key]) => key.includes("description"))
        .map(([, value]) => value);

    function renderDescriptions(descriptions: string[]) {
        return descriptions.map((description) => {
            return (
                <div className="flex flex-col gap-4">
                    <StyledTinaMarkup content={description} />
                </div>
            );
        });
    }

    return (
        <div className="grid grid-cols-[2.1fr_6fr] gap-10 xxl:grid-cols-[1.5fr_6fr]">
            <div className="flex flex-col items-end">
                <p className="text-nowrap text-right text-ms">{source.title1}</p>

                {source.title2 && <p className="text-right text-ms">{source.title2}</p>}
            </div>

            <div className="flex flex-col pl-[5%] *:text-s m:*:text-m">{renderDescriptions(descriptions)}</div>
        </div>
    );
}
