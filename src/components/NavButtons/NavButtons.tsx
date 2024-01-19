import * as P from "./NavButtons.parts";
import IconNext from "../NavIcon/NavIcon";

export default function NavButtons() {
  return (
    <P.ButtonsWrapper>
      <IconNext name="previous" color="#F1DB13" size={50} />
      <IconNext name="next" color="#F1DB13" size={50} />
    </P.ButtonsWrapper>
  );
}
