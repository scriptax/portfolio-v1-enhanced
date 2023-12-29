"use client";

import { useState } from "react";
import Heading from "@/components/shared/Heading";
import Form from "./Form";
import Button from "../shared/Button";

import { Overpass } from "next/font/google";

const overpass = Overpass({
  subsets: ["latin"],
  weight: ["100", "200"],
});

function Contact({ formkey, text }: { formkey: string; text: string }) {
  const [form, setForm] = useState(false);
  return (
    <section id='Contact' className='container text-primary-light-9 mb-4 pt-5'>
      <Heading name='Contact' title='Get In Touch' />
      <p className={`font-md ${overpass.className}`}>{text}</p>
      <Button
        customClasses='font-md pr-2 pl-2 mt-2'
        onClick={() => {
          setForm((prev) => !prev);
        }}
      >
        {form ? (
          <a href='#Form'>Cancel</a>
        ) : (
          <a href='#Contact'>Get in touch ✉</a>
        )}
      </Button>
      {form && <Form formkey={formkey} />}
    </section>
  );
}

export default Contact;
