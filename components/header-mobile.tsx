"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, AnimatePresence } from "framer-motion";
import "./styles/header-mobile.sass";

const nav = [
  { name: "Home", target: "home" },
  { name: "About Me", target: "about" },
  { name: "Portfolio", target: "portfolio" },
  { name: "Skills", target: "skills" },
  { name: "Services", target: "services" },
  { name: "Experience", target: "experience" },
  { name: "Contact", target: "contact" },
];

const HeaderMobile: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const { scrollYProgress } = useScroll();

  const scrollToSection = (id: string, index: number) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setActiveIndex(index);
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    const sections = nav.map((item) => document.getElementById(item.target));
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = nav.findIndex((n) => n.target === entry.target.id);
            if (index !== -1) {
              setActiveIndex(index);
            }
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    sections.forEach((sec) => sec && observer.observe(sec));

    return () => {
      sections.forEach((sec) => sec && observer.unobserve(sec));
    };
  }, []);

  return (
    <header className={`header-mobile ${menuOpen ? "menu-open" : ""}`}>
      <div className="header-tittle">
        <img src="/logo.png" alt="Logo" className="logo-icon" draggable="false" />
        <span className="span-tittle">LS SERVICES</span>
      </div>

      <button
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Menu"
      >
        <span />
        <span />
        <span />
      </button>

      <div
        className={`menu-overlay ${menuOpen ? "open" : "close"}`}
        onClick={() => setMenuOpen(false)}
      >
        <nav className="menu-content" onClick={(e) => e.stopPropagation()}>
          <AnimatePresence>
            {menuOpen &&
              nav.map((item, i) => (
                <motion.button
                  key={item.target}
                  className={`menu-link ${activeIndex === i ? "active" : ""}`}
                  onClick={() => scrollToSection(item.target, i)}
                  initial={{ opacity: 0, y: -14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -14 }}
                  transition={{ delay: i * 0.06, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                >
                  {item.name}
                </motion.button>
              ))}
          </AnimatePresence>
        </nav>
      </div>

      <motion.span className="scroll-progress" style={{ scaleX: scrollYProgress }} />
    </header>
  );
};

export default HeaderMobile;
