import { NavLink, Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import { MdCallMade } from "react-icons/md";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SymbolLogo from "../assets/logo/SymbolLogo.webp";
import NameLogo from "../assets/logo/NameLogo.webp";
import { MobileNavDropDown } from "./MobileNavDropDown";

export function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <div className="mx-auto lg:max-w-[1300px] py-2 flex justify-between lg:px-1 items-center px-3 pr-5">
        {/* LOGO */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <Link className="flex gap-1.5" to="/">
            <div className="h-15 w-20 lg:w-25 lg:my-1 lg:mx-1">
              <img
                className="w-full h-full object-contain"
                src={SymbolLogo}
                alt="VIP CONSTRUCTION UDUMALPET"
              />
            </div>

            <div className="h-16 w-50 lg:w-60">
              <img
                className="w-full h-full object-contain"
                src={NameLogo}
                alt="VIP CONSTRUCTION UDUMALPET"
              />
            </div>
          </Link>
        </motion.div>

        {/* NAV LINKS */}
        <motion.div
          className="hidden lg:block"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <ul className="flex items-center gap-7 list-none font-poppins">
            <li>
              <NavLink to="/" end className="nav-link-underline">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/project" className="nav-link-underline">
                Project
              </NavLink>
            </li>
            <li>
              <NavLink to="/service" className="nav-link-underline">
                Service
              </NavLink>
            </li>
            <li>
              <NavLink to="/about-us" className="nav-link-underline">
                About Us
              </NavLink>
            </li>
            <li>
              {/* FILL-SWEEP CTA BUTTON */}
              <NavLink
                to="/contact"
                className="btn-fill-sweep relative px-5 py-2.5 font-semibold bg-secondary text-white rounded-lg flex items-center gap-1.5 text-sm overflow-hidden hover:text-white transition-colors duration-300 group"
              >
                <span className="relative z-10 flex items-center gap-1.5">
                  Contact Us <MdCallMade size={18} className="group-hover:rotate-45 transition-transform duration-300" />
                </span>
              </NavLink>
            </li>
          </ul>
        </motion.div>

        {/* MOBILE / TABLET HAMBURGER */}
        <motion.button
          type="button"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="lg:hidden flex items-center justify-center text-slate-100 hover:text-secondary transition-colors duration-300 cursor-pointer"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          whileTap={{ scale: 0.9 }}
        >
          <AnimatePresence mode="wait">
            {isMenuOpen ? (
              <motion.span
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <HiX size={28} />
              </motion.span>
            ) : (
              <motion.span
                key="open"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <HiMenu size={28} />
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* MOBILE / TABLET DROPDOWN */}
      <MobileNavDropDown closeMenu={closeMenu} isMenuOpen={isMenuOpen} />
    </>
  );
}
