import { Cloud } from "./styles";
import { useMousePosition } from "../../hooks/useMousePosition";

function Nebula() {
  const { x, y } = useMousePosition();

  return (
    <Cloud
      style={{
        transform: `translate(${x * 0.8}px, ${y * 0.8}px)`,
      }}
    />
  );
}

export default Nebula;