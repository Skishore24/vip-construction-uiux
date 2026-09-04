import {
  MapPin,
  ArrowRight,
  Maximize,
  IndianRupee,
  Calendar,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const ProjectCard = ({ project }) => {
  const navigate = useNavigate();

  const statusColor =
    project.status === "Completed"
      ? "bg-emerald-500"
      : project.status === "Ongoing"
      ? "bg-amber-500"
      : project.status === "Upcoming"
      ? "bg-blue-500"
      : "bg-slate-500";

  return (
    <div className="group cursor-pointer" onClick={() => navigate(`/project/${project.id}`)}>

      {/* IMAGE CARD */}
      <div className="relative overflow-hidden rounded-2xl shadow-lg aspect-[4/3]">
        <img
          src={project.cover}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.07]"
          loading="lazy"
        />

        {/* DARK BASE GRADIENT */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />

        {/* HOVER OVERLAY — slides up from bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/70 to-primary/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]" />

        {/* STATUS BADGE */}
        <div
          className={`absolute top-3 left-3 px-3 py-1 rounded-md text-[10px] font-bold uppercase text-white shadow-md ${statusColor}`}
        >
          {project.status}
        </div>

        {/* CONTENT — always visible location, hover reveals CTA */}
        <div className="absolute bottom-0 left-0 w-full p-5">
          {/* Location */}
          <div className="flex items-center gap-1.5 text-secondary mb-1">
            <MapPin size={14} />
            <span className="text-white/90 text-xs font-medium">
              {project.location}
            </span>
          </div>

          {/* Title — fades up on hover */}
          <h3 className="text-white font-bold text-base leading-snug opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400 ease-out delay-50">
            {project.title}
          </h3>

          {/* CTA button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigate(`/project/${project.id}`);
            }}
            className="mt-3 inline-flex items-center gap-2 text-secondary font-semibold text-sm opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400 ease-out delay-100"
          >
            View Gallery
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform duration-300"
            />
          </button>
        </div>
      </div>

      {/* BOTTOM DETAILS */}
      <div className="grid grid-cols-3 gap-2 mt-4 pt-4 border-t border-slate-100">
        <div className="flex items-center gap-1.5 min-w-0">
          <Maximize size={15} className="text-secondary flex-shrink-0" />
          <span className="text-xs font-medium text-slate-700 truncate">{project.area}</span>
        </div>

        <div className="flex items-center gap-1.5 min-w-0 justify-center">
          <IndianRupee size={15} className="text-secondary flex-shrink-0" />
          <span className="text-xs font-medium text-slate-700 truncate">{project.price}</span>
        </div>

        <div className="flex items-center gap-1.5 min-w-0 justify-end">
          <Calendar size={15} className="text-secondary flex-shrink-0" />
          <span className="text-xs font-medium text-slate-700 truncate">{project.year}</span>
        </div>
      </div>

    </div>
  );
};

export default ProjectCard;