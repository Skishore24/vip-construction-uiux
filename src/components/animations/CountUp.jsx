import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

/**
 * CountUp — animates a number from 0 to `target` when it enters the viewport.
 * Uses Framer Motion's useMotionValue + useSpring for smooth easing.
 * Plays once. Handles suffixes like "+" or "%".
 *
 * @param {number}  target    — the final number to count to
 * @param {string}  suffix    — string appended after the number (e.g. "+", "%")
 * @param {number}  duration  — spring duration approximation, default 1.5s
 * @param {string}  className — additional classes on the <span>
 */
export default function CountUp({
  target,
  suffix = "",
  duration = 1.5,
  className = "",
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    stiffness: 60,
    damping: 20,
    restSpeed: 0.5,
  });

  useEffect(() => {
    if (isInView) {
      motionValue.set(target);
    }
  }, [isInView, target, motionValue]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.round(latest) + suffix;
      }
    });
    return unsubscribe;
  }, [springValue, suffix]);

  // Set initial text to prevent layout shift
  return (
    <span ref={ref} className={className}>
      0{suffix}
    </span>
  );
}
