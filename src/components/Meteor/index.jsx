import { Meteor } from "./styles";

const meteors = [
  // Nascem à direita e atravessam para baixo/esquerda
  {
    top: 12,
    left: 96,
    direction: "right",
    duration: 8,
    delay: 1,
    size: 180,
  },
  {
    top: 38,
    left: 94,
    direction: "right",
    duration: 11,
    delay: 7,
    size: 145,
  },

  // Nascem à esquerda e atravessam para baixo/direita
  {
    top: 18,
    left: -8,
    direction: "left",
    duration: 10,
    delay: 4,
    size: 165,
  },
  {
    top: 48,
    left: -10,
    direction: "left",
    duration: 13,
    delay: 11,
    size: 125,
  },

  // Nascem no topo e descem em diagonal
  {
    top: -12,
    left: 28,
    direction: "top",
    duration: 9,
    delay: 3,
    size: 150,
  },
  {
    top: -15,
    left: 62,
    direction: "top",
    duration: 12,
    delay: 9,
    size: 135,
  },
];

function Meteors() {
  return (
    <>
      {meteors.map((meteor, index) => (
        <Meteor
          key={`${meteor.direction}-${index}`}
          $top={meteor.top}
          $left={meteor.left}
          $direction={meteor.direction}
          $duration={meteor.duration}
          $delay={meteor.delay}
          $size={meteor.size}
        />
      ))}
    </>
  );
}

export default Meteors;