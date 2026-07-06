import { useRef } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";

import ButtonSvg from "../assets/svg/ButtonSvg";

const MAGNETIC_STRENGTH = 0.35;
const MAGNETIC_MAX = 10;

const Button = ({
  className,
  href,
  onClick,
  children,
  px,
  white,
  external,
  magnetic = true,
  disabled = false,
  type = "button",
}) => {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 20, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 300, damping: 20, mass: 0.4 });

  const isMagnetic = magnetic && !reduceMotion;

  const handleMouseMove = (e) => {
    if (!isMagnetic || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    x.set(Math.max(-MAGNETIC_MAX, Math.min(MAGNETIC_MAX, relX * MAGNETIC_STRENGTH)));
    y.set(Math.max(-MAGNETIC_MAX, Math.min(MAGNETIC_MAX, relY * MAGNETIC_STRENGTH)));
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const classes = `button relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1 ${
    px || "px-7"
  } ${white ? "text-n-8" : "text-n-1"} ${
    disabled ? "opacity-50 pointer-events-none" : ""
  } ${className || ""}`;

  const spanClasses = "relative z-10";

  const motionProps = {
    ref,
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    style: isMagnetic ? { x: springX, y: springY } : undefined,
    className: classes,
  };

  const renderButton = () => (
    <motion.button {...motionProps} type={type} disabled={disabled} onClick={onClick}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </motion.button>
  );

  const renderLink = () => (
    <motion.a
      {...motionProps}
      href={href}
      target={external ? "_blank" : "_self"}
      rel={external && "noreferrer noopener"}
    >
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </motion.a>
  );

  return href ? renderLink() : renderButton();
};

export default Button;
