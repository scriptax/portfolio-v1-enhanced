"use client";

import React, { useState, useEffect } from "react";
import { useForm } from "@formspree/react";
import Input from "./Input";
import Button from "../shared/Button";

function Form({ formkey }: { formkey: string }) {
  const [state, handleSubmit] = useForm(formkey);
  const [data, setData] = useState({
    name: "",
    email: "",
    subject: "",
    text: "",
  });
  const [filled, setFill] = useState({
    name: false,
    email: false,
    subject: false,
    text: false,
  });
  const [movePlace, setMovePlace] = useState({
    name: false,
    email: false,
    subject: false,
    text: false,
  });

  const changeHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const input = e.target as HTMLInputElement | HTMLTextAreaElement;
    setData((data) => {
      return { ...data, [input.name]: input.value };
    });
    setFill((filled) => {
      return { ...filled, [input.name]: input.value !== "" };
    });
  };

  const blurHandler = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const input = e.target.name as keyof object;
    if (!filled[input]) {
      setMovePlace((prev) => {
        return {
          ...prev,
          [input]: false,
        };
      });
    }
  };

  const focusHandler = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const input = e.target.name;
    setMovePlace((prev) => {
      return {
        ...prev,
        [input]: true,
      };
    });
  };

  useEffect(() => {
    setData({
      name: "",
      email: "",
      subject: "",
      text: "",
    });
  }, [state.succeeded]);

  return (
    <div
      id='Form'
      // initial={{ x: "-100vw" }}
      // animate={{ x: "0vw" }}
      // exit={{ x: "-100vw" }}
      // transition={{ delay: 0.1, type: "spring", mass: 0.5 }}
      className='col-12-xs col-7-md m-auto pt-5'
    >
      <form onSubmit={handleSubmit} autoComplete='off'>
        <Input
          name='name'
          placeholder='Your Name'
          type='text'
          value={data.name}
          control={{ changeHandler, blurHandler, focusHandler }}
          movePlaceHolder={movePlace.name}
        />
        <Input
          name='email'
          placeholder='Your Email'
          type='email'
          value={data.email}
          control={{ changeHandler, blurHandler, focusHandler }}
          movePlaceHolder={movePlace.email}
        />
        <Input
          name='subject'
          placeholder='Subject'
          type='text'
          value={data.subject}
          control={{ changeHandler, blurHandler, focusHandler }}
          movePlaceHolder={movePlace.subject}
        />
        <Input
          name='text'
          placeholder='Message'
          type='textarea'
          value={data.text}
          control={{ changeHandler, blurHandler, focusHandler }}
          movePlaceHolder={movePlace.text}
        />
        <Button customClasses='font-md mb-2 pl-1 pr-1' type='submit'>
          {state.succeeded
            ? "Message sent ✔"
            : state.submitting
            ? "Sending..."
            : "Send Message >>"}
        </Button>
      </form>
    </div>
  );
}

export default Form;
