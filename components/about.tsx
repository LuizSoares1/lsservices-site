"use client";

import React from "react";
import "./styles/about.sass";
import { motion } from "framer-motion";

const facts = [
  { value: "3+", label: "Anos de experiência em desenvolvimento" },
  { value: "2", label: "Idiomas avançados — Inglês e Espanhol" },
  { value: "10+", label: "Tecnologias dominadas no dia a dia" },
  { value: "VTEX", label: "E-commerce de alto tráfego" },
];

const AboutMe: React.FC = () => {
  return (
    <div className="about">
      <div className="about-title">
        <span className="section-eyebrow" aria-hidden="true"></span>
        <h1>Sobre Mim</h1>
      </div>

      <p className="about-lead">
        Cada projeto que abraço é uma oportunidade de transformar complexidade
        em clareza.
      </p>

      <div className="about-facts">
        {facts.map((fact, i) => (
          <motion.div
            key={fact.label}
            className="about-fact"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="about-fact-value">{fact.value}</span>
            <span className="about-fact-label">{fact.label}</span>
          </motion.div>
        ))}
      </div>

      <div className="about-paragraph">
        <p className="about-paragraph-p">
          Gosto de pensar que o código é uma forma de expressão — uma
          linguagem que conecta ideias, resolve problemas e cria experiências
          memoráveis. Como desenvolvedor full stack, meu foco é entregar soluções
          completas, eficientes e escaláveis, sempre com atenção aos detalhes que
          fazem a diferença.
        </p>
        <p className="about-paragraph-p">
          Tenho sólida experiência em grandes projetos, atuando tanto no front
          quanto no back-end. No lado da interface, sou apaixonado por criar
          experiências digitais rápidas e fluidas, utilizando tecnologias modernas
          como React.js, Next.js, TypeScript, Redux, Styled Components, Material
          UI e Tailwind CSS. No back-end, já trabalhei com Laravel e outras stacks
          que me permitiram construir APIs robustas, integrar sistemas e garantir
          segurança e performance em cada camada da aplicação.
        </p>
        <p className="about-paragraph-p">
          Também já atuei com plataformas como VTEX, o que ampliou minha visão
          sobre e-commerce, arquitetura de microsserviços e integração com
          sistemas complexos. Sou movido pela criação de componentes reutilizáveis,
          Design Systems bem estruturados, animações suaves e pela constante
          evolução da acessibilidade e usabilidade.
        </p>
        <p className="about-paragraph-p">
          Mais do que escrever código, meu objetivo é criar soluções que funcionam
          de verdade — que resolvem, encantam e escalam. Porque no fim das contas,
          tecnologia só faz sentido quando transforma. E é essa transformação que
          me motiva todos os dias.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
