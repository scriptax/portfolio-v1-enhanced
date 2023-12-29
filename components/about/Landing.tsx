"use client";

import { useContext } from "react";
import { AccentContext } from "../../contexts/AccentProvider";
import personImg from "@/public/icons/github.svg";
import Image from "next/image";
import { Overpass } from "next/font/google";
import { ContentType } from "@/types/shared.types";

const overpass = Overpass({ subsets: ["latin"] });

export default function Landing({ content }: { content: ContentType }) {
  const { accent } = useContext(AccentContext);
  return (
    <header className={`mt-4 p-2 bg-${accent} sectionborder`}>
      <div className='row justify-center align-center gap-2'>
        <div className='col-11-xs col-5-md p-2 text-primary'>
          <p className={`font-md ${overpass.className}`}>Hi👋, My name is</p>
          <h1 className='font-name mt-1'>{content.name}</h1>
          <p className={`font-md mt-1 ${overpass.className}`}>
            {content.role} in {content.location}
          </p>
          <a
            className={`link link-primary font-md mt-1 ${overpass.className}`}
            href='#About'
          >
            More About Me {">>"}
          </a>
        </div>
        <div className='col-11-xs col-6-md col-4-lg'>
          <Image
            className='photoframe'
            draggable='false'
            src={personImg}
            alt='Majid Moradi'
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </div>
    </header>
  );
}
