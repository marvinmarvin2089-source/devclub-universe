import { useEffect, useState } from "react";

import { Dot } from "./styles";

import { useUniverse } from "../../context/UniverseContext";

function Particle({ x, y, color, size }) {
  const { phase } = useUniverse();
  
  console.log("Partícula:", phase);

  const [position, setPosition] = useState({
    x,
    y,
  });

  useEffect(() => {
    if (phase !== "gravity") return;

    const interval = setInterval(() => {
      setPosition((previous) => ({
        x: previous.x + (50 - previous.x) * 0.01,
        y: previous.y + (50 - previous.y) * 0.01,
      }));
    }, 16);

    return () => clearInterval(interval);
  }, [phase]);

  return (
    <Dot
      color={color}
      size={size}
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
      }}
    />
  );
}

export default Particle;