import { useEffect, useState } from "react";

import { Dot } from "./styles";

import { useUniverse } from "../../context/useUniverse";
import { STORY_PHASES } from "../../constants/storyPhases";

function Particle({
  x,
  y,
  targetX,
  targetY,
  color,
  size,
}) {
  const { phase } = useUniverse();

  const [position, setPosition] = useState({
    x,
    y,
  });

  const [born, setBorn] = useState(false);
  const [overshootDone, setOvershootDone] = useState(false);

  // Fade calculado diretamente pela fase
  const fade = phase === STORY_PHASES.LOGO_REVEAL;

  useEffect(() => {
    if (phase === STORY_PHASES.GRAVITY) {
      const interval = setInterval(() => {
        setPosition((previous) => ({
          x: previous.x + (50 - previous.x) * 0.01,
          y: previous.y + (50 - previous.y) * 0.01,
        }));
      }, 16);

      return () => clearInterval(interval);
    }

    if (phase === STORY_PHASES.BIG_BANG) {
      let velocity = 1;

      const interval = setInterval(() => {
        velocity *= 0.985;

        setPosition((previous) => {
          const directionX = previous.x - 50;
          const directionY = previous.y - 50;

          return {
            x: previous.x + directionX * 0.015 * velocity,
            y: previous.y + directionY * 0.015 * velocity,
          };
        });

        if (velocity < 0.05) {
          clearInterval(interval);
        }
      }, 16);

      return () => clearInterval(interval);
    }

    if (phase === STORY_PHASES.LOGO_FORMATION) {
      const interval = setInterval(() => {
        setPosition((previous) => {
          let destinationX = targetX;
          let destinationY = targetY;

          if (!overshootDone) {
            destinationX =
              targetX + (targetX - 50) * 0.08;

            destinationY =
              targetY + (targetY - 50) * 0.08;
          }

          const dx = destinationX - previous.x;
          const dy = destinationY - previous.y;

          const distance = Math.sqrt(
            dx * dx + dy * dy
          );

          const speed =
            distance > 20
              ? 0.09
              : distance > 8
              ? 0.06
              : distance > 2
              ? 0.035
              : 0.018;

          const nextX = previous.x + dx * speed;
          const nextY = previous.y + dy * speed;

          if (!overshootDone && distance < 0.6) {
            setOvershootDone(true);
          }

          if (overshootDone) {
            const finalDistance = Math.hypot(
              targetX - nextX,
              targetY - nextY
            );

            if (finalDistance < 0.4) {
              setBorn(true);
            }
          }

          return {
            x: nextX,
            y: nextY,
          };
        });
      }, 16);

      return () => clearInterval(interval);
    }
  }, [
    phase,
    targetX,
    targetY,
    overshootDone,
  ]);

  return (
    <Dot
      $born={born}
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
        width: `${size}px`,
        height: `${size}px`,
        background: color,
        opacity: fade ? 0 : 1,
        boxShadow: "0 0 8px currentColor",
      }}
    />
  );
}

export default Particle;