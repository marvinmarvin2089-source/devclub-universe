import LogoMark from "../LogoMark";

import {
  Container,
  BrandName,
  DevText,
  ClubText,
  Hint,
} from "./styles";

import { useUniverse } from "../../context/useUniverse";
import { STORY_PHASES } from "../../constants/storyPhases";

function OfficialLogo() {
  const { phase, openAbout } = useUniverse();

  const shouldMove =
    phase === STORY_PHASES.MOVE_LOGO ||
    phase === STORY_PHASES.READY;

  function handleLogoClick() {
    if (!shouldMove) return;

    openAbout();
  }

  return (
    <Container
      type="button"
      $move={shouldMove}
      $clickable={shouldMove}
      onClick={handleLogoClick}
      aria-label="Conhecer a história da DevClub"
    >
      <LogoMark />

      <BrandName>
        <DevText>DEV</DevText>
        <ClubText>CLUB</ClubText>
      </BrandName>

      <Hint $visible={phase === STORY_PHASES.READY}>
        Conheça a DevClub
      </Hint>
    </Container>
  );
}

export default OfficialLogo;