import { Maybe } from "tina/__generated__/types";

interface FeatureSliceVideoProps {
    width: number;
    height: number;
    isLocal?: Maybe<boolean>;
    videoUrl?: Maybe<string>;
    videoId?: Maybe<string>;
    isGif: boolean;
}

export type { FeatureSliceVideoProps };
