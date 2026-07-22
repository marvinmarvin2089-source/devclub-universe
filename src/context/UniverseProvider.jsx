import { useState } from "react";
import UniverseContext from "./UniverseContext";

export function UniverseProvider({ children }) {
  const [phase, setPhase] = useState("idle");
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  function openAbout() {
    setIsAboutOpen(true);
  }

  function closeAbout() {
    setIsAboutOpen(false);
  }

  return (
    <UniverseContext.Provider
      value={{
        phase,
        setPhase,
        isAboutOpen,
        openAbout,
        closeAbout,
      }}
    >
      {children}
    </UniverseContext.Provider>
  );
}