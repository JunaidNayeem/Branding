import { useEffect, useRef } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";

import { skillGroups, stats } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import TechMarquee from "./TechMarquee";
import Tilt3D from "./Tilt3D";

const Counter = ({ value, suffix }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));

  useEffect(() => {
    if (inView) {
      const controls = animate(count, value, { duration: 2, ease: "easeOut" });
      return () => controls.stop();
    }
  }, [inView, count, value]);

  return (
    <span ref={ref} className="h2 font-semibold text-n-1">
      <motion.span>{rounded}</motion.span>
      <span className="text-color-1">{suffix}</span>
    </span>
  );
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, rotateY: -18 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    rotateY: 0,
    transition: { duration: 0.6, delay: (i % 4) * 0.1, ease: "easeOut" },
  }),
};

const Skills = () => {
  return (
    <Section id="skills">
      <div className="container relative z-2">
        <Heading
          tag="Technical Skills"
          title="Tools I Use to Ship at Scale"
          text="From GOV.UK design systems to multi-tenant SaaS architecture — the stack behind 4+ years of production software."
        />

        {/* Animated stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center p-6 border border-n-6 rounded-2xl bg-n-7/50 backdrop-blur"
            >
              <Counter value={stat.value} suffix={stat.suffix} />
              <p className="caption text-n-4 mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Skill group cards */}
        <div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          style={{ perspective: "1200px" }}
        >
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.id}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <Tilt3D
                maxTilt={10}
                className="h-full p-6 border border-n-6 rounded-2xl bg-n-8/90 hover:border-n-1/20 transition-colors"
              >
                <div style={{ transform: "translateZ(25px)" }}>
                  <h6 className="h6 mb-4 text-n-1">{group.title}</h6>
                  <ul className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <li
                        key={skill}
                        className="px-3 py-1 text-xs font-code text-n-3 bg-n-7 border border-n-1/10 rounded-full"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </Tilt3D>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Scroll-scrubbed keyword marquee */}
      <TechMarquee className="mt-20" />
    </Section>
  );
};

export default Skills;
