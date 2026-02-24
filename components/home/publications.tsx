import { MENULINKS, PUBLICATIONS } from "../../constants";
import { MutableRefObject, useEffect, useRef, useState } from "react";
import { gsap, Linear } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const PUBLICATION_STYLES = {
  SECTION:
    "w-full relative select-none mb-24 section-container py-12 flex flex-col justify-center",
  CARD: "p-6 rounded-2xl bg-gray-800/50 border border-gray-700/50 hover:border-gray-600/50 transition-colors",
};

const PublicationsSection = () => {
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
      trigger: targetSection.current,
      start: "top bottom",
      end: "center center",
      scrub: 0,
      animation: revealTl,
      onToggle: (self) => setwillChange(self.isActive),
    });
  };

  useEffect(() => {
    const revealAnimationRef = initRevealAnimation(targetSection);
    return revealAnimationRef.kill;
  }, [targetSection]);

  const renderSectionTitle = (): React.ReactNode => (
    <div className="flex flex-col">
      <p className="section-title-sm seq">RESEARCH</p>
      <h1 className="section-heading seq mt-2">Publications</h1>
      <h2 className="text-2xl md:max-w-2xl w-full seq mt-2">
        Academic publications and research contributions
      </h2>
    </div>
  );

  const renderPublicationCard = (pub: (typeof PUBLICATIONS)[0], index: number) => (
    <article
      key={index}
      className={`${PUBLICATION_STYLES.CARD} seq ${
        willChange ? "will-change-opacity" : ""
      }`}
    >
      {pub.award && (
        <span className="inline-block text-amber-400 font-semibold text-sm mb-2">
          🏆 {pub.award}
        </span>
      )}
      <h3 className="text-xl font-semibold text-white mb-2">{pub.title}</h3>
      <p className="text-gray-400 text-sm mb-2">{pub.venue}</p>
      {pub.authors && (
        <p className="text-gray-500 text-xs mb-2">Co-authors: {pub.authors}</p>
      )}
      {pub.details && (
        <p className="text-gray-500 text-xs mb-2">{pub.details}</p>
      )}
      {pub.url && (
        <a
          href={pub.url}
          target="_blank"
          rel="noreferrer"
          className="text-amber-400 hover:text-amber-300 text-sm font-medium"
        >
          {pub.doi ? `DOI: ${pub.doi}` : "View paper →"}
        </a>
      )}
    </article>
  );

  return (
    <section
      className={PUBLICATION_STYLES.SECTION}
      id={MENULINKS.find((l) => l.ref === "publications")?.ref}
      ref={targetSection}
    >
      {renderSectionTitle()}
      <div className="grid md:grid-cols-2 gap-6 mt-10">
        {PUBLICATIONS.map((pub, i) => renderPublicationCard(pub, i))}
      </div>
    </section>
  );
};

export default PublicationsSection;
