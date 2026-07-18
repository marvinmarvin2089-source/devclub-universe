import { Star } from './styles';

const colors = [
  '#FFFFFF',
  '#D6E8FF',
  '#E9D8FD',
  '#C8FFE5',
];

const stars = Array.from({ length: 50 }, () => ({
  top: Math.random() * 100,
  left: Math.random() * 100,
  size: Math.random() * 4 + 1,
  duration: Math.random() * 4 + 2,
  delay: Math.random() * 5,
  color: colors[Math.floor(Math.random() * colors.length)],
}));

function Stars() {
  return (
    <>
      {stars.map((star, index) => (
        <Star
  key={index}
  top={star.top}
  left={star.left}
  size={star.size}
  duration={star.duration}
  delay={star.delay}
  color={star.color}
/>
      ))}
    </>
  );
}

export default Stars;