/* eslint-disable @next/next/no-img-element */

import { MENULINKS, SKILL_ICON_ROWS } from "../../constants";
import Image from "next/image";
import { MutableRefObject, useEffect, useRef, useState } from "react";
import { gsap, Linear } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const SKILL_STYLES = {
  SECTION:
    "w-full relative select-none mb-24 section-container py-12 flex flex-col justify-center",
  SKILL_TITLE: "section-title-sm mb-4 seq",
};

const skillIconUrl = (icons: string, perLine = 12) =>
  `https://skillicons.dev/icons?i=${icons}&perline=${perLine}`;

const SKILL_ICON_HEIGHT = "h-12 md:h-[3.25rem]";

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
        Full-stack delivery from AI backends and LLM integrations to polished
        React/Next.js interfaces, plus the DevOps and data stores that keep
        systems running in production.
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
          alt=""
          role="presentation"
        />
      </div>
      <div className="absolute left-0 -bottom-3.5 w-1/12 max-w-xs md:block hidden">
        <Image
          src="/pattern-l.svg"
          loading="lazy"
          height={335}
          width={140}
          alt=""
          role="presentation"
        />
      </div>
    </>
  );

  return (
    <section className="relative">
      {renderBackgroundPattern()}
      <div
        className={SKILL_STYLES.SECTION}
        id={MENULINKS.find((l) => l.ref === "skills")?.ref ?? "skills"}
        ref={targetSection}
      >
        <div className="flex flex-col skills-wrapper">
          {renderSectionTitle()}
          <div
            className={`mt-10 space-y-8 ${
              willChange ? "will-change-opacity" : ""
            }`}
          >
            {SKILL_ICON_ROWS.map((row) => {
              const iconCount = row.icons.split(",").filter(Boolean).length;
              const perLine = Math.min(12, Math.max(iconCount, 6));

              return (
                <div key={row.title} className="seq">
                  <h3 className={SKILL_STYLES.SKILL_TITLE}>{row.title}</h3>
                  <img
                    src={skillIconUrl(row.icons, perLine)}
                    alt={`${row.title} technologies`}
                    loading="lazy"
                    className={`${SKILL_ICON_HEIGHT} w-auto max-w-full object-left object-contain`}
                    width={iconCount * 52}
                    height={52}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
