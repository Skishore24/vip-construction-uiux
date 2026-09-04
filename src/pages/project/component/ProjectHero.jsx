import banner from "../../../assets/project/hero_section/Project_Banner.webp";
import ProjectStats from "./ProjectStats";
import ProjectButtons from "./ProjectButtons";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];
const item = (delay) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.7, delay, ease } },
});

const ProjectHero = () => {
  return (
    <section className="relative min-h-[70vh] md:min-h-[75svh] flex items-center overflow-hidden">

      {/* Background Image — Ken Burns zoom */}
      <img
        src={banner}
        alt="VIP Construction Projects"
        className="absolute inset-0 w-full h-full object-cover ken-burns"
        aria-hidden="true"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-bg-black/95 via-primary/85 to-primary/50" aria-hidden="true" />

      {/* Amber glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 40% 50% at 80% 50%, rgba(245,166,35,0.08) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-16 py-20 md:py-24">
        <div className="max-w-4xl">

          {/* Eyebrow */}
          <motion.div
            variants={item(0)}
            initial="initial"
            animate="animate"
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-[0.18em] text-secondary mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
            Our Portfolio · Est. 2019
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={item(0.15)}
            initial="initial"
            animate="animate"
            className="font-extrabold leading-[1.07] text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight"
          >
            Our <span className="text-secondary">Work</span> Our{" "}
            <span className="text-secondary">Pride</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={item(0.3)}
            initial="initial"
            animate="animate"
            className="mt-5 max-w-2xl text-white/80 leading-relaxed text-sm sm:text-base lg:text-lg"
          >
            Houses, shops, and offices we've built across Coimbatore, Udumalpet,
            Tiruppur, Pollachi, Dharapuram, and Palani. See the work for yourself
            before you decide.
          </motion.p>

          {/* Stats */}
          <motion.div
            variants={item(0.45)}
            initial="initial"
            animate="animate"
            className="mt-10"
          >
            <ProjectStats />
          </motion.div>

          {/* Buttons */}
          <motion.div
            variants={item(0.6)}
            initial="initial"
            animate="animate"
            className="mt-8"
          >
            <ProjectButtons />
          </motion.div>

        </div>
      </div>

    </section>
  );
};

export default ProjectHero;