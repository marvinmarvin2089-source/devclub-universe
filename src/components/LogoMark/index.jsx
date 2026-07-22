import QRCode from "../QRCode";

import { Container, LeftBracket, RightBracket } from "./styles";

function LogoMark() {
  return (
    <Container>
      <LeftBracket>&lt;</LeftBracket>

      <QRCode />

      <RightBracket>/&gt;</RightBracket>
    </Container>
  );
}

export default LogoMark;