import heroImage from "../images/hero.webp";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Compass,
  ShieldCheck,
  Building2,
  HardHat,
  Users,
} from "lucide-react";

const ease = [0.22, 1, 0.36, 1];
const item = (delay) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.7, delay, ease } },
});

const highlights = [
  { icon: ShieldCheck, label: "ISO Standard", sub: "Certified QA" },
  { icon: HardHat, label: "15+ Yrs", sub: "Skilled Labour" },
  { icon: Users, label: "150+", sub: "Man Power" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative py-24 sm:py-28 lg:py-36 bg-[#0F172A] text-white overflow-hidden"
    >
      {/* Background Subtle Dot Pattern */}
      <div
        className="absolute inset-0 opacity-[0.10] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#F5A623 1px, transparent 1px)`,
          backgroundSize: `28px 28px`,
        }}
      />

      {/* Radial amber glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 50% at 80% 50%, rgba(245,166,35,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 lg:gap-12 items-center">
          {/* Left Column */}
          <div className="lg:col-span-7 w-full text-left">
            {/* Eyebrow Tag */}
            <motion.div
              variants={item(0)}
              initial="initial"
              animate="animate"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-[0.18em] text-secondary mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
              VIP Construction Services · Est. 2019
            </motion.div>

            {/* H1 */}
            <motion.h1
              variants={item(0.15)}
              initial="initial"
              animate="animate"
              className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.07] text-white mb-6"
            >
              Complete{" "}
              <span className="text-secondary">Building Solutions</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={item(0.3)}
              initial="initial"
              animate="animate"
              className="text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed max-w-xl mb-8"
            >
              VIP Construction handles homes, shops, offices, and commercial buildings across
              Coimbatore, Udumalpet, Tiruppur, Pollachi, Dharapuram, and Palani — with strong
              structures, honest pricing, and on-time handover.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              variants={item(0.45)}
              initial="initial"
              animate="animate"
              className="flex flex-wrap items-center gap-4 mb-10"
            >
              <Link
                to="/project"
                className="btn-fill-sweep h-12 px-6 rounded-lg bg-secondary w-full md:w-auto text-white font-bold text-sm inline-flex items-center justify-center gap-2 transition-colors duration-300 group"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Compass className="w-4 h-4" />
                  View Portfolio
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>

              <Link
                to="/about-us"
                className="h-12 px-6 w-full md:w-auto rounded-lg bg-white/5 border border-white/20 text-white font-bold text-sm inline-flex items-center justify-center gap-2 hover:bg-white/10 hover:border-white/40 transition-all duration-300"
              >
                Explore Our Journey
              </Link>
            </motion.div>

            {/* Feature Highlights */}
            <motion.div
              variants={item(0.6)}
              initial="initial"
              animate="animate"
              className="hidden pt-6 border-t border-white/10 md:grid grid-cols-3 gap-4"
            >
              {highlights.map(({ icon: Icon, label, sub }) => (
                <div key={label} className="flex items-center gap-3 p-2">
                  <Icon className="text-secondary flex-shrink-0" size={28} />
                  <div>
                    <p className="text-sm font-bold text-white leading-none">{label}</p>
                    <p className="text-xs text-slate-400 mt-0.5">{sub}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column Image */}
          <motion.div
            className="lg:col-span-5 w-full mt-10 lg:mt-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease }}
          >
            <div className="group relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl hover:border-secondary/30 hover:shadow-secondary/10 hover:shadow-2xl transition-all duration-500 cursor-pointer">
              <img
                src={heroImage}
                alt="VIP Construction Services"
                className="w-full aspect-video sm:aspect-[4/3] object-cover rounded-2xl group-hover:scale-[1.04] transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 via-transparent to-transparent" />

              <div className="absolute bottom-3 left-3 right-3 p-3.5 rounded-xl bg-[#0F172A]/90 group-hover:bg-[#0F172A]/95 backdrop-blur-md border border-white/10 group-hover:border-secondary/40 flex items-center gap-3 transition-all duration-400 group-hover:-translate-y-0.5">
                <div className="w-10 h-10 rounded-lg bg-secondary/15 border border-secondary/30 text-secondary group-hover:bg-secondary group-hover:text-primary flex items-center justify-center flex-shrink-0 transition-all duration-300">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-bold text-white group-hover:text-secondary transition-colors">
                    VIP Construction Services
                  </p>
                  <p className="text-[11px] text-slate-400">
                    Homes, Offices & Commercial Buildings
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
