"use client";

import { useContext } from "react";
import { AccentContext } from "@/contexts/AccentProvider";
import * as icons from "@/utils/icons";
import Image from "next/image";

const Elem = ({ skill }: { skill: string }) => {
  const { accent } = useContext(AccentContext);
  const picKey = skill.toLowerCase() as keyof object;
  return (
    <div className='col-6-xs col-4-md'>
      <div className={`skillcard bg-${accent}`}>
        <div className='bg-primary'>
          <Image
            className='skill-img'
            style={{ width: "100%", height: "60px" }}
            src={icons[picKey]}
            alt={skill}
            draggable='false'
          />
          <p className='font-md'>{skill}</p>
        </div>
      </div>
    </div>
  );
};

function SkillElem({ skills }: { skills: string[] }) {
  return (
    <>
      <h1 className='mb-2 ml-1 display-i-b'>{"</>"} Development Skills</h1>
      <div className='row justify-c textal-c gap-1'>
        {skills.map((skill, index) => (
          <Elem key={index} skill={skill} />
        ))}
      </div>
    </>
  );
}

export default SkillElem;
