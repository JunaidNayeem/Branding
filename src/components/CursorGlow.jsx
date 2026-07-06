import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

// A soft light that follows the pointer over the dark theme. Skipped
// entirely on touch devices and for prefers-reduced-motion.
const CursorGlow = () => {
  const [enabled, setEnabled] = useState(false);
  const x = useMotionValue(-500);
  const y = useMotionValue(-500);
  const springX = useSpring(x, { damping: 30, stiffness: 200, mass: 0.5 });
  const springY = useSpring(y, { damping: 30, stiffness: 200, mass: 0.5 });

  useEffect(() => {
    const canHover =
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches &&
      !window.matchMedia("(pointer: coarse)").matches;

    setEnabled(canHover);
    if (!canHover) return;

    const handleMove = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-[45] w-[28rem] h-[28rem] rounded-full mix-blend-screen"
      style={{
        x: springX,
        y: springY,
        translateX: "-50%",
        translateY: "-50%",
        background:
          "radial-gradient(circle, rgba(172,106,255,0.14), rgba(172,106,255,0) 65%)",
      }}
    />
  );
};

export default CursorGlow;
