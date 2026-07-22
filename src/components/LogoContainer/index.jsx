import { Container } from "./styles";

import { useUniverse } from "../../context/useUniverse";
import { STORY_PHASES } from "../../constants/storyPhases";

function LogoContainer({ children }) {
  const { phase } = useUniverse();

  return (
    <Container
      style={{
        animationPlayState:
          phase === STORY_PHASES.LOGO_FORMATION
            ? "running"
            : "paused",
      }}
    >
      {children}
    </Container>
  );
}

export default LogoContainer;