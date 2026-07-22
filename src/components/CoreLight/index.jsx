import { Aura, Light } from "./styles";

import { useUniverse } from "../../context/useUniverse";
import { STORY_PHASES } from "../../constants/storyPhases";

function CoreLight() {
  const { phase } = useUniverse();

  return (
    <>
      <Aura
        style={{
          opacity:
            phase === STORY_PHASES.IDLE
              ? 0.25
              : phase === STORY_PHASES.CORE_LIGHT
              ? 0.5
              : phase === STORY_PHASES.GRAVITY
              ? 0.8
              : 1,
        }}
      />

      <Light
        style={{
          transform:
            phase === STORY_PHASES.COLLAPSE
              ? "translate(-50%, -50%) scale(2)"
              : "translate(-50%, -50%) scale(1)",
        }}
      />
    </>
  );
}


export default CoreLight;