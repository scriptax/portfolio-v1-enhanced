"use client";

import { ReactNode, createContext, useState } from "react";

interface AccentContextType {
  accent: string;
  setAccent: (mode: string) => void;
}

export const AccentContext = createContext<AccentContextType>({
  accent: "blue",
  setAccent: () => {},
});

export default function AccentProvider({ children }: { children: ReactNode }) {
  const [accent, setAccent] = useState("blue");

  return (
    <AccentContext.Provider value={{ accent, setAccent }}>
      {children}
    </AccentContext.Provider>
  );
}
