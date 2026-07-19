import { Container } from "./styles";

import Nebula from "../Nebula";
import Stars from "../Stars";
import Particles from "../Particles";
import Meteors from "../Meteor";
import BigBang from "../BigBang";
import CoreLight from "../CoreLight";

function Universe() {
  return (
    <Container>
      <Nebula />

      <Stars />

      <Particles />

      <Meteors />

      <BigBang />

      <CoreLight />
    </Container>
  );
}

export default Universe;