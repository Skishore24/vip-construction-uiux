import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { to: "/", label: "Home", end: true },
  { to: "/project", label: "Project" },
  { to: "/service", label: "Service" },
  { to: "/about-us", label: "About Us" },
  { to: "/contact", label: "Contact Us" },
];

const menuVariants = {
  hidden: { opacity: 0, height: 0 },
  visible: {
    opacity: 1,
    height: "auto",
    transition: {
      duration: 0.3,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.06,
      delayChildren: 0.05,
    },
  },
  exit: {
    opacity: 0,
    height: 0,
    transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] },
  },
};

const linkVariants = {
  hidden: { opacity: 0, x: -16 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
  },
  exit: { opacity: 0, x: -16 },
};

export function MobileNavDropDown({ closeMenu, isMenuOpen }) {
  return (
    <AnimatePresence>
      {isMenuOpen && (
        <motion.div
          variants={menuVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="lg:hidden overflow-hidden w-full bg-[#0F172A] border-t border-white/5 shadow-2xl"
        >
          <ul className="flex flex-col font-poppins px-5 py-2">
            {navItems.map((item, index) => (
              <motion.li key={item.to} variants={linkVariants}>
                <NavLink
                  to={item.to}
                  end={item.end}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `block py-3.5 border-b border-white/5 text-sm font-medium transition-colors duration-200 ${
                      isActive ? "text-secondary" : "text-white/80 hover:text-secondary"
                    } ${index === navItems.length - 1 ? "border-b-0 pb-4" : ""}`
                  }
                >
                  {item.label}
                </NavLink>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
