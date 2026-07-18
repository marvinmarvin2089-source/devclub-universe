import { createContext, useContext, useState } from "react";

const UniverseContext = createContext();

export function UniverseProvider({ children }) {
  const [phase, setPhase] = useState("idle");

  return (
    <UniverseContext.Provider
      value={{
        phase,
        setPhase,
      }}
    >
      {children}
    </UniverseContext.Provider>
  );
}

export function useUniverse() {
  return useContext(UniverseContext);
}