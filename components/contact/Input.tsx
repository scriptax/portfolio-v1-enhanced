"use client";

import React, { useContext } from "react";
import { AccentContext } from "@/contexts/AccentProvider";
import { Overpass } from "next/font/google";

const overpass = Overpass({
  subsets: ["latin"],
  weight: ["100", "200"],
});

type InputProps = {
  name: string;
  placeholder: string;
  type: string;
  value: string;
  movePlaceHolder: boolean;
  control: {
    changeHandler: (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => void;
    blurHandler: (
      e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => void;
    focusHandler: (
      e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => void;
  };
};

function Input(props: InputProps) {
  const { accent } = useContext(AccentContext);
  const {
    name,
    placeholder,
    type,
    value,
    movePlaceHolder,
    control: { changeHandler, blurHandler, focusHandler },
  } = props;

  return (
    <>
      {type === "textarea" ? (
        <label className={`inpt inpt-${accent} mb-2`}>
          <textarea
            className={`font-md pl-1 pt-1 ${overpass.className}`}
            name={name}
            value={value}
            onChange={changeHandler}
            onBlur={blurHandler}
            onFocus={focusHandler}
            required
          />
          <span></span>
          <span></span>
          <span className={`${movePlaceHolder && "input-filled"} font-md`}>
            {placeholder}
          </span>
        </label>
      ) : (
        <label className={`inpt inpt-${accent} mb-2`}>
          <input
            className={`font-md pl-1 ${overpass.className}`}
            name={name}
            type={type}
            value={value}
            onChange={changeHandler}
            onBlur={blurHandler}
            onFocus={focusHandler}
            required
          />
          <span></span>
          <span></span>
          <span className={`${movePlaceHolder && "input-filled"} font-md`}>
            {placeholder}
          </span>
        </label>
      )}
    </>
  );
}

export default Input;
