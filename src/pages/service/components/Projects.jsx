import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { projects } from "../../project/utils/ProjectData";
import ProjectCard from "../../project/component/ProjectCard";
import ScrollReveal from "../../../components/animations/ScrollReveal";
import { StaggerContainer, StaggerItem } from "../../../components/animations/StaggerContainer";

export default function Projects() {
  const completedProjects = projects
    .filter((project) => project.status === "Completed")
    .slice(0, 4);

  return (
    <section id="projects" className="bg-slate-900 py-20 sm:py-24 lg:py-28 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <ScrollReveal className="text-center mb-10 sm:mb-12">
          <span className="inline-block rounded-full bg-secondary/15 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-secondary border border-secondary/25 mb-4">
            Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.1]">
            Featured Projects
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm lg:text-base text-slate-400 leading-relaxed">
            A look at our completed homes, shops, offices, and commercial buildings across
            Coimbatore, Udumalpet, Tiruppur, Pollachi, Dharapuram, and Palani.
          </p>
        </ScrollReveal>

        {/* Cards Grid */}
        <StaggerContainer
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          stagger={0.08}
        >
          {completedProjects.map((project) => (
            <StaggerItem key={project.id}>
              <ProjectCard project={project} />
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* View All Button */}
        <ScrollReveal delay={0.2} className="mt-12 text-center">
          <Link
            to="/project"
            className="btn-fill-sweep inline-flex items-center justify-center gap-2.5 rounded-full bg-secondary px-8 py-3.5 font-bold text-primary shadow-lg hover:shadow-secondary/25 transition-all duration-300 text-sm sm:text-base group"
          >
            <span className="relative z-10 flex items-center gap-2.5">
              View All Projects
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
