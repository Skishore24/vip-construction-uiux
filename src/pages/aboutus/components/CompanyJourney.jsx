import { companyJourney } from "../data/aboutData";
import { Flag, Building2, ShieldCheck, Milestone, CalendarDays, Check } from "lucide-react";
import ScrollReveal from "../../../components/animations/ScrollReveal";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const iconMap = {
  Flag,
  Building2,
  ShieldCheck,
  Milestone,
  CalendarDays,
};

function AnimatedTimelineLine() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div
      ref={ref}
      className="absolute left-4 sm:left-6 lg:left-1/2 top-4 bottom-4 w-0.5 bg-slate-200 lg:-translate-x-1/2 rounded-full pointer-events-none overflow-hidden"
    >
      <motion.div
        className="w-full bg-secondary/50 origin-top"
        initial={{ scaleY: 0 }}
        animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
        transition={{ duration: 2, ease: "easeInOut", delay: 0.3 }}
        style={{ height: "100%" }}
      />
    </div>
  );
}

export default function CompanyJourney() {
  return (
    <section id="journey" className="py-20 sm:py-24 lg:py-28 bg-white text-slate-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <ScrollReveal className="max-w-2xl mb-12 lg:mb-16">
          <span className="span-heading text-secondary">
            Company Roadmap · 2019 to Present
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary tracking-tight leading-[1.1] mb-3">
            Building Our Legacy Step by Step
          </h2>
          <p className="text-sm lg:text-base text-slate-500 leading-relaxed">
            From founding VIP Construction in 2019 to growing into commercial projects
            and launching our digital client tracking platform.
          </p>
        </ScrollReveal>

        {/* Timeline Container */}
        <div className="relative">
          {/* Animated Vertical Connecting Line */}
          <AnimatedTimelineLine />

          <div className="space-y-6 sm:space-y-8 lg:space-y-10">
            {companyJourney.map((step, idx) => {
              const IconComponent = iconMap[step.iconName] || Flag;
              const isEven = idx % 2 === 0;

              return (
                <motion.div
                  key={step.year}
                  initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className={`relative flex flex-col lg:flex-row items-start lg:items-center ${
                    isEven ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline Card */}
                  <div className="w-full lg:w-[calc(50%-28px)] pl-11 sm:pl-14 lg:pl-0 group">
                    <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-t-4 border-t-secondary cursor-pointer">

                      {/* Top Header */}
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="text-lg font-extrabold text-secondary font-mono tracking-tight">
                          {step.year}
                        </span>
                        <span className="text-xs font-bold px-3 py-0.5 rounded-full bg-primary text-white group-hover:bg-secondary group-hover:text-primary transition-colors">
                          {step.badge}
                        </span>
                      </div>

                      {/* Title & Subtitle */}
                      <h3 className="text-sm sm:text-base font-extrabold text-primary leading-tight mb-0.5 group-hover:text-secondary transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-xs font-bold text-secondary/80 uppercase tracking-wide mb-3">
                        {step.subtitle}
                      </p>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mb-4">
                        {step.description}
                      </p>

                      {/* Highlights */}
                      <div className="space-y-2 pt-3 border-t border-slate-100">
                        {step.highlights.map((hl, hIdx) => (
                          <div key={hIdx} className="flex items-start gap-2 text-xs font-medium text-slate-600">
                            <Check className="w-3.5 h-3.5 text-secondary flex-shrink-0 mt-0.5" />
                            <span className="leading-snug">{hl}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Icon Node */}
                  <div className="absolute left-4 sm:left-6 lg:left-1/2 -translate-x-1/2 top-4 lg:top-1/2 lg:-translate-y-1/2 z-10 w-9 h-9 rounded-full bg-primary border-2 border-secondary text-secondary flex items-center justify-center shadow-md flex-shrink-0 transition-all duration-300">
                    <IconComponent className="w-4 h-4" />
                  </div>

                  {/* Spacer */}
                  <div className="hidden lg:block w-[calc(50%-28px)]" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
