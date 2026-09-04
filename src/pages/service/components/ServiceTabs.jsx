import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { services } from "../data/services";
import TabNavigation from "./TabNavigation";
import ServiceContent from "./ServiceContent";
import ScrollReveal from "../../../components/animations/ScrollReveal";

export default function ServiceTabs() {
  const [activeTab, setActiveTab] = useState("residential");

  const activeService =
    services.find((service) => service.id === activeTab) || services[0];

  return (
    <section id="services" className="bg-slate-50 py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal className="mx-auto max-w-2xl text-center mb-10 sm:mb-12">
          <span className="inline-block rounded-full bg-secondary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-secondary border border-secondary/20 mb-4">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary tracking-tight leading-[1.1] mb-4">
            Construction Solutions
          </h2>
          <p className="text-sm lg:text-base text-slate-500 leading-relaxed max-w-xl mx-auto">
            Complete construction solutions from architectural planning and structural execution
            to interiors, renovation, and commercial complexes with engineering precision.
          </p>
        </ScrollReveal>

        {/* Tabs */}
        <ScrollReveal delay={0.1} className="mt-8 sm:mt-10">
          <TabNavigation
            services={services}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </ScrollReveal>

        {/* Active Content — crossfade on tab switch */}
        <ScrollReveal delay={0.15}>
          <div className="mt-6 sm:mt-8 rounded-2xl bg-white p-5 sm:p-8 shadow-lg border border-slate-200/80 overflow-hidden">
            <AnimatePresence mode="wait">
              <ServiceContent key={activeService.id} service={activeService} />
            </AnimatePresence>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
