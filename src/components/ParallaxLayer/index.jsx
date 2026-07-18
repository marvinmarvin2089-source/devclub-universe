import { Layer } from "./styles";

function ParallaxLayer({ children, x, y, speed = 1 }) {
  return (
    <Layer
      style={{
        transform: `translate(${x * speed}px, ${y * speed}px)`,
      }}
    >
      {children}
    </Layer>
  );
}

export default ParallaxLayer;