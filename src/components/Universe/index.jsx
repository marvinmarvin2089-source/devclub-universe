import { Container } from "./styles";

import Nebula from "../Nebula";
import Stars from "../Stars";
import Particles from "../Particles";
import Meteors from "../Meteor";
import BigBang from "../BigBang";
import CoreLight from "../CoreLight";

function Universe({
  showNebula,
  showStars,
  showParticles,
  showMeteors,
}) {
  return (
    <Container>
      <BigBang />
      <CoreLight />

      {showNebula && <Nebula />}

      {showStars && <Stars />}

      {showParticles && <Particles />}

      {showMeteors && <Meteors />}
    </Container>
  );
}

export default Universe;