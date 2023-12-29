"use client";

import { useContext } from "react";
import { AccentContext } from "@/contexts/AccentProvider";
import * as icons from "@/utils/icons";
import Image from "next/image";
import { WorkType } from "@/types/shared.types";

function WorkCard({ data }: { data: WorkType }) {
  const { accent } = useContext(AccentContext);
  return (
    <div className={`work-card m-1 mt-2 font-md bg-${accent}`}>
      <div className='row'>
        <div className='col-12-xs col-6-md p-1 display-f align-center'>
          <Image
            src={"https:" + data.fields.screenshot.fields.file.url}
            alt={data.fields.name}
            draggable='false'
            width={425}
            height={200}
            style={{ width: "100%", height: "90%" }}
          />
        </div>
        <div className='col-12-xs col-6-md p-1'>
          <div className='mb-1'>
            <h4 className=''>{data.fields.name}</h4>
            <p className='font-sm'>{data.fields.description}</p>
          </div>
          <hr />
          <div className='display-f justify-space-between align-center mt-1'>
            <div>
              {data.fields.stack.map((tech: any, index: any) => {
                const iconsKey = tech as keyof object;
                return (
                  <Image
                    className='mr-1'
                    height={25}
                    key={index}
                    src={icons[iconsKey]}
                    alt=''
                  />
                );
              })}
            </div>
            <div>
              <a
                className={`link link-${accent} mr-1 font-sm`}
                href={data.fields.repo}
                target='blank'
              >
                Code
              </a>
              <a
                className={`link link-${accent} font-sm`}
                href={data.fields.live}
                target='blank'
              >
                Live
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkCard;
