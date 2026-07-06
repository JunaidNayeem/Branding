import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { ScrollParallax } from "react-just-parallax";
import Typewriter from "typewriter-effect";

import { curve, heroBackground, profile, profileMobile } from "../assets";
import { heroIcons, heroTypewriterStrings, resumeUrl } from "../constants";
import Button from "./Button";
import CompanyLogos from "./CompanyLogos";
import { BackgroundCircles, Gradient } from "./design/Hero";
import Generating from "./Generating";
import Notification from "./Notification";
import Section from "./Section";

const Hero = () => {
  const parallaxRef = useRef(null);
  const frameRef = useRef(null);
  const reduceMotion = useReducedMotion();

  // Scroll-linked 3D: the profile frame tips forward as it enters the
  // viewport, settles flat, then leans back as it scrolls away.
  const { scrollYProgress } = useScroll({
    target: frameRef,
    offset: ["start end", "end start"],
  });
  const rotateX = useTransform(scrollYProgress, [0, 0.3, 0.65, 1], [16, 0, 0, -10]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.65, 1], [0.94, 1, 1, 0.97]);
  const frameOpacity = useTransform(scrollYProgress, [0.7, 1], [1, 0.4]);

  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="about"
    >
      <div ref={parallaxRef} className="container relative">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative z-1 max-w-[62rem] mx-auto text-center mb-[4rem] md:mb-20 lg:mb-[6rem]"
        >
          <h1 className="h1 mb-6">
            Transforming Concepts into
            <br />
            <Typewriter
              options={{
                strings: heroTypewriterStrings,
                autoStart: true,
                loop: true,
              }}
            />
          </h1>

          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
            Hi, I am Junaid, a Senior Full Stack Engineer based in London, UK 🇬🇧
            — currently leading frontend development of a{" "}
            <span className="inline-block relative font-semibold">
              GOV.UK digital service
              <img
                src={curve}
                className="absolute top-full left-0 w-full xl:-mt-2 pointer-events-none select-none"
                width={624}
                height={28}
                alt=""
                aria-hidden="true"
              />
            </span>{" "}
            serving millions of users, built with Next.js, React, TypeScript
            and Node.js.
          </p>

          <Button href={resumeUrl} white external>
            Get my Resume
          </Button>
        </motion.div>

        <div
          ref={frameRef}
          className="relative max-w-[23rem] mx-auto md:max-w-5xl mb-24"
          style={{ perspective: "1200px" }}
        >
          <motion.div
            className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient will-change-transform"
            style={
              reduceMotion
                ? undefined
                : { rotateX, scale, opacity: frameOpacity, transformStyle: "preserve-3d" }
            }
          >
            <div className="relative bg-n-8 rounded-[1rem]">

              <div className="aspect-[20/40] rounded-b-[0.9rem] rounded-t-[0.9rem]  overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                <img
                  src={profile}
                  className="hidden md:block w-full scale-[1.7] translate-y-[8%] md:scale-[1] md:-translate-y-[1%] lg:-translate-y-[0%] pointer-events-none select-none"
                  width={1024}
                  height={490}
                  alt="Junaid Nayeem"
                />
                <img
                  src={profileMobile}
                  className="md:hidden w-full h-full translate-y-[0%] pointer-events-none select-none"
                  width={500}
                  height={1128}
                  alt="Junaid Nayeem"
                />

                <Generating className=" hidden md:inline-flex absolute left-4 right-4 bottom-5 md:left-1/2 md:right-auto md:bottom-8 md:w-[31rem] md:-translate-x-1/2" />
                <ScrollParallax isAbsolutelyPositioned>
                  <ul
                    className="hidden absolute -left-[5.5rem] bottom-[7.5rem] px-1 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex"
                    aria-hidden="true"
                  >
                    {heroIcons.map((icon, index) => (
                      <li className="p-5" key={index}>
                        <img src={icon} width={24} height={25} alt="" />
                      </li>
                    ))}
                  </ul>
                </ScrollParallax>

                <ScrollParallax isAbsolutelyPositioned>
                  <Notification
                    className="hidden absolute -right-[5.5rem] bottom-[11rem] w-[18rem] xl:flex"
                    title="Code collaboration"
                  />
                </ScrollParallax>
              </div>
            </div>

            <Gradient />
          </motion.div>

          <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
            <img
              src={heroBackground}
              className="w-full pointer-events-none select-none"
              width={1440}
              height={1800}
              alt=""
              aria-hidden="true"
            />
          </div>

          <BackgroundCircles parallaxRef={parallaxRef} />
        </div>
        <CompanyLogos className="mobile relative z-10 mt-100 lg:block" />
      </div>
    </Section>
  );
};

export default Hero;
