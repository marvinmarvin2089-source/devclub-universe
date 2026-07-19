import { useRef } from "react";

import { useUniverse } from "../context/UniverseContext";
import { useAnimationFrame } from "../hooks/useAnimationFrame";

function StoryController() {
  const { phase, setPhase } = useUniverse();

  const elapsed = useRef(0);

  useAnimationFrame((delta) => {
    elapsed.current += delta;

    if (elapsed.current >= 1000 && phase === "idle") {
      setPhase("core-light");
    }

    if (elapsed.current >= 5000 && phase === "core-light") {
      setPhase("gravity");
    }

    if (elapsed.current >= 9000 && phase === "gravity") {
      setPhase("collapse");
    }
  });

  return null;
}

export default StoryController;