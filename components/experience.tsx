"use client";

import React from "react";
import "./styles/experience.sass";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Assistente Administrativo",
    company: "Tropical Búzios Imóveis, Armação de Búzios/RJ",
    dates: "Dez 2025 – Jun 2026",
    description:
      "Atendimento bilíngue a hóspedes via WhatsApp e OTAs, gestão de calendários e fluxo financeiro no sistema Stays, e elaboração de contratos de locação.",
  },
  {
    role: "Recepcionista",
    company: "Várzea Palace Hotel, Teresópolis/RJ",
    dates: "Abr 2024 – Abr 2025",
    description:
      "Gestão de reservas via Booking, controle de caixa e atendimento presencial/remoto, com foco em resolução de conflitos sob pressão.",
  },
  {
    role: "Desenvolvedor Front-end",
    company: "Xlow, Cabo Frio/RJ",
    dates: "Fev 2023 – Fev 2024",
    description:
      "Implementação do portal enviapecas.com.br (VTEX + React.js) e manutenção evolutiva dos e-commerces Telhanorte e Tumelero em ambiente de alto tráfego.",
  },
  {
    role: "Desenvolvedor Full-Stack",
    company: "Guerra Done, Araruama/RJ",
    dates: "Ago 2021 – Fev 2023",
    description:
      "Manutenção evolutiva dos sistemas Guerra Tool e The Magic Tool (PHP/Laravel), com funcionalidades desktop em C# (.NET) e extração de métricas via MySQL.",
  },
];

const Experience: React.FC = () => {
  return (
    <div className="experience">
      <div className="experience-tittle">
        <span className="section-eyebrow" aria-hidden="true"></span>
        <h1>Experiências Profissionais</h1>
      </div>
      <div className="experience-timeline">
        {experiences.map((exp, i) => (
          <motion.div
            key={exp.role + exp.company}
            className="experience-item"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="experience-marker">
              <span className="experience-dot" />
            </div>
            <div className="experience-content">
              <span className="experience-dates">{exp.dates}</span>
              <h3>{exp.role}</h3>
              <span className="experience-company">{exp.company}</span>
              <p>{exp.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
