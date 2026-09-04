import { missionVision } from "../data/aboutData";
import { Target, Eye, Check } from "lucide-react";
import ScrollReveal from "../../../components/animations/ScrollReveal";
import { StaggerContainer, StaggerItem } from "../../../components/animations/StaggerContainer";

export default function MissionVision() {
  return (
    <section
      id="mission-vision"
      className="py-20 sm:py-24 lg:py-28 bg-slate-100 text-gray-600 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <ScrollReveal className="max-w-2xl mb-10 lg:mb-14">
          <span className="span-heading">Guiding Principles</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary tracking-tight leading-[1.1] mb-3">Our Mission & Vision</h2>
          <p className="text-sm lg:text-base text-slate-500 leading-relaxed">
            The core values that guide every project we build, from the ground
            up.
          </p>
        </ScrollReveal>

        {/* 2-Column Responsive Cards Grid */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 lg:gap-8 items-stretch" stagger={0.12}>
          {/* Mission Card: bg-white */}
          <StaggerItem>
          <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-7 lg:p-8 shadow-sm hover:shadow-xl hover:-translate-y-1.5 hover:border-secondary/50 transition-all duration-400 flex flex-col justify-between group cursor-pointer h-full">
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="w-8 h-8 rounded-lg bg-[#F5A623]/15 border border-[#F5A623]/30 text-[#F5A623] group-hover:bg-[#F5A623] group-hover:text-[#0F172A] flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                  <Target className="w-4 h-4" />
                </div>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-700 border border-slate-200 group-hover:bg-[#0F172A] group-hover:text-white transition-colors">
                  Core Purpose
                </span>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-[#0F172A] mb-1.5 leading-tight group-hover:text-[#F5A623] transition-colors">
                {missionVision.mission.title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-3">
                {missionVision.mission.desc}
              </p>

              {/* All Bullet Points - Complete text */}
              <div className="space-y-1.5 pt-2.5 border-t border-slate-100">
                {missionVision.mission.points.map((pt, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2 text-xs font-medium text-slate-700 group-hover:text-slate-900 transition-colors"
                  >
                    <Check className="w-3.5 h-3.5 text-[#F5A623] flex-shrink-0 mt-0.5" />
                    <span className="leading-snug">{pt}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          </StaggerItem>

          <StaggerItem>
          <div className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-7 lg:p-8 shadow-sm hover:shadow-xl hover:-translate-y-1.5 hover:border-secondary/50 transition-all duration-400 flex flex-col justify-between group cursor-pointer h-full">
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="w-8 h-8 rounded-lg bg-[#F5A623]/15 bg-slate-100 border border-[#F5A623]/30 text-[#F5A623] group-hover:bg-[#F5A623] group-hover:text-[#0F172A] flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                  <Eye className="w-4 h-4" />
                </div>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-700 border border-slate-200 group-hover:bg-[#0F172A] group-hover:text-white transition-colors">
                  Future Horizon
                </span>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-[#0F172A] mb-1.5 leading-tight group-hover:text-[#F5A623] transition-colors">
                {missionVision.vision.title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-3">
                {missionVision.vision.desc}
              </p>

              {/* All Bullet Points - Complete text */}
              <div className="space-y-1.5 pt-2.5 border-t border-slate-200/60">
                {missionVision.vision.points.map((pt, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2 text-xs font-medium text-slate-700 group-hover:text-slate-900 transition-colors"
                  >
                    <Check className="w-3.5 h-3.5 text-[#F5A623] flex-shrink-0 mt-0.5" />
                    <span className="leading-snug">{pt}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
}
