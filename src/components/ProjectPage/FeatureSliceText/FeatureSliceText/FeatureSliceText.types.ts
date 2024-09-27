import { Maybe } from "tina/__generated__/types";
import { TinaMarkdownContent } from "tinacms/dist/rich-text";

interface FeatureSliceTextProps {
    header?: Maybe<string>;
    description: TinaMarkdownContent;
}

export type { FeatureSliceTextProps };
