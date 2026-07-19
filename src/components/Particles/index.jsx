import Particle from "../Particle";

const colors = [
  "#00F5A0",
  "#7B2FF7",
  "#FFFFFF",
];

const particles = Array.from({ length: 25 }, () => ({
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 3 + 2,
  color: colors[Math.floor(Math.random() * colors.length)],
}));

function Particles() {
  return (
    <>
      {particles.map((particle, index) => (
        <Particle
          key={index}
          x={particle.x}
          y={particle.y}
          size={particle.size}
          color={particle.color}
        />
      ))}
    </>
  );
}

export default Particles;