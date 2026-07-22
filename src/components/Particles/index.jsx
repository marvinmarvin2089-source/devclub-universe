import Particle from "../Particle";

import { logoPoints } from "../../story/logoPoints";

const colors = [
  "#00F5A0",
  "#7B2FF7",
  "#FFFFFF",
];

const minimumX = Math.min(
  ...logoPoints.map((point) => point.x)
);

const maximumX = Math.max(
  ...logoPoints.map((point) => point.x)
);

const minimumY = Math.min(
  ...logoPoints.map((point) => point.y)
);

const maximumY = Math.max(
  ...logoPoints.map((point) => point.y)
);

const logoCenterX = (minimumX + maximumX) / 2;
const logoCenterY = (minimumY + maximumY) / 2;

/*
 * Reduzimos o desenho porque suas coordenadas originais
 * ultrapassam a largura de 0% a 100% da tela.
 */
const logoScale = 0.62;

const particles = logoPoints.map((point) => ({
  x: Math.random() * 100,
  y: Math.random() * 100,

  targetX:
    50 + (point.x - logoCenterX) * logoScale,

  targetY:
    50 + (point.y - logoCenterY) * logoScale,

  size: Math.random() * 3 + 2,

  color:
    colors[Math.floor(Math.random() * colors.length)],
}));

function Particles() {
  return (
    <>
      {particles.map((particle, index) => (
        <Particle
          key={index}
          x={particle.x}
          y={particle.y}
          targetX={particle.targetX}
          targetY={particle.targetY}
          size={particle.size}
          color={particle.color}
        />
      ))}
    </>
  );
}

export default Particles;