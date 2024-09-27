import { Maybe } from "tina/__generated__/types";

interface ColumnDescriptionProps {
    header?: Maybe<string> | undefined;
    description?: any;
    descriptionPosition: "top" | "bottom";
}

export type { ColumnDescriptionProps };
