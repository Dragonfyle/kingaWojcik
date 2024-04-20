import { ItemIndicatorProps } from "./ItemIndicator.types";
import * as P from "./ItemIndicator.parts";

export default function ItemIndicator({ isActive }: ItemIndicatorProps) {
    return <P.Dot $isActive={isActive} />;
}
