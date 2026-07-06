import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { marqueeKeywords } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const Row = ({ innerRef, reverse }) => (
  <div className="overflow-hidden py-2">
    <div
      ref={innerRef}
      className={`flex whitespace-nowrap will-change-transform ${
        reverse ? "justify-end" : ""
      }`}
    >
      {[...marqueeKeywords, ...marqueeKeywords].map((word, i) => (
        <span
          key={i}
          className="flex items-center font-grotesk uppercase tracking-tagline text-[1.75rem] md:text-[2.5rem] font-light text-n-4/60 mx-4"
        >
          {word}
          <span className="ml-8 w-2 h-2 rounded-full bg-color-1/60" aria-hidden />
        </span>
      ))}
    </div>
  </div>
);

// Two rows of tech keywords sliding in opposite directions, scrubbed by scroll.
const TechMarquee = ({ className }) => {
  const wrapRef = useRef(null);
  const rowARef = useRef(null);
  const rowBRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      const scrollTrigger = {
        trigger: wrapRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      };

      gsap.fromTo(
        rowARef.current,
        { xPercent: 0 },
        { xPercent: -20, ease: "none", scrollTrigger }
      );
      gsap.fromTo(
        rowBRef.current,
        { xPercent: 0 },
        { xPercent: 20, ease: "none", scrollTrigger: { ...scrollTrigger } }
      );
    }, wrapRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={wrapRef} className={`relative ${className || ""}`} aria-hidden="true">
      <Row innerRef={rowARef} />
      <Row innerRef={rowBRef} reverse />
    </div>
  );
};

export default TechMarquee;
