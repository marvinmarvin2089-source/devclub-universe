import { useEffect } from "react";

export function useAnimationFrame(callback) {
  useEffect(() => {
    let animationFrameId;

    function animate() {
      callback();
      animationFrameId = requestAnimationFrame(animate);
    }

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [callback]);
}