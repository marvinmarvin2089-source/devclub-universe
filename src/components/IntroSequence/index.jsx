import { useEffect, useState } from "react";

import Universe from "../Universe";

function IntroSequence() {
  const [showNebula, setShowNebula] = useState(false);
  const [showStars, setShowStars] = useState(false);
  const [showParticles, setShowParticles] = useState(false);
  const [showMeteors, setShowMeteors] = useState(false);

  useEffect(() => {
    const timers = [
      setTimeout(() => setShowNebula(true), 2000),
      setTimeout(() => setShowStars(true), 3000),
      setTimeout(() => setShowParticles(true), 4000),
      setTimeout(() => setShowMeteors(true), 5000),
    ];

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <Universe
      showNebula={showNebula}
      showStars={showStars}
      showParticles={showParticles}
      showMeteors={showMeteors}
    />
  );
}

export default IntroSequence;