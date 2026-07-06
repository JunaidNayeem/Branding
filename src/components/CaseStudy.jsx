import { motion } from "framer-motion";

import { check } from "../assets";
import { caseStudy } from "../constants";
import Section from "./Section";
import Tagline from "./Tagline";
import Tilt3D from "./Tilt3D";

// Stylised product mock — stands in until a real screenshot is added.
const ProductMock = () => (
  <Tilt3D maxTilt={5} glareOpacity={0.08} className="rounded-2xl">
    <div className="p-0.5 rounded-2xl bg-conic-gradient">
      <div className="rounded-[0.9rem] bg-n-7 overflow-hidden" aria-hidden="true">
        <div className="flex items-center gap-2 px-5 py-3 bg-n-8 border-b border-n-6">
          <span className="w-3 h-3 rounded-full bg-color-3/70" />
          <span className="w-3 h-3 rounded-full bg-color-2/70" />
          <span className="w-3 h-3 rounded-full bg-color-4/70" />
          <span className="ml-4 px-3 py-1 text-xs font-code text-n-3 bg-n-6 rounded-md">
            gov.uk › fuel-finder
          </span>
        </div>

        <div className="p-6">
          <div className="h-3 w-2/3 bg-n-5 rounded mb-3" />
          <div className="h-3 w-1/2 bg-n-6 rounded mb-6" />

          <div className="flex gap-2 mb-6">
            <div className="flex-1 h-10 bg-n-8 border border-n-5 rounded-md" />
            <div className="w-24 h-10 bg-color-4/80 rounded-md" />
          </div>

          {[64, 52, 58].map((w, i) => (
            <div
              key={i}
              className="flex items-center justify-between px-4 py-3 mb-2 bg-n-8 border border-n-6 rounded-lg"
            >
              <div className="h-2.5 bg-n-5 rounded" style={{ width: `${w}%` }} />
              <div className="h-2.5 w-10 bg-color-1/60 rounded" />
            </div>
          ))}
        </div>
      </div>
    </div>
  </Tilt3D>
);

const CaseStudy = () => {
  return (
    <Section id="featured-work">
      <div className="container relative z-2">
        <div className="lg:flex lg:items-start lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:max-w-[34rem]"
          >
            <Tagline className="mb-4">{caseStudy.tag}</Tagline>
            <h2 className="h2 mb-2">{caseStudy.title}</h2>
            <p className="caption text-color-1 mb-6">{caseStudy.subtitle}</p>
            <p className="body-2 text-n-3 mb-8">{caseStudy.description}</p>

            <ul className="mb-8">
              {caseStudy.highlights.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.07 }}
                  className="flex items-start gap-4 py-2.5"
                >
                  <img
                    src={check}
                    width={20}
                    height={20}
                    alt=""
                    aria-hidden="true"
                    className="mt-0.5 shrink-0"
                  />
                  <p className="body-2 text-n-2">{item}</p>
                </motion.li>
              ))}
            </ul>

            <ul className="flex flex-wrap gap-2">
              {caseStudy.stack.map((tech) => (
                <li
                  key={tech}
                  className="px-3 py-1 text-xs font-code text-n-2 bg-n-7 border border-n-1/10 rounded-full"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40, rotateY: -10 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ transformPerspective: 1000 }}
            className="mt-12 lg:mt-6 lg:flex-1"
          >
            <ProductMock />

            <div className="grid grid-cols-2 gap-4 mt-8">
              {caseStudy.metrics.map((metric, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="p-5 text-center border border-n-6 rounded-2xl bg-n-7/50"
                >
                  <p className="h5 font-semibold text-n-1">{metric.value}</p>
                  <p className="caption text-n-3 mt-1">{metric.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
};

export default CaseStudy;
