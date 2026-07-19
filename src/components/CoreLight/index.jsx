import { Aura, Light } from "./styles";
import { useUniverse } from "../../context/UniverseContext";

function CoreLight() {
  const { phase } = useUniverse();

  return (
    <>
      <Aura
        style={{
          opacity:
            phase === "idle"
              ? 0.25
              : phase === "core-light"
              ? 0.5
              : phase === "gravity"
              ? 0.8
              : 1,
        }}
      />

      <Light
        style={{
          transform:
            phase === "collapse"
              ? "translate(-50%, -50%) scale(2)"
              : "translate(-50%, -50%) scale(1)",
        }}
      />
    </>
  );
}

export default CoreLight;