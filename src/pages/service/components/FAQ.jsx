import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import { faqs } from "../data/faq";
import ScrollReveal from "../../../components/animations/ScrollReveal";
import { StaggerContainer, StaggerItem } from "../../../components/animations/StaggerContainer";

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <ScrollReveal className="text-center mb-10 sm:mb-12">
          <span className="inline-block rounded-full bg-secondary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-secondary border border-secondary/20 mb-4">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm lg:text-base text-slate-500 leading-relaxed">
            Find answers to common questions about our construction services, pricing, and site process.
          </p>
        </ScrollReveal>

        {/* Accordion List */}
        <StaggerContainer className="space-y-3" stagger={0.06}>
          {faqs.map((faq, index) => (
            <StaggerItem key={faq.id}>
              <div
                className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                  open === index
                    ? "border-secondary/40 bg-secondary/[0.02] shadow-md"
                    : "border-slate-200 bg-white shadow-sm hover:shadow-md hover:border-slate-300"
                }`}
              >
                <button
                  onClick={() => setOpen(open === index ? -1 : index)}
                  className="flex w-full items-center justify-between px-5 py-4 sm:px-6 sm:py-5 text-left gap-4 transition duration-300"
                  aria-expanded={open === index}
                >
                  <h3 className="text-sm sm:text-base font-bold text-slate-900">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: open === index ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="flex-shrink-0 text-secondary"
                  >
                    <FaChevronDown className="text-sm sm:text-base" />
                  </motion.div>
                </button>

                {/* Animated height with AnimatePresence */}
                <AnimatePresence initial={false}>
                  {open === index && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      style={{ overflow: "hidden" }}
                    >
                      <p className="px-5 pb-5 sm:px-6 sm:pb-6 text-sm leading-relaxed text-slate-600 border-t border-slate-100 pt-4">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
