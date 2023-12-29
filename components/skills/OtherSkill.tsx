"use client";

import { useContext } from "react";
import { AccentContext } from "@/contexts/AccentProvider";

const Elem = ({ skill }: { skill: string }) => {
  const { accent } = useContext(AccentContext);
  return (
    <>
      <li className={`list-bullet list-bullet-${accent} mt-1 font-md`}>
        {skill}
      </li>
    </>
  );
};

function OtherSkills({ skills }: { skills: string[] }) {
  return (
    <>
      <h1 className='ml-1 display-i-b'>🛠 Tools & Knowledge</h1>
      <ul className='mt-3'>
        {skills.map((skill, index) => (
          <Elem key={index} skill={skill} />
        ))}
      </ul>
    </>
  );
}

export default OtherSkills;
