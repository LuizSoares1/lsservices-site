"use client";

import React from "react";
import Home from "./home";
import AboutMe from "./about";
import Portfolio from "./portfolio";
import Skills from "./skills";
import Services from "./services";
import Experience from "./experience";
import Contacts from "./contacts";
import "./styles/main-page.sass";
import HeaderDesktop from "./header-desktop";
import HeaderMobile from "./header-mobile";
import Footer from "./footer";
import { motion } from "framer-motion";

const sections = [
  { id: "home", Component: Home },
  { id: "about", Component: AboutMe },
  { id: "portfolio", Component: Portfolio },
  { id: "skills", Component: Skills },
  { id: "services", Component: Services },
  { id: "experience", Component: Experience },
  { id: "contact", Component: Contacts },
];

const MainPage: React.FC = () => {
  return (
    <>
      <HeaderDesktop />
      <HeaderMobile />
      <main className="main-class-componente">
        {sections.map(({ id, Component }) => (
          <SectionWrapper key={id} id={id}>
            <Component />
          </SectionWrapper>
        ))}
      </main>
      <Footer />
    </>
  );
};

// entrada única e discreta: fade + leve subida, disparada uma vez ao entrar na viewport.
// (a versão anterior usava clip-path para um efeito de "wipe", mas se o IntersectionObserver
// não disparar a tempo, a seção fica clipada e invisível — esse padrão é mais robusto)
const SectionWrapper: React.FC<{ children: React.ReactNode; id: string }> = ({
  children,
  id,
}) => {
  return (
    <motion.section
      id={id}
      className="section"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true, amount: 0.1 }}
    >
      {children}
    </motion.section>
  );
};

export default MainPage;
