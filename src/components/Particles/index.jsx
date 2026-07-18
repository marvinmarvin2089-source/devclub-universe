import { Particle } from "./styles";

const colors = [
  "#00F5A0",
  "#7B2FF7",
  "#FFFFFF",
];

const particles = Array.from({ length: 25 }, () => ({
  top: Math.random() * 100,
  left: Math.random() * 100,
  size: Math.random() * 3 + 1,
  duration: Math.random() * 3 + 2,
  color: colors[Math.floor(Math.random() * colors.length)],
}));

function Particles() {
  return (
    <>
      {particles.map((particle, index) => (
        <Particle
          key={index}
          top={particle.top}
          left={particle.left}
          size={particle.size}
          duration={particle.duration}
          color={particle.color}
        />
      ))}
    </>
  );
}

export default Particles;