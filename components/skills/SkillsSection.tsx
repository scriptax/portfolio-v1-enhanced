import Border from "../shared/Border";
import Heading from "../shared/Heading";
import { Overpass } from "next/font/google";
import SkillElem from "../shared/SkillElem";
import OtherSkills from "./OtherSkill";
import { ContentType } from "@/types/shared.types";

const overpass = Overpass({
  subsets: ["latin"],
  weight: ["100", "200"],
});

function SkillsSection({ content }: { content: ContentType }) {
  return (
    <>
      <section id='Skills' className='container text-primary-light-9 mb-4 pt-5'>
        <Heading name='Skill' title='My Toolbox' />
        <p className={`font-md ${overpass.className}`}>{content.skillsText}</p>
        <div className='row justify-c textal-c mt-3'>
          <div className='col-12-xs col-8-md textal-l'>
            <SkillElem skills={content.skills} />
          </div>
          <div className='col-12-xs col-4-md textal-l'>
            <OtherSkills skills={content.otherSkills} />
          </div>
        </div>
      </section>
      <Border />
    </>
  );
}

export default SkillsSection;
