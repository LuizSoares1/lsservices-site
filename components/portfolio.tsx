"use client";

import React, { useRef } from "react";
import "./styles/portfolio.sass";
import { FiArrowUpRight } from "react-icons/fi";
import { motion, useScroll, useTransform } from "framer-motion";

const projects = [
  {
    id: "painelvenda",
    name: "Painel Administrativo/Vendas",
    link: "https://github.com/LuizSoares1/erick-camisas-admin",
  },
  {
    id: "hotel",
    name: "Hotel",
    link: "https://github.com/LuizSoares1/hotel",
  },
  {
    id: "pass-gen",
    name: "Password Generator",
    link: "https://github.com/LuizSoares1/PasswordGen",
  },
  {
    id: "login-screen",
    name: "Tela de Login",
    link: "https://github.com/LuizSoares1/Login-Screen",
  },
];

type ProjectItem = { id: string; name: string; link: string };

const ProjectCard: React.FC<{ project: ProjectItem; index: number }> = ({
  project,
  index,
}) => {
  const cardRef = useRef<HTMLAnchorElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });
  // a imagem se move um pouco mais devagar que o card, criando profundidade
  const imgY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <motion.a
      href={project.link}
      className="project-card"
      ref={cardRef}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.55, delay: (index % 2) * 0.1, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="project-preview">
        <motion.img
          src={`/${project.id}.png`}
          alt={project.name}
          style={{ y: imgY, scale: 1.12 }}
        />
        <div className="project-overlay">
          <span className="project-overlay-btn">
            Ver projeto <FiArrowUpRight />
          </span>
        </div>
      </div>
      <div className="project-info">
        <div className="project-info-text">
          <span className="project-index">{String(index + 1).padStart(2, "0")}</span>
          <span className="project-title">{project.name}</span>
        </div>
        <span className="project-link">
          <FiArrowUpRight />
        </span>
      </div>
    </motion.a>
  );
};

const Portfolio: React.FC = () => {
  return (
    <div className="portfolio">
      <div className="portfolio-tittle">
        <span className="section-eyebrow" aria-hidden="true"></span>
        <h1>Portfolio</h1>
      </div>
      <div className="portfolio-container">
        <div className="portfolio-subtittle">
          <h2>Principais projetos</h2>
        </div>
        <div className="portfolio-grid">
          {projects.map((project, i) => (
            <ProjectCard project={project} index={i} key={project.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
