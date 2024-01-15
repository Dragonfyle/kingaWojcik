import * as P from "./IconNext.parts";
import Icons from "../../assets/Icons.svg";

interface IconNextProps {
  name: string;
  color: string;
  size: number;
}

export default function IconNext({ name, color, size }: IconNextProps) {
  return (
    <P.StyledSvg fill={color} width={size} height={size}>
      <use href={`${Icons}#icon-${name}`} />
    </P.StyledSvg>
  );
}
