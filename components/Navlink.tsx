"use client";

import { AccentContext } from "@/contexts/AccentProvider";
import { useContext } from "react";

type NavlinkProps = {
  href: string;
  text: string;
  sidebarClose: () => void;
};
export default function Navlink({ href, text, sidebarClose }: NavlinkProps) {
  const { accent } = useContext(AccentContext);
  return (
    <li className='mr-1'>
      <a
        className={`link link-${accent} pl-1 pr-1`}
        href={href}
        onClick={sidebarClose}
      >
        {text}
      </a>
    </li>
  );
}
