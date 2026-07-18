import { Aura, Light } from "./styles";

import { useUniverse } from "../../context/UniverseContext";

function CoreLight() {
  const { phase } = useUniverse();

  if (phase === "idle") {
    return null;
  }

  return (
    <>
      <Aura />
      <Light />
    </>
  );
}

export default CoreLight;