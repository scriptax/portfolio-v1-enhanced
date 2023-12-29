"use client";

import { useContext, useState } from "react";
import { AccentContext } from "../contexts/AccentProvider";

const accents = ["secondary", "info", "error", "blue", "green", "purple"];

const AccentMenu = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const { accent, setAccent } = useContext(AccentContext);

  return (
    <>
      <div
        className='accent-btn font-md display-i-b'
        onClick={() => {
          setOpenMenu(!openMenu);
        }}
      >
        <span>Theme</span>
        <div className={`bg-${accent}`}></div>
      </div>
      <div
        className={`accent-pallete bg-primary-light-1 p-1 ${
          openMenu && "accent-pallete-open"
        }`}
      >
        {accents.map((color, index) => (
          <div
            key={index}
            className={`bg-${color} display-i-b mt-2`}
            onClick={() => {
              setAccent(color);
              setOpenMenu(!openMenu);
            }}
          ></div>
        ))}
      </div>
    </>
  );
};

export default AccentMenu;
