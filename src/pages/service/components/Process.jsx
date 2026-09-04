import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  FaComments,
  FaDraftingCompass,
  FaFileInvoiceDollar,
  FaClipboardCheck,
  FaKey,
} from "react-icons/fa";
import { MdEngineering } from "react-icons/md";
import ScrollReveal from "../../../components/animations/ScrollReveal";
import { StaggerContainer, StaggerItem } from "../../../components/animations/StaggerContainer";

const steps = [
  {
    id: "01",
    icon: <FaComments />,
    title: "01. Consultation",
    description:
      "We discuss your vision, budget, and timeline before anything is planned.",
  },
  {
    id: "02",
    icon: <FaDraftingCompass />,
    title: "02. Planning",
    description:
      "Complete site planning with architectural, structural, and 2D & 3D design layouts.",
  },
  {
    id: "03",
    icon: <FaFileInvoiceDollar />,
    title: "03. Quotation",
    description:
      "A clear, customized quote for your budget — no compromise on quality or design.",
  },
  {
    id: "04",
    icon: <MdEngineering size={28} />,
    title: "04. Construction",
    description:
      "Work carried out with precision, quality materials, and strict safety standards.",
  },
  {
    id: "05",
    icon: <FaClipboardCheck />,
    title: "05. Quality Check",
    description:
      "Regular inspections at every stage to ensure a strong, safe structure.",
  },
  {
    id: "06",
    icon: <FaKey />,
    title: "06. Handover",
    description:
      "Final handover with complete documentation, warranty details, and ongoing support.",
  },
];

function AnimatedSvgPath() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <svg
      ref={ref}
      viewBox="0 0 800 484"
      fill="none"
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
      preserveAspectRatio="none"
    >
      <motion.path
        d="M 133,64 L 720,64 C 785,64 785,197 720,197 L 80,197 C 15,197 15,330 80,330 L 667,330"
        stroke="#F5A623"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={isInView ? { pathLength: 1, opacity: 0.75 } : { pathLength: 0, opacity: 0 }}
        transition={{ duration: 1.8, ease: "easeInOut", delay: 0.3 }}
      />
    </svg>
  );
}

export default function Process() {
  return (
    <section
      id="process"
      className="bg-slate-50 py-20 sm:py-24 lg:py-28 border-t border-slate-200/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Left-Aligned Heading */}
        <ScrollReveal className="text-left mb-10 lg:mb-14 max-w-xl">
          <span className="span-heading">Step by Step Process</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
            We Handle Every Step Carefully
          </h2>
        </ScrollReveal>

        {/* DESKTOP — S-CURVE with animated path */}
        <div className="relative hidden md:block max-w-4xl mx-auto py-6">
          <AnimatedSvgPath />

          {/* Row 1 (Steps 1–3) */}
          <StaggerContainer
            className="grid grid-cols-3 gap-8 relative z-10 mr-6"
            stagger={0.15}
          >
            {steps.slice(0, 3).map((step) => (
              <StaggerItem key={step.id}>
                <div className="group flex flex-col items-center text-center px-4 h-[200px]">
                  <div className="w-20 h-20 rounded-full bg-white border-2 border-slate-200 shadow-sm text-slate-400 group-hover:border-secondary group-hover:shadow-lg group-hover:scale-110 group-hover:text-secondary transition-all duration-300 flex items-center justify-center text-2xl cursor-pointer relative z-10">
                    {step.icon}
                  </div>
                  <h3 className="mt-4 text-sm font-bold text-slate-800 group-hover:text-secondary transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 text-xs text-slate-500 leading-relaxed max-w-[210px] mx-auto">
                    {step.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Row 2 (Steps 4–6) */}
          <StaggerContainer
            className="grid grid-cols-3 gap-8 relative z-10 mt-24"
            stagger={0.15}
            delay={0.45}
          >
            {steps.slice(3, 6).map((step) => (
              <StaggerItem key={step.id}>
                <div className="group flex flex-col items-center text-center px-4 h-[170px]">
                  <div className="w-20 h-20 rounded-full bg-white border-2 border-slate-200 shadow-sm text-slate-400 group-hover:border-secondary group-hover:shadow-lg group-hover:scale-110 group-hover:text-secondary transition-all duration-300 flex items-center justify-center text-2xl cursor-pointer relative z-10">
                    {step.icon}
                  </div>
                  <h3 className="mt-4 text-sm font-bold text-slate-800 group-hover:text-secondary transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 text-xs text-slate-500 leading-relaxed max-w-[210px] mx-auto">
                    {step.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        {/* MOBILE — vertical timeline */}
        <div className="relative md:hidden max-w-md mx-auto px-2 py-0">
          <StaggerContainer className="space-y-8 relative" stagger={0.1}>
            {steps.map((step, index) => (
              <StaggerItem key={step.id}>
                <div className="relative flex gap-5 items-start">
                  {index < steps.length - 1 && (
                    <div className="absolute left-6 top-12 bottom-[-36px] w-0.5 bg-secondary/40 z-0" />
                  )}
                  <div className="w-12 h-12 rounded-full bg-white border-2 border-slate-200 shadow-sm text-secondary flex items-center justify-center text-lg relative z-10 flex-shrink-0">
                    {step.icon}
                  </div>
                  <div className="flex-1 pt-1.5">
                    <h3 className="text-sm font-bold text-slate-900">{step.title}</h3>
                    <p className="mt-1 text-xs text-slate-500 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
