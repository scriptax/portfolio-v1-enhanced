"use client";

import { useContext } from "react";
import { AccentContext } from "@/contexts/AccentProvider";

function Border() {
  const { accent } = useContext(AccentContext);
  return (
    <div className={`seperator-border-${accent}`}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default Border;
