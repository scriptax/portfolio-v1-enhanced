"use client";

import { AccentContext } from "@/contexts/AccentProvider";
import { useContext } from "react";
import * as icons from "@/utils/icons";
import Image from "next/image";

function Footer({ socialLinks }: { socialLinks: string[][] }) {
  const { accent } = useContext(AccentContext);
  return (
    <footer className={`bg-${accent} footerborder pt-3 pb-3 textal-c`}>
      <a className='link link-black font-md mb-1' href={socialLinks[0][1]}>
        {socialLinks[0][1].replace("mailto:", "")}
      </a>
      <br />
      {socialLinks.map(([name, link], index) => (
        <a
          className='social-icons mr-1 ml-1'
          key={index}
          href={link}
          title={name}
          target='blank'
        >
          <Image height='30' src={icons[name as keyof object]} alt={name} />
        </a>
      ))}
      <a className='back-to-top display-b mt-2' href='/#'>
        <Image height='30' src={icons.upIcon} alt='up' />
        <p className='fontwt-600'>Back To Top</p>
      </a>
      <p className='mt-2'>© {new Date().getFullYear()} Majid Moradi</p>
    </footer>
  );
}

export default Footer;
