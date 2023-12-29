import Heading from "../shared/Heading";
import React from "react";
import WorkCard from "../shared/WorkCard";
import Border from "../shared/Border";
import { ContentType } from "@/types/shared.types";

function WorksSection({ content }: { content: ContentType }) {
  return (
    <>
      <section id='Work' className='container text-primary-light-9 mb-4 pt-5'>
        <Heading name='Skill' title="Some Things I've Built" />
        {/* <p className="font-md fontwt-200"></p> */}
        {content.works.map((work, index) => {
          return <WorkCard key={index} data={work} />;
        })}
      </section>
      <Border />
    </>
  );
}

export default WorksSection;
