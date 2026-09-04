import { whyChoose } from "../data/whychoose";
import ScrollReveal from "../../../components/animations/ScrollReveal";
import { StaggerContainer, StaggerItem } from "../../../components/animations/StaggerContainer";

export default function WhyChoose() {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal className="mx-auto max-w-2xl text-center mb-10 sm:mb-12">
          <span className="inline-block rounded-full bg-secondary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-secondary border border-secondary/20 mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary tracking-tight leading-[1.1]">
            Our Quality Commitment
          </h2>
          <p className="mt-4 text-sm lg:text-base text-slate-500 leading-relaxed max-w-xl mx-auto">
            Committed to strong structural safety, honest pricing, and hands-on site supervision on every project.
          </p>
        </ScrollReveal>

        {/* Feature Grid */}
        <StaggerContainer
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
          stagger={0.08}
        >
          {whyChoose.map((item) => {
            const Icon = item.icon;
            return (
              <StaggerItem key={item.id}>
                <div className="group flex flex-col items-center text-center p-5 sm:p-7 rounded-2xl bg-slate-50 border border-slate-200/80 transition-all duration-400 hover:bg-white hover:border-secondary/30 hover:shadow-xl hover:-translate-y-1.5 cursor-default h-full">
                  {/* Icon Container */}
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-secondary/10 text-secondary text-xl sm:text-2xl transition-all duration-300 group-hover:bg-secondary group-hover:text-white group-hover:scale-110">
                    <Icon />
                  </div>

                  {/* Title */}
                  <h3 className="mt-4 text-sm sm:text-base font-bold text-primary leading-snug group-hover:text-secondary transition-colors duration-300">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-2 text-xs sm:text-sm text-slate-500 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
