import Heading from "@/components/shared/Heading";
import Border from "@/components/shared/Border";

import { Overpass } from "next/font/google";

const overpass = Overpass({
  subsets: ["latin"],
  weight: ["100", "200"],
});

export default function About({ text }: { text: string }) {
  return (
    <>
      <section id='About' className='container text-primary-light-9 mb-4 pt-5'>
        <Heading name='About' title='About Me' />
        <p className={`font-md ${overpass.className}`}>{text}</p>
      </section>
      <Border />
    </>
  );
}
