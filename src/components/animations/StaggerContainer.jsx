import { motion } from "framer-motion";

/**
 * StaggerContainer — wraps a list of children and staggers their entrance
 * animations. Each direct child should use `motion.*` or be wrapped in
 * a motion element using the `staggerItem` variant exported below.
 *
 * @param {React.ReactNode} children
 * @param {number}  stagger   — seconds between each child's animation, default 0.08
 * @param {number}  delay     — initial delay before first child animates (s), default 0
 * @param {string}  className
 * @param {string}  as        — HTML tag, default "div"
 */

export const containerVariants = (stagger = 0.08, delay = 0) => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: stagger,
      delayChildren: delay,
    },
  },
});

export const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export function StaggerContainer({
  children,
  stagger = 0.08,
  delay = 0,
  className = "",
  as = "div",
}) {
  const MotionTag = motion[as] || motion.div;

  return (
    <MotionTag
      className={className}
      variants={containerVariants(stagger, delay)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
    >
      {children}
    </MotionTag>
  );
}

/**
 * StaggerItem — individual item inside a StaggerContainer.
 * Renders as a motion.div with the standard itemVariants.
 */
export function StaggerItem({ children, className = "", as = "div" }) {
  const MotionTag = motion[as] || motion.div;
  return (
    <MotionTag className={className} variants={itemVariants}>
      {children}
    </MotionTag>
  );
}
