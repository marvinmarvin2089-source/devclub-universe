import { Explosion } from "./styles";

import { useUniverse } from "../../context/useUniverse";
import { STORY_PHASES } from "../../constants/storyPhases";

function BigBang() {
  const { phase } = useUniverse();

  if (phase !== STORY_PHASES.BIG_BANG) {
    return null;
  }

  return <Explosion />;
}

export default BigBang;