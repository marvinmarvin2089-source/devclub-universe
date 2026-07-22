import { Container } from "./styles";

import Nebula from "../Nebula";
import Stars from "../Stars";
import Meteors from "../Meteor";
import BigBang from "../BigBang";
import CoreLight from "../CoreLight";
import Flash from "../Flash";
import LogoEnergy from "../LogoEnergy";
import LogoContainer from "../LogoContainer";
import Particles from "../Particles";
import Shockwave from "../Shockwave";
import OfficialLogo from "../OfficialLogo";

import { useUniverse } from "../../context/useUniverse";
import { STORY_PHASES } from "../../constants/storyPhases";

function Universe() {
  const { phase } = useUniverse();

  const scale =
    phase === STORY_PHASES.GRAVITY
      ? 0.98
      : phase === STORY_PHASES.COLLAPSE
      ? 0.94
      : phase === STORY_PHASES.BIG_BANG
      ? 1.08
      : 1;

  const showParticles = ![
    STORY_PHASES.LOGO_REVEAL,
    STORY_PHASES.MOVE_LOGO,
    STORY_PHASES.READY,
  ].includes(phase);

  const showOfficialLogo = [
    STORY_PHASES.LOGO_REVEAL,
    STORY_PHASES.MOVE_LOGO,
    STORY_PHASES.READY,
  ].includes(phase);

  return (
    <Container
      style={{
        transform: `scale(${scale})`,
        transition: "transform 3s ease-in-out",
      }}
    >
      <Nebula />

      <Stars />

      <Meteors />

      <LogoContainer>
        {showParticles && <Particles />}

        {phase === STORY_PHASES.FLASH && <Flash />}

        {phase === STORY_PHASES.BIG_BANG && <Shockwave />}

        {phase === STORY_PHASES.LOGO_FORMATION && (
          <LogoEnergy />
        )}

        {showOfficialLogo && <OfficialLogo />}
      </LogoContainer>

      <BigBang />

      <CoreLight />
    </Container>
  );
}

export default Universe;