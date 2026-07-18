import { useEffect, useState } from "react";

export function useMousePosition() {
  const [position, setPosition] = useState({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });

  useEffect(() => {
    function handleMouseMove(event) {
      setPosition({
        x: event.clientX,
        y: event.clientY,
      });
    }

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return {
  x: (position.x - window.innerWidth / 2) / 50,
  y: (position.y - window.innerHeight / 2) / 50,
};
}