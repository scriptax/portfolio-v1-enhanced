import "../styles/build/index.css";
import Landing from "@/components/about/Landing";
import About from "@/components/about/AboutSection";
import SkillsSection from "@/components/skills/SkillsSection";
import WorksSection from "@/components/works/WorksSection";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";
import getContent from "@/lib/content";
import { ContentType } from "@/types/shared.types";

export const revalidate = 3600 * 6;

export default async function Home() {
  const contentData: Promise<any> = getContent();
  const contentObj = await contentData;
  const content = contentObj.items[0].fields as ContentType;

  return (
    <main>
      <Landing content={content} />
      <About text={content.aboutMe} />
      <SkillsSection content={content} />
      <WorksSection content={content} />
      <Contact
        formkey={process.env.FORMSPREE_KEY!}
        text={content.contactText}
      />
      <Footer socialLinks={content.socialLinks} />
    </main>
  );
}
