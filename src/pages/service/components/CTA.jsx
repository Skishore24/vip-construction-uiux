import { FaArrowRight, FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import ScrollReveal from "../../../components/animations/ScrollReveal";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 py-20 sm:py-24 lg:py-28">
      {/* Background Glow Blobs */}
      <div className="absolute -top-40 -left-32 h-80 w-80 rounded-full bg-secondary/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-32 h-80 w-80 rounded-full bg-secondary/8 blur-3xl pointer-events-none" />

      {/* Content Container */}
      <ScrollReveal>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-7 sm:p-10 backdrop-blur-lg lg:flex lg:items-center lg:justify-between gap-8">
            {/* Left Column: Text */}
            <div className="max-w-xl">
              <span className="inline-block rounded-full bg-secondary px-4 py-1 text-xs font-extrabold uppercase tracking-[0.18em] text-primary mb-4 shadow-sm">
                Let's Build Together
              </span>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight mb-3">
                Ready to Start{" "}
                <span className="text-secondary">Your Dream Project?</span>
              </h2>

              <p className="text-sm lg:text-base leading-relaxed text-slate-300">
                Whether it's a home, shop, office, or renovation — our team is ready to help.
                Contact VIP Construction for a free site visit and honest quote.
              </p>
            </div>

            {/* Right Column: Actions */}
            <div className="mt-8 flex flex-wrap gap-4 lg:mt-0 flex-shrink-0">
              <Link
                to="/contact"
                className="btn-fill-sweep inline-flex items-center w-full justify-center md:w-auto gap-2 rounded-full bg-secondary px-7 py-3.5 font-bold text-primary shadow-lg transition-all duration-300 text-sm group"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Contact Us
                  <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>

              <Link
                to="tel:+919080273030"
                className="inline-flex w-full justify-center md:w-auto items-center gap-2 rounded-full border border-white/20 px-7 py-3.5 font-bold text-white transition-all duration-300 hover:bg-white hover:text-primary text-sm group"
              >
                <FaPhoneAlt className="text-xs" />
                Call Now
              </Link>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
