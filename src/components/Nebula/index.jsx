import { Cloud } from "./styles";

import { useMousePosition } from "../../hooks/useMousePosition";
import { useUniverse } from "../../context/useUniverse";
import { STORY_PHASES } from "../../constants/storyPhases";

function Nebula() {
  const { x, y } = useMousePosition();
  const { phase } = useUniverse();

  let scale = 1;

  if (phase === STORY_PHASES.GRAVITY) {
    scale = 0.9;
  }

  if (phase === STORY_PHASES.COLLAPSE) {
    scale = 0.75;
  }

  if (phase === STORY_PHASES.BIG_BANG) {
    scale = 1.6;
  }

  return (
    <Cloud
      style={{
        transform: `
          translate(${x * 0.8}px, ${y * 0.8}px)
          scale(${scale})
        `,
        transition: "transform 1.2s ease-out",
      }}
    />
  );
}

export default Nebula;