import { Meteor } from "./styles";

const meteors = [
  {
    top: 12,
    left: 96,
    width: 180,
    duration: 7,
    delay: 0,
    opacity: 1,
  },
  {
    top: 28,
    left: 92,
    width: 120,
    duration: 10,
    delay: 4,
    opacity: 0.8,
  },
  {
    top: 8,
    left: 82,
    width: 220,
    duration: 13,
    delay: 8,
    opacity: 0.9,
  },
  {
    top: 42,
    left: 98,
    width: 160,
    duration: 9,
    delay: 12,
    opacity: 0.7,
  },
  {
    top: 20,
    left: 88,
    width: 140,
    duration: 11,
    delay: 16,
    opacity: 1,
  },
];

function Meteors() {
  return (
    <>
      {meteors.map((meteor, index) => (
        <Meteor
          key={index}
          top={meteor.top}
          left={meteor.left}
          width={meteor.width}
          duration={meteor.duration}
          delay={meteor.delay}
          opacity={meteor.opacity}
        />
      ))}
    </>
  );
}

export default Meteors;