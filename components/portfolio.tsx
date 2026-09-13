"use client";

import React, { useRef } from "react";
import "./styles/portfolio.sass";
import { FiExternalLink } from "react-icons/fi";
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

const ProjectCard: React.FC<{ project: ProjectItem }> = ({ project }) => {
  const cardRef = useRef<HTMLAnchorElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });
  // a imagem se move um pouco mais devagar que o card, criando profundidade
  const imgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <a
      href={project.link}
      className="project-card"
      ref={cardRef}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="project-preview">
        <motion.img
          src={`/${project.id}.png`}
          alt={project.name}
          style={{ y: imgY, scale: 1.15 }}
        />
      </div>
      <div className="project-info">
        <div className="bar-and-link">
          <div className="divider"></div>
          <div className="link">
            <FiExternalLink />
          </div>
        </div>
        <div className="project-title">
          <span>{project.name}</span>
        </div>
      </div>
    </a>
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
          {projects.map((project) => (
            <ProjectCard project={project} key={project.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
