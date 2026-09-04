import { FaHelmetSafety } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaPhoneAlt, FaArrowRight } from "react-icons/fa";
import ScrollReveal from "../../../components/animations/ScrollReveal";

export function CTA() {
  return (
    <section className="bg-primary relative overflow-hidden">
      {/* Diagonal amber accent stripe */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(105deg, transparent 40%, rgba(245,166,35,0.06) 40%, rgba(245,166,35,0.06) 60%, transparent 60%)",
        }}
        aria-hidden="true"
      />
      {/* Radial glow right side */}
      <div
        className="absolute right-0 top-0 bottom-0 w-1/2 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 80% at 90% 50%, rgba(245,166,35,0.08) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <ScrollReveal>
        <div className="px-4 sm:px-6 lg:px-0 py-8 lg:py-10 max-w-[1200px] mx-auto flex lg:items-center lg:justify-between flex-col lg:flex-row gap-6 relative z-10">
          {/* LEFT CONTAINER */}
          <div className="flex gap-4 items-start lg:items-center">
            {/* ICON DIV */}
            <div className="shrink-0 bg-secondary/20 p-3.5 rounded-xl border border-secondary/30">
              <FaHelmetSafety size={28} className="text-secondary" />
            </div>

            {/* TEXT DIV */}
            <div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white leading-tight">
                Ready to Start Your Construction?
              </h3>
              <p className="text-sm text-slate-400 mt-1.5">
                Get a free consultation with VIP Construction, Tamil Nadu's
                trusted builder.
              </p>
            </div>
          </div>

          {/* RIGHT CONTAINER */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:shrink-0">
            {/* PRIMARY */}
            <Link
              to="tel:+919080273030"
              className="btn-fill-sweep flex justify-center w-full sm:w-auto items-center gap-2 text-primary bg-secondary px-6 py-3.5 font-bold rounded-lg hover:text-primary transition-colors duration-300 text-sm"
            >
              <span className="relative z-10 flex items-center gap-2">
                <FaPhoneAlt size={14} />
                Contact Us
              </span>
            </Link>
            {/* SECONDARY */}
            <Link
              to="/project"
              className="flex items-center justify-center gap-2 w-full sm:w-auto bg-transparent border border-white/20 px-6 py-3.5 font-bold text-white hover:border-white/50 hover:bg-white/5 rounded-lg transition-all duration-300 text-sm group"
            >
              View Projects
              <FaArrowRight
                size={13}
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </Link>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
