import certifications from '../data/certifications';
import ScrollReveal from '../../../components/animations/ScrollReveal';
import { StaggerContainer, StaggerItem } from '../../../components/animations/StaggerContainer';

export function Certifications() {
  return (
    <section className="py-16 lg:py-24 lg:max-w-[1200px] m-auto">
      <div>
        {/* CERTIFICATIONS HEADER */}
        <ScrollReveal className="home-container-header">
          <span className="span-heading">Certifications & Partners</span>
          <h2 className="h2-heading">Proud to Work With</h2>
          <div className="divider" />
        </ScrollReveal>

        {/* CERTIFICATE SECTION */}
        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 lg:gap-6 mx-4 lg:mx-0"
          stagger={0.1}
        >
          {certifications.map((item) => (
            <StaggerItem key={item.id}>
              <div className="group min-h-[180px] px-8 py-8 flex flex-col items-center justify-center text-center bg-white rounded-xl border border-slate-100 hover:border-secondary/30 hover:shadow-[0_8px_30px_rgba(245,166,35,0.12)] transition-all duration-400 ease-out hover:-translate-y-1">
                {/* LOGO */}
                <div className="h-24 w-full flex items-center justify-center mb-5">
                  <img
                    src={item.logo}
                    alt={item.altText}
                    loading="lazy"
                    className="max-h-full max-w-full object-contain transition-transform duration-400 group-hover:scale-105"
                  />
                </div>

                {/* NAME */}
                <h3 className="text-sm lg:text-base font-bold text-primary">
                  {item.name}
                </h3>

                {/* TYPE */}
                <p className="mt-1 text-xs text-text-dark-muted">{item.type}</p>

                {/* ACCENT LINE */}
                <div className="mt-4 h-[2px] w-0 bg-secondary group-hover:w-12 transition-all duration-400 rounded-full" />
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
