"use client";

import React from "react";
import "./styles/services.sass";
import { motion } from "framer-motion";
import {
  FiCode,
  FiServer,
  FiShoppingCart,
  FiTool,
  FiBarChart2,
  FiGlobe,
} from "react-icons/fi";

const services = [
  {
    icon: <FiCode />,
    title: "Web & App Development",
    description:
      "Interfaces rápidas e responsivas com React.js, Next.js e TypeScript, com foco em componentes reutilizáveis e boas práticas de acessibilidade.",
  },
  {
    icon: <FiServer />,
    title: "Full-Stack Systems",
    description:
      "APIs e sistemas completos com Node, PHP/Laravel e C# (.NET), integrados a bancos de dados robustos e arquitetura modular.",
  },
  {
    icon: <FiShoppingCart />,
    title: "E-commerce & VTEX",
    description:
      "Implementação e manutenção evolutiva de lojas virtuais de alto tráfego no ecossistema VTEX, com estabilidade e performance.",
  },
  {
    icon: <FiTool />,
    title: "Manutenção & Suporte",
    description:
      "Correção de bugs, refatoração e evolução contínua de sistemas já em produção, sem interromper a operação do negócio.",
  },
  {
    icon: <FiBarChart2 />,
    title: "Automação & Planilhas",
    description:
      "Dashboards, macros e planilhas dinâmicas em Excel Avançado para automatizar processos administrativos e financeiros.",
  },
  {
    icon: <FiGlobe />,
    title: "Suporte Bilíngue",
    description:
      "Comunicação avançada em inglês e espanhol para times e clientes internacionais, do levantamento de requisitos ao suporte.",
  },
];

const Services: React.FC = () => {
  return (
    <div className="services">
      <div className="services-tittle">
        <span className="section-eyebrow" aria-hidden="true"></span>
        <h1>Services</h1>
      </div>
      <div className="services-grid">
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            className="service-card"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -6 }}
          >
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
