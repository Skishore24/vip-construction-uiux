import { FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaFileAlt } from "react-icons/fa";
import heroImg from "../assets/hero.webp";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];
const item = (delay) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.7, delay, ease } },
});

const ContactHero = () => {
  return (
    <section className="relative w-full overflow-hidden min-h-[60svh] lg:min-h-[72svh] flex items-center">
      {/* Background Image — Ken Burns zoom */}
      <img
        src={heroImg}
        alt="VIP Construction"
        className="absolute inset-0 w-full h-full object-cover object-center ken-burns"
        aria-hidden="true"
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" aria-hidden="true" />

      {/* Navy Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1A1F2E]/97 via-[#1A1F2E]/80 to-transparent" aria-hidden="true" />

      {/* Golden Glow */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 65% 50%, rgba(245,166,35,0.12), transparent 40%)",
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1300px] mx-auto px-5 py-20 sm:px-8 sm:py-24 lg:px-4 lg:py-28">
        <div className="max-w-[780px]">

          {/* Eyebrow */}
          <motion.div
            variants={item(0)}
            initial="initial"
            animate="animate"
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-[0.18em] text-secondary mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
            Free Site Visit · No Pressure
          </motion.div>

          {/* MAIN SEO HEADING */}
          <motion.h1
            variants={item(0.15)}
            initial="initial"
            animate="animate"
            className="font-extrabold text-white text-4xl leading-[1.07] sm:text-5xl lg:text-6xl xl:text-7xl lg:leading-[1.05] tracking-tight"
          >
            Let's Talk About Your Building
            <span className="block text-secondary mt-1">Project</span>
          </motion.h1>

          {/* DESCRIPTION */}
          <motion.p
            variants={item(0.3)}
            initial="initial"
            animate="animate"
            className="mt-6 max-w-[650px] text-slate-300 text-base leading-7 sm:text-lg sm:leading-8"
          >
            House, shop, office, or renovation — tell us what you're planning.
            Free site visit, honest quote, no pressure to sign.
          </motion.p>

          {/* CTA BUTTONS */}
          <motion.div
            variants={item(0.45)}
            initial="initial"
            animate="animate"
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center lg:mt-10"
          >
            {/* VIEW PROJECTS */}
            <Link
              to="/project"
              className="btn-fill-sweep inline-flex items-center justify-center gap-2 bg-secondary hover:bg-gold-hover text-white font-bold px-7 py-3.5 rounded-lg transition-colors duration-300 text-sm sm:text-base group"
            >
              <span className="relative z-10 flex items-center gap-2">
                <FaFileAlt size={15} />
                View Projects
              </span>
            </Link>

            {/* CONTACT */}
            <Link
              to="tel:+919080273030"
              className="inline-flex items-center justify-center gap-2 border border-white/30 bg-black/10 hover:bg-white/10 hover:border-white/50 text-white font-semibold px-7 py-3.5 rounded-lg backdrop-blur-sm transition-all duration-300 text-sm sm:text-base"
            >
              <FaPhoneAlt size={15} />
              Contact Us
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
