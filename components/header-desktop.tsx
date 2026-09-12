"use client";

import React, { useLayoutEffect, useRef, useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import "./styles/header-desktop.sass";

const nav = [
  { name: "Home", target: "home" },
  { name: "About Me", target: "about" },
  { name: "Portfolio", target: "portfolio" },
  { name: "Skills", target: "skills" },
  { name: "Services", target: "services" },
  { name: "Experience", target: "experience" },
  { name: "Contact", target: "contact" },
];

const HeaderDesktop: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const navRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [indicatorStyle, setIndicatorStyle] = useState({ width: 0, left: 0 });
  const { scrollYProgress } = useScroll();

  const scrollToSection = (id: string, index: number) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setActiveIndex(index);
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
        threshold: 0.2,
      }
    );

    sections.forEach((sec) => sec && observer.observe(sec));

    return () => {
      sections.forEach((sec) => sec && observer.unobserve(sec));
    };
  }, []);

  useLayoutEffect(() => {
    const currentIndex = hoverIndex !== null ? hoverIndex : activeIndex;
    const currentEl = navRefs.current[currentIndex];
    if (currentEl) {
      setIndicatorStyle({
        width: currentEl.offsetWidth,
        left: currentEl.offsetLeft,
      });
    }
  }, [activeIndex, hoverIndex]);

  return (
    <header className="header-container">
      <div className="header-tittle">
        <img src="/logo.png" alt="Logo" className="logo-icon" draggable="false" />
        <span className="span-tittle">LS SERVICES</span>
      </div>

      <nav className="nav-container" aria-label="Navegação principal">
        <ul className="nav-list">
          {nav.map((item, i) => (
            <li key={item.target} className="nav-child">
              <button
                ref={(el) => {
                  navRefs.current[i] = el;
                }}
                className={`nav-child-links ${activeIndex === i ? "active" : ""}`}
                onClick={() => scrollToSection(item.target, i)}
                onMouseEnter={() => setHoverIndex(i)}
                onMouseLeave={() => setHoverIndex(null)}
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>
        <span
          className="nav-indicator"
          style={{
            width: indicatorStyle.width,
            transform: `translateX(${indicatorStyle.left}px)`,
          }}
        />
      </nav>

      <motion.span className="scroll-progress" style={{ scaleX: scrollYProgress }} />
    </header>
  );
};

export default HeaderDesktop;
