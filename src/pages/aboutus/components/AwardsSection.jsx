import { awardsList } from "../data/aboutData";
import { Trophy, Award, Medal } from "lucide-react";
import ScrollReveal from "../../../components/animations/ScrollReveal";
import { StaggerContainer, StaggerItem } from "../../../components/animations/StaggerContainer";

const awardIconMap = {
  Trophy,
  Award,
  Medal,
};

export default function AwardsSection() {
  return (
    <section
      id="awards"
      className="py-20 sm:py-24 lg:py-28 bg-white text-primary relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <ScrollReveal className="max-w-xl mb-10 lg:mb-14">
          <span className="span-heading">Honors & Recognitions</span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-3">
            Awards of{" "}
            <span className="text-secondary">Engineering Excellence</span>
          </h2>

          <p className="text-sm lg:text-base text-slate-500 leading-relaxed">
            Recognized by civil engineering associations and state bodies for
            quality, safety, and honest construction practices.
          </p>
        </ScrollReveal>

        {/* 1 Row Grid for Awards */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 items-stretch" stagger={0.1}>
          {awardsList.map((award) => {
            const IconComp = awardIconMap[award.iconName] || Trophy;

            return (
              <StaggerItem key={award.id}>
              <div
                className="bg-[#0F172A] border border-slate-800 rounded-2xl p-5 sm:p-6 lg:p-7 shadow-md hover:border-secondary/60 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-secondary/10 transition-all duration-400 flex flex-col justify-between gap-3 group cursor-pointer h-full"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-[#F5A623]/10 border border-[#F5A623]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#F5A623] group-hover:border-[#F5A623] transition-all duration-300 group-hover:scale-110 shadow-sm">
                      <IconComp className="w-4 h-4 sm:w-5 sm:h-5 text-[#F5A623] group-hover:text-[#0F172A] transition-colors" />
                    </div>
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[#F5A623]/10 text-[#F5A623] border border-[#F5A623]/20 group-hover:bg-[#F5A623] group-hover:text-[#0F172A] transition-all">
                      {award.category}
                    </span>
                  </div>

                  <h3 className="text-xs sm:text-base font-bold text-white group-hover:text-[#F5A623] transition-colors mb-1 leading-tight">
                    {award.title}
                  </h3>

                  <p className="text-[10px] sm:text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                    {award.organization} •{" "}
                    <span className="text-[#F5A623]">{award.badge}</span>
                  </p>

                  <p className="text-xs text-slate-300 font-normal leading-relaxed group-hover:text-white transition-colors">
                    {award.description}
                  </p>
                </div>

                <div className="pt-2.5 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-[10px] text-slate-400 font-medium">
                    Recognized
                  </span>
                  <span className="px-2 py-0.5 rounded-full text-xs font-mono font-bold bg-white/10 text-slate-200 border border-white/10 group-hover:bg-[#F5A623] group-hover:text-[#0F172A] transition-colors">
                    {award.year}
                  </span>
                </div>
              </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
