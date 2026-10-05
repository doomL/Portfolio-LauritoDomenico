 

import {
  ARTEMAT_EMPLOYER,
  MENULINKS,
  PERSONAL_WORK_HUBS,
  PROFESSIONAL_PRODUCTS,
  IExternalWorkLink,
} from "../../constants";
import Image from "next/image";
import { gsap, Linear } from "gsap";
import React, { MutableRefObject, useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const LINK_CARD =
  "flex flex-col p-5 rounded-2xl bg-gray-800/40 border border-gray-700/50 hover:border-amber-500/40 hover:bg-gray-800/60 transition-colors link h-full";

/** Light well so dark/colored brand marks stay readable on the dark page. */
const LOGO_WELL =
  "mb-4 flex min-h-[3.5rem] w-full items-center rounded-xl border border-gray-200/10 bg-gray-50 px-4 py-2.5 shadow-inner";

const AboutSection = () => {
  const quoteRef: MutableRefObject<HTMLDivElement> = useRef(null);
  const targetSection: MutableRefObject<HTMLDivElement> = useRef(null);

  const [willChange, setwillChange] = useState(false);

  const initAboutAnimation = (
    quoteRef: MutableRefObject<HTMLDivElement>,
    targetSection: MutableRefObject<HTMLDivElement>
  ): ScrollTrigger => {
    const timeline = gsap.timeline({
      defaults: { ease: Linear.easeNone, duration: 0.1 },
    });
    timeline
      .fromTo(
        quoteRef.current.querySelector(".about-1"),
        { opacity: 0.2 },
        { opacity: 1 }
      )
      .to(quoteRef.current.querySelector(".about-1"), {
        opacity: 0.2,
        delay: 0.5,
      })
      .fromTo(
        quoteRef.current.querySelector(".about-2"),
        { opacity: 0.2 },
        { opacity: 1 },
        "<"
      )
      .to(quoteRef.current.querySelector(".about-2"), {
        opacity: 0.2,
        delay: 1,
      });

    const scrollTriggerInstance = ScrollTrigger.create({
      trigger: targetSection.current,
      start: "center 80%",
      end: "center top",
      scrub: 0,
      animation: timeline,
      onToggle: (self) => setwillChange(self.isActive),
    });
    return scrollTriggerInstance;
  };

  useEffect(() => {
    const aboutScrollTriggerInstance = initAboutAnimation(
      quoteRef,
      targetSection
    );

    return aboutScrollTriggerInstance.kill;
  }, [quoteRef, targetSection]);

  const renderLogo = (item: IExternalWorkLink) => {
    const isRemote = item.logo.startsWith("http");
    const isLightMark = item.name === "GitHub";
    return (
      <div className={LOGO_WELL}>
        <Image
          src={item.logo}
          alt=""
          width={160}
          height={40}
          className={`h-9 w-auto max-w-[11rem] object-contain object-left ${
            isLightMark ? "brightness-0" : ""
          }`}
          unoptimized={isRemote}
        />
      </div>
    );
  };

  const renderLinkCard = (item: IExternalWorkLink) => (
    <a
      key={item.name}
      href={item.url}
      target="_blank"
      rel="noreferrer"
      className={LINK_CARD}
    >
      {renderLogo(item)}
      <span className="text-lg font-semibold text-white">{item.name}</span>
      <span className="block text-sm text-gray-400 mt-2 leading-relaxed flex-grow">
        {item.description}
      </span>
      <span className="inline-block text-amber-400 text-sm font-medium mt-3">
        Visit →
      </span>
    </a>
  );

  const renderQuotes = (): React.ReactNode => (
    <h1 ref={quoteRef} className="font-medium text-3xl sm:text-4xl md:text-6xl">
      <span
        className={`about-1 leading-tight ${
          willChange ? "will-change-opacity" : ""
        }`}
      >
        I design and build AI-powered systems and web platforms that bridge
        intelligent backends with polished user experiences.{" "}
      </span>
      <span
        className={`about-2 leading-tight ${
          willChange ? "will-change-opacity" : ""
        }`}
      >
        I bring the same attention to detail whether I&apos;m engineering an LLM
        evaluation pipeline or crafting a frontend interface.
      </span>
    </h1>
  );

  const aboutId =
    MENULINKS.find((l) => l.ref === "about")?.ref ?? "about";

  return (
    <section
      className={`tall:pt-20 tall:pb-16 pt-40 pb-24 w-full relative select-none section-container`}
      id={aboutId}
      ref={targetSection}
    >
      {renderQuotes()}

      <div className="mt-16 md:mt-24 max-w-4xl">
        <p className="section-title-sm">WHERE TO LOOK</p>
        <h2 className="section-heading mt-2 text-3xl md:text-4xl">
          Products &amp; code
        </h2>
        <p className="text-lg text-gray-300 mt-4 leading-relaxed">
          I work at{" "}
          <a
            href={ARTEMAT_EMPLOYER.url}
            className="link text-amber-300 hover:text-amber-200 inline-flex items-center gap-2 align-middle rounded-lg border border-gray-200/10 bg-gray-50 px-2 py-0.5"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src={ARTEMAT_EMPLOYER.logo}
              alt=""
              width={88}
              height={28}
              className="h-5 w-auto inline-block"
            />
            <span className="text-gray-900 font-medium">{ARTEMAT_EMPLOYER.name}</span>
          </a>
          . Professional HR and education platforms ship on their own sites. Side
          projects and demos live on Doogma Labs; repositories and coursework on
          GitHub.
        </p>

        <h3 className="text-sm font-semibold tracking-widest text-gray-500 mt-10 mb-4 uppercase">
          Professional products
        </h3>
        <div className="grid sm:grid-cols-2 gap-4">
          {PROFESSIONAL_PRODUCTS.map(renderLinkCard)}
        </div>

        <h3 className="text-sm font-semibold tracking-widest text-gray-500 mt-10 mb-4 uppercase">
          Personal builds
        </h3>
        <div className="grid sm:grid-cols-2 gap-4">
          {PERSONAL_WORK_HUBS.map(renderLinkCard)}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
