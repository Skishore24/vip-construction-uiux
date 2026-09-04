import { Outlet } from "react-router-dom";
import { TopBar } from "../components/TopBar";
import { NavBar } from "../components/NavBar";
import Footer from "../components/Footer";
import FloatingContact from "../components/FloatingContact";
import PageTransition from "../components/animations/PageTransition";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function MainLayout() {
  const headerRef = useRef(null);
  const { scrollY } = useScroll();

  // TopBar collapses: height 36px -> 0px after 60px scroll
  const topBarHeight = useTransform(scrollY, [0, 80], ["36px", "0px"]);
  const topBarOpacity = useTransform(scrollY, [0, 60], [1, 0]);

  // Nav background transitions: transparent -> navy glass
  const navBg = useTransform(
    scrollY,
    [0, 80],
    ["rgba(15,23,42,0)", "rgba(15,23,42,0.97)"]
  );
  const navBlur = useTransform(scrollY, [0, 80], ["blur(0px)", "blur(12px)"]);
  const navBorderOpacity = useTransform(scrollY, [0, 80], [0.15, 0.08]);
  const navShadow = useTransform(
    scrollY,
    [0, 80],
    ["0 0 0 rgba(0,0,0,0)", "0 2px 24px rgba(0,0,0,0.35)"]
  );

  return (
    <div>
      {/* STICKY HEADER */}
      <motion.header
        ref={headerRef}
        style={{
          backgroundColor: navBg,
          backdropFilter: navBlur,
          WebkitBackdropFilter: navBlur,
          boxShadow: navShadow,
          position: "sticky",
          top: 0,
          zIndex: 50,
        }}
      >
        {/* COLLAPSING TOP BAR */}
        <motion.div
          style={{
            height: topBarHeight,
            opacity: topBarOpacity,
            overflow: "hidden",
          }}
        >
          <TopBar />
        </motion.div>

        {/* MAIN NAV */}
        <motion.div
          style={{
            borderBottomWidth: "1px",
            borderBottomStyle: "solid",
            borderBottomColor: `rgba(255,255,255,${navBorderOpacity.get()})`,
          }}
        >
          <NavBar />
        </motion.div>
      </motion.header>

      <FloatingContact />

      <main>
        <PageTransition>
          <Outlet />
        </PageTransition>
      </main>

      <Footer />
    </div>
  );
}
