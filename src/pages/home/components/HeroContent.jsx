import { Link } from "react-router-dom";
import { FaPhoneAlt, FaFileAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import CountUp from "../../../components/animations/CountUp";

// Shared easing
const ease = [0.22, 1, 0.36, 1];

// Individual item variants for stagger
const itemVariant = (delay) => ({
  initial: { opacity: 0, y: 28 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease },
  },
});

export function HeroContent() {
  return (
    <div className="relative z-10 w-full max-w-[1300px] mx-auto px-5 py-20 sm:px-8 sm:py-24 lg:px-4 lg:py-32">
      <div className="max-w-[780px]">

        {/* EYEBROW TAG */}
        <motion.div
          variants={itemVariant(0)}
          initial="initial"
          animate="animate"
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-[0.18em] text-secondary mb-6"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
          Est. 2019 · Udumalpet, Tamil Nadu
        </motion.div>

        {/* MAIN SEO HEADING */}
        <div className="overflow-hidden">
          <motion.h1
            variants={itemVariant(0.15)}
            initial="initial"
            animate="animate"
            className="font-extrabold text-white text-4xl leading-[1.07] sm:text-5xl lg:text-6xl xl:text-7xl lg:leading-[1.05] tracking-tight"
          >
            From Blueprint to
            <span className="block text-secondary mt-1">Doorstep</span>
          </motion.h1>
        </div>

        {/* DESCRIPTION */}
        <motion.p
          variants={itemVariant(0.3)}
          initial="initial"
          animate="animate"
          className="mt-6 max-w-[620px] text-slate-300 text-base leading-7 sm:text-lg sm:leading-8"
        >
          VIP Construction builds homes and commercial spaces with quality,
          honest work, and on-time delivery — serving Coimbatore, Udumalpet,
          Tiruppur, Pollachi, Dharapuram, and Palani.
        </motion.p>

        {/* CTA BUTTONS */}
        <motion.div
          variants={itemVariant(0.45)}
          initial="initial"
          animate="animate"
          className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center lg:mt-10"
        >
          {/* PRIMARY CTA — fill-sweep amber */}
          <Link
            to="tel:+919080273030"
            className="btn-fill-sweep inline-flex items-center justify-center gap-2 bg-secondary text-white font-bold px-7 py-3.5 rounded-lg transition-colors duration-300 text-sm sm:text-base group"
          >
            <span className="relative z-10 flex items-center gap-2">
              <FaPhoneAlt size={15} />
              Contact Us
            </span>
          </Link>

          {/* SECONDARY CTA */}
          <Link
            to="/project"
            className="inline-flex items-center justify-center gap-2 border border-white/30 bg-white/5 hover:bg-white/10 hover:border-white/50 text-white font-semibold px-7 py-3.5 rounded-lg backdrop-blur-sm transition-all duration-300 text-sm sm:text-base"
          >
            <FaFileAlt size={15} />
            View Projects
          </Link>
        </motion.div>

        {/* STATS — count up when in view */}
        <motion.div
          variants={itemVariant(0.6)}
          initial="initial"
          animate="animate"
          className="mt-14 grid grid-cols-3 max-w-[560px]"
        >
          {/* EXPERIENCE */}
          <div className="pr-4 sm:pr-8">
            <p className="text-secondary font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-none">
              <CountUp target={7} suffix="+" />
            </p>
            <p className="mt-2 text-slate-400 text-xs sm:text-sm leading-snug">
              Years of Experience
            </p>
          </div>

          {/* PROJECTS */}
          <div className="px-4 sm:px-8 border-l border-white/15">
            <p className="text-secondary font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-none">
              <CountUp target={100} suffix="+" />
            </p>
            <p className="mt-2 text-slate-400 text-xs sm:text-sm leading-snug">
              Projects Completed
            </p>
          </div>

          {/* SATISFACTION */}
          <div className="pl-4 sm:pl-8 border-l border-white/15">
            <p className="text-secondary font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-none">
              <CountUp target={100} suffix="%" />
            </p>
            <p className="mt-2 text-slate-400 text-xs sm:text-sm leading-snug">
              Client Satisfaction
            </p>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
