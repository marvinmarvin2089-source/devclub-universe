import { useContext } from "react";

import UniverseContext from "./UniverseContext";

export function useUniverse() {
  const context = useContext(UniverseContext);

  if (!context) {
    throw new Error(
      "useUniverse precisa ser usado dentro de UniverseProvider"
    );
  }

  return context;
}