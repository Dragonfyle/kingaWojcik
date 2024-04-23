import { DividerProps } from "./Divider.type";
import * as P from "./Divider.parts";

export default function Divider({
    height = 1.5,
    width = "90%",
    mLeft = 0,
    mRight = 0,
    mTop = 10,
    mBot = 10,
    color = "rgb(0, 0, ,0)",
}: DividerProps) {
    return (
        <P.StyledDiv
            $height={height}
            $width={width}
            $mBot={mBot}
            $mLeft={mLeft}
            $mRight={mRight}
            $mTop={mTop}
            $color={color}
        />
    );
}
