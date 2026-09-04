import { motion } from "framer-motion";

/**
 * ScrollReveal — wraps children in a Framer Motion div that fades + slides up
 * when entering the viewport. Plays once. Respects prefers-reduced-motion via
 * the CSS global override (transition-duration: 0.01ms).
 *
 * @param {React.ReactNode} children
 * @param {number}  delay     — delay before animation starts (seconds), default 0
 * @param {number}  duration  — animation duration (seconds), default 0.6
 * @param {number}  y         — vertical travel distance (px), default 28
 * @param {string}  className — additional Tailwind classes
 * @param {string}  as        — HTML element to render, default "div"
 */
export default function ScrollReveal({
  children,
  delay = 0,
  duration = 0.6,
  y = 28,
  className = "",
  as = "div",
}) {
  const MotionTag = motion[as] || motion.div;

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </MotionTag>
  );
}
