import { motion } from "framer-motion";

import ClipPath from "../assets/svg/ClipPath";
import { benefits } from "../constants";
import { GradientLight } from "./design/Benefits";
import Heading from "./Heading";
import Section from "./Section";
import Tilt3D from "./Tilt3D";
import { curve } from "../assets";

const cardVariants = {
  hidden: { opacity: 0, y: 60, rotateX: -14 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: "easeOut" },
  }),
};

const Benefits = () => {
  return (
    <Section id="experience">
      <div className="container relative z-2">
        <Heading
          tag="4+ years · Government & Enterprise"
          className="md:max-w-md lg:max-w-2xl"
          title={
            <>
              My Development{" "}
              <span className="inline-block relative font-semibold">
                Experience
                <img
                  src={curve}
                  className="absolute top-full left-0 w-full xl:-mt-2 pointer-events-none select-none"
                  width={624}
                  height={28}
                  alt=""
                  aria-hidden="true"
                />
              </span>
            </>
          }
        />

        <div
          className="flex flex-wrap gap-10 mb-10 justify-center"
          style={{ perspective: "1200px" }}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.id}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              style={{ transformStyle: "preserve-3d" }}
              className="md:max-w-[24rem] w-full group"
            >
              <Tilt3D
                maxTilt={6}
                glareOpacity={0.06}
                className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] h-full transition-shadow duration-300 group-hover:shadow-[0_0_2.5rem_rgba(172,106,255,0.12)]"
              >
                <div
                  className="absolute inset-0 bg-no-repeat bg-[length:100%_100%] pointer-events-none"
                  style={{ backgroundImage: `url(${benefit.backgroundUrl})` }}
                  aria-hidden="true"
                />

                <div
                  className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem]"
                  style={{ transform: "translateZ(30px)" }}
                >
                  <div className="flex items-center gap-4 mb-5">
                    <span className="flex items-center justify-center shrink-0 w-14 h-14 p-2 bg-n-1 rounded-xl border border-n-1/10 transition-colors group-hover:border-color-1/50">
                      <img
                        src={benefit.iconUrl}
                        width={40}
                        height={40}
                        alt={`${benefit.title} logo`}
                        className="max-w-full max-h-full object-contain"
                      />
                    </span>
                    <div>
                      <h5 className="h5">{benefit.title}</h5>
                      <p className="tagline text-color-1 mt-1">{benefit.role}</p>
                    </div>
                  </div>

                  <p className="caption text-n-3 mb-4">{benefit.period}</p>
                  <p className="body-2 mb-6 text-n-3">{benefit.text}</p>

                  <ul className="flex flex-wrap gap-2 mt-auto">
                    {benefit.stack?.map((tech) => (
                      <li
                        key={tech}
                        className="px-3 py-1 text-xs font-code text-n-2 bg-n-7 border border-n-1/10 rounded-full"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>

                {benefit.light && <GradientLight />}

                <div
                  className="absolute inset-0.5 bg-n-8"
                  style={{ clipPath: "url(#benefits)" }}
                  aria-hidden="true"
                />

                <ClipPath />
              </Tilt3D>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Benefits;
