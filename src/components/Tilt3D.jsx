import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useMotionTemplate,
  useReducedMotion,
} from "framer-motion";

/**
 * Wraps children in a mouse-tracking 3D tilt with a moving glare highlight.
 * Children can opt into extra depth with `transform: translateZ(...)` since
 * the inner wrapper preserves 3d.
 */
const Tilt3D = ({
  children,
  className,
  maxTilt = 8,
  glare = true,
  glareOpacity = 0.1,
}) => {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();

  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);

  const springX = useSpring(px, { stiffness: 180, damping: 22, mass: 0.6 });
  const springY = useSpring(py, { stiffness: 180, damping: 22, mass: 0.6 });

  const rotateY = useTransform(springX, [0, 1], [-maxTilt, maxTilt]);
  const rotateX = useTransform(springY, [0, 1], [maxTilt, -maxTilt]);

  const glareX = useTransform(springX, [0, 1], ["20%", "80%"]);
  const glareY = useTransform(springY, [0, 1], ["20%", "80%"]);
  const glareColor = `rgba(255,255,255,${glareOpacity})`;
  const glareBackground = useMotionTemplate`radial-gradient(circle at ${glareX} ${glareY}, ${glareColor}, transparent 55%)`;

  const handleMouseMove = (e) => {
    if (reduceMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    px.set((e.clientX - rect.left) / rect.width);
    py.set((e.clientY - rect.top) / rect.height);
  };

  const handleMouseLeave = () => {
    px.set(0.5);
    py.set(0.5);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: reduceMotion ? 0 : rotateX,
        rotateY: reduceMotion ? 0 : rotateY,
        transformPerspective: 1000,
        transformStyle: "preserve-3d",
      }}
      className={`relative will-change-transform ${className || ""}`}
    >
      {children}

      {glare && !reduceMotion && (
        <motion.div
          className="absolute inset-0 z-10 rounded-[inherit] pointer-events-none"
          style={{ background: glareBackground }}
          aria-hidden
        />
      )}
    </motion.div>
  );
};

export default Tilt3D;
