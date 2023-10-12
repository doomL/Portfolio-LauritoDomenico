 

import { MENULINKS, SKILLS } from "../../constants";
import Image from "next/image";
import { MutableRefObject, useEffect, useRef, useState } from "react";
import { gsap, Linear } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const SKILL_STYLES = {
  SECTION:
    "w-full relative select-none mb-24 section-container py-12 flex flex-col justify-center",
  SKILL_TITLE: "section-title-sm mb-4 seq",
};

const SkillsSection = () => {
  const targetSection: MutableRefObject<HTMLDivElement> = useRef(null);
  const [willChange, setwillChange] = useState(false);

  const initRevealAnimation = (
    targetSection: MutableRefObject<HTMLDivElement>
  ): ScrollTrigger => {
    const revealTl = gsap.timeline({ defaults: { ease: Linear.easeNone } });
    revealTl.from(
      targetSection.current.querySelectorAll(".seq"),
      { opacity: 0, duration: 0.5, stagger: 0.5 },
      "<"
    );

    return ScrollTrigger.create({
      trigger: targetSection.current.querySelector(".skills-wrapper"),
      start: "100px bottom",
      end: `center center`,
      animation: revealTl,
      scrub: 0,
      onToggle: (self) => setwillChange(self.isActive),
    });
  };

  useEffect(() => {
    const revealAnimationRef = initRevealAnimation(targetSection);

    return revealAnimationRef.kill;
  }, [targetSection]);

  const renderSectionTitle = (): React.ReactNode => (
    <div className="flex flex-col">
      <p className="section-title-sm seq">SKILLS</p>
      <h1 className="section-heading seq mt-2">My Skills</h1>
      <h2 className="text-2xl md:max-w-2xl w-full seq mt-2">
      I embrace the role of crafting visually appealing user experience by employing modern front-end architecture while managing the entire web development stack. {" "}
      </h2>
    </div>
  );

  const renderBackgroundPattern = (): React.ReactNode => (
    <>
      <div className="absolute right-0 -bottom-1/3 w-1/5 max-w-xs md:flex hidden justify-end">
        <Image
          src="/pattern-r.svg"
          loading="lazy"
          height={700}
          width={320}
          alt="pattern"
        />
      </div>
      <div className="absolute left-0 -bottom-3.5 w-1/12 max-w-xs md:block hidden">
        <Image
          src="/pattern-l.svg"
          loading="lazy"
          height={335}
          width={140}
          alt="pattern"
        />
      </div>
    </>
  );

  const renderSkillColumn = (
    title: string,
    skills: string[]
  ): React.ReactNode => (
    <>
      <h3 className={SKILL_STYLES.SKILL_TITLE}>{title}</h3>
      <div
        className={`flex flex-wrap seq ${
          willChange ? "will-change-opacity" : ""
        }`}
      >
        {skills.map((skill) => (
          <Image
            key={skill}
            src={`/skills/${skill}.svg`}
            alt={skill}
            width={76}
            height={76}
            className="skill"
          />
        ))}
      </div>
    </>
  );

  return (
    <section className="relative">
      {renderBackgroundPattern()}
      <div
        className={SKILL_STYLES.SECTION}
        id={MENULINKS[2].ref}
        ref={targetSection}
      >
        <div className="flex flex-col skills-wrapper">
          {renderSectionTitle()}
          { <div className="mt-10">
          <h3 className={SKILL_STYLES.SKILL_TITLE}>Back-end Development</h3>
          <a href="https://skillicons.dev">
            <img src="https://skillicons.dev/icons?i=dotnet,java,python,nodejs,cs,flask,express" />
          </a>
          <br />
          <h3 className={SKILL_STYLES.SKILL_TITLE}>Front-end Development</h3>
          <a href="https://skillicons.dev">
            <img src="https://skillicons.dev/icons?i=jquery,js,css,bootstrap,html,figma" />
          </a>
          <br />
          <h3 className={SKILL_STYLES.SKILL_TITLE}>Databases</h3>
          <a href="https://skillicons.dev">
            <img src="https://skillicons.dev/icons?i=mysql,postgres,mongodb" />
          </a>
          <br />
          <h3 className={SKILL_STYLES.SKILL_TITLE}>Others</h3>
          <a href="https://skillicons.dev">
            <img src="https://skillicons.dev/icons?i=cpp,git,androidstudio,kubernetes,docker,wordpress,raspberrypi,arduino,pr,ps,ai,bash,perl,maven,idea,ableton" />
          </a>
            {/* {renderSkillColumn("BACKEND DEVELOPMENT", SKILLS.backend)}
            {renderSkillColumn("FRONTEND DEVELOPMENT", SKILLS.frontend)}
            {renderSkillColumn("Other Skills", SKILLS.other)} */}
          </div> 
          }

        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
