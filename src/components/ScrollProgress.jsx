import { motion, useScroll, useSpring, useReducedMotion } from "framer-motion";

// Thin gradient bar tracking scroll progress through the whole page.
const ScrollProgress = () => {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 300,
    damping: 40,
    mass: 0.2,
  });

  return (
    <motion.div
      aria-hidden="true"
      className="absolute bottom-0 left-0 h-[2px] w-full origin-left bg-gradient-to-r from-color-1 via-color-5 to-color-4"
      style={{ scaleX: reduceMotion ? scrollYProgress : scaleX }}
    />
  );
};

export default ScrollProgress;
