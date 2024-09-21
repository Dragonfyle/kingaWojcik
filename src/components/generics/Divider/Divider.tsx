import { DividerProps } from "./Divider.type";

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
        <div
            style={{
                height: `${height}px`,
                width: width,
                marginLeft: `${mLeft}px`,
                marginRight: `${mRight}px`,
                marginTop: `${mTop}px`,
                marginBottom: `${mBot}px`,
                backgroundColor: color,
            }}
        />
    );
}
