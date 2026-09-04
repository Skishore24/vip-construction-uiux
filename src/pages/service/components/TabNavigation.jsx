import { motion } from "framer-motion";
import { FaHome } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa";
import { FaCompassDrafting } from "react-icons/fa6";
import { FaCouch } from "react-icons/fa";
import { FaHammer } from "react-icons/fa";
import { BsBank } from "react-icons/bs";

const icons = {
  residential: <FaHome />,
  commercial: <FaBuilding />,
  bankloans: <BsBank />,
  architecture: <FaCompassDrafting />,
  interior: <FaCouch />,
  renovation: <FaHammer />,
};

export default function TabNavigation({ services, activeTab, setActiveTab }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 w-full">
      {services.map((service) => {
        const isActive = activeTab === service.id;
        return (
          <button
            key={service.id}
            onClick={() => setActiveTab(service.id)}
            className={`
              relative group flex flex-col sm:flex-row items-center justify-center sm:justify-start
              text-center sm:text-left w-full gap-2 sm:gap-3
              rounded-2xl px-3 py-4 sm:px-4 sm:py-3.5 lg:px-3 lg:py-3 xl:px-5 xl:py-4
              transition-all duration-300 border active:scale-95 overflow-hidden
              ${isActive
                ? "bg-primary border-primary text-white shadow-xl scale-[1.02]"
                : "bg-white border-slate-200 text-slate-800 hover:border-secondary/40 hover:shadow-md"
              }
            `}
          >
            {/* Sliding amber indicator at bottom for active tab */}
            {isActive && (
              <motion.div
                layoutId="tab-indicator"
                className="absolute bottom-0 left-0 right-0 h-[3px] bg-secondary rounded-full"
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              />
            )}

            <div
              className={`text-xl sm:text-2xl transition-colors duration-300 ${
                isActive ? "text-secondary" : "text-secondary"
              }`}
            >
              {icons[service.id]}
            </div>

            <div>
              <h3 className="font-bold text-xs sm:text-sm lg:text-xs xl:text-base leading-tight">
                {service.title}
              </h3>
              <p
                className={`text-[9px] sm:text-xs lg:text-[10px] xl:text-xs mt-0.5 font-medium ${
                  isActive ? "text-slate-300" : "text-slate-500"
                }`}
              >
                {service.subtitle.split(" ")[0] || "Premium"} Choice
              </p>
            </div>
          </button>
        );
      })}
    </div>
  );
}
