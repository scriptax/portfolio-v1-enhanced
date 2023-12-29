"use client";

import { AccentContext } from "@/contexts/AccentProvider";
import { useContext } from "react";

type NavlinkProps = {
  text: string;
  sidebarClose: () => void;
};
export default function Navlink({ text, sidebarClose }: NavlinkProps) {
  const { accent } = useContext(AccentContext);
  return (
    <li className='mr-1'>
      <a
        className={`link link-${accent} pl-1 pr-1`}
        href={"#" + text}
        onClick={sidebarClose}
      >
        {text}
      </a>
    </li>
  );
}
