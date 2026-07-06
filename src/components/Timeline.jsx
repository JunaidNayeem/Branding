import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { timeline } from "../constants";
import Heading from "./Heading";
import Section from "./Section";

gsap.registerPlugin(ScrollTrigger);

const Timeline = () => {
  const wrapRef = useRef(null);
  const lineRef = useRef(null);

  // The spine draws itself downward as the timeline scrolls through view.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: wrapRef.current,
            start: "top 75%",
            end: "bottom 60%",
            scrub: 1,
          },
        }
      );
    }, wrapRef);

    return () => ctx.revert();
  }, []);

  return (
    <Section>
      <div className="container relative z-2">
        <Heading tag="Career Journey" title="The Road So Far" />

        <div ref={wrapRef} className="relative max-w-[50rem] mx-auto">
          <div
            className="absolute left-[0.4375rem] md:left-1/2 top-0 w-0.5 h-full -translate-x-1/2 bg-n-6"
            aria-hidden="true"
          />
          <div
            ref={lineRef}
            className="absolute left-[0.4375rem] md:left-1/2 top-0 w-0.5 h-full -translate-x-1/2 origin-top bg-gradient-to-b from-color-1 via-color-5 to-color-4"
            aria-hidden="true"
          />

          <ol>
            {timeline.map((item, index) => {
              const isLeft = index % 2 === 0;
              return (
                <li key={item.id} className="relative pb-12 last:pb-0">
                  <span
                    className={`absolute left-[0.4375rem] md:left-1/2 top-1.5 w-3.5 h-3.5 -translate-x-1/2 rounded-full border-2 ${
                      item.current
                        ? "bg-color-1 border-color-1 shadow-[0_0_1rem_rgba(172,106,255,0.6)]"
                        : "bg-n-8 border-n-4"
                    }`}
                    aria-hidden="true"
                  />

                  <motion.div
                    initial={{ opacity: 0, y: 30, x: isLeft ? -20 : 20 }}
                    whileInView={{ opacity: 1, y: 0, x: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.55, ease: "easeOut" }}
                    className={`ml-8 md:ml-0 md:w-[calc(50%-2.5rem)] ${
                      isLeft ? "md:mr-auto md:text-right" : "md:ml-auto"
                    }`}
                  >
                    <p className="tagline text-color-1 mb-2">{item.period}</p>
                    <h6 className="h6 text-n-1">{item.title}</h6>
                    <p className="caption text-n-3 mb-2">{item.subtitle}</p>
                    <p className="body-2 text-n-3">{item.text}</p>
                  </motion.div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </Section>
  );
};

export default Timeline;
