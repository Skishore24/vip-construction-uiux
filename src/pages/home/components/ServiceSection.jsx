import { data_container_1, data_container_2 } from "../data/service";
import ScrollReveal from "../../../components/animations/ScrollReveal";
import { StaggerContainer, StaggerItem } from "../../../components/animations/StaggerContainer";

export function ServiceSection() {
  return (
    <section className="py-20 lg:py-28 lg:max-w-[1200px] m-auto">
      <div>
        {/* SERVICE HEADER */}
        <ScrollReveal className="home-container-header">
          <span className="span-heading">What We Do</span>
          <h2 className="h2-heading">From Foundation to Finish, We Handle It All</h2>
          <div className="divider" />
        </ScrollReveal>

        {/* 1ST GRID CONTAINER */}
        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-4 lg:mx-2"
          stagger={0.07}
        >
          {data_container_1.map((service) => {
            const Icon = service.icon;
            return (
              <StaggerItem key={service.id}>
                <div className="group h-full px-5 py-7 sm:px-6 sm:py-8 lg:px-8 lg:py-10 border border-solid rounded-xl border-text-muted/30 hover:border-secondary/60 transition-all duration-400 ease-out hover:shadow-[0_8px_30px_rgba(245,166,35,0.18)] hover:-translate-y-1 bg-white cursor-default">
                  <div className="bg-secondary/10 flex w-12 items-center justify-center h-12 rounded-lg mb-5 group-hover:bg-secondary transition-all duration-300 ease-out">
                    <Icon
                      size={26}
                      className="text-secondary group-hover:text-white transition-colors duration-300"
                    />
                  </div>
                  <h3 className="mb-2 font-bold text-primary text-sm lg:text-base">{service.heading}</h3>
                  <p className="text-sm leading-[1.65] text-text-dark-muted">
                    {service.description}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* 2ND GRID CONTAINER */}
        <StaggerContainer
          className="grid lg:grid-cols-3 gap-4 mt-5 lg:mx-2 mx-4"
          stagger={0.07}
          delay={0.1}
        >
          {data_container_2.map((service) => {
            const Icon = service.icon;
            return (
              <StaggerItem key={service.id}>
                <div className="group h-full px-5 py-7 sm:px-6 sm:py-8 lg:px-8 lg:py-10 border border-solid rounded-xl border-text-muted/30 hover:border-secondary/60 transition-all duration-400 ease-out hover:shadow-[0_8px_30px_rgba(245,166,35,0.18)] hover:-translate-y-1 bg-white cursor-default">
                  <div className="bg-secondary/10 flex w-12 items-center justify-center h-12 rounded-lg mb-5 group-hover:bg-secondary transition-all duration-300 ease-out">
                    <Icon
                      size={26}
                      className="text-secondary group-hover:text-white transition-colors duration-300"
                    />
                  </div>
                  <h3 className="mb-2 font-bold text-primary text-sm lg:text-base">{service.heading}</h3>
                  <p className="text-sm leading-[1.65] text-text-dark-muted">
                    {service.description}
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
