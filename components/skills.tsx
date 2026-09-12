"use client";

import React, { useRef } from "react";
import "./styles/skills.sass";
import { motion, useMotionValue, useSpring } from "framer-motion";
import * as FaIcons from "react-icons/fa";
import * as SiIcons from "react-icons/si";
import * as TbIcons from "react-icons/tb";

const development = [
  { id: "node", name: "Node", icon: <FaIcons.FaNodeJs /> },
  { id: "react", name: "React.js", icon: <FaIcons.FaReact /> },
  { id: "nextjs", name: "Next.js", icon: <SiIcons.SiNextdotjs /> },
  { id: "scsssass", name: "SCSS/SASS", icon: <FaIcons.FaSass /> },
  { id: "csharp", name: "C# (.NET)", icon: <TbIcons.TbBrandCSharp /> },
  { id: "java", name: "Java", icon: <FaIcons.FaJava /> },
  { id: "php", name: "PHP", icon: <FaIcons.FaPhp /> },
  { id: "laravel", name: "Laravel", icon: <FaIcons.FaLaravel /> },
];

const dbInfra = [
  { id: "mysql", name: "MySQL", icon: <FaIcons.FaDatabase /> },
  { id: "apache", name: "Apache", icon: <SiIcons.SiApache /> },
  { id: "windowsserver", name: "Windows Server", icon: <FaIcons.FaServer /> },
  { id: "vultr", name: "Vultr", icon: <SiIcons.SiVultr /> },
];

const toolsSystems = [
  { id: "vtex", name: "VTEX", icon: <FaIcons.FaStore /> },
  { id: "git", name: "Git", icon: <FaIcons.FaGitAlt /> },
  { id: "github", name: "GitHub", icon: <FaIcons.FaGithub /> },
  { id: "claude", name: "Claude", icon: <SiIcons.SiClaude /> },
  { id: "gpt", name: "GPT", icon: <TbIcons.TbBrandOpenai /> },
  { id: "gemini", name: "Gemini", icon: <SiIcons.SiGooglegemini /> },
];

const operatingSystems = [
  { id: "linux", name: "Linux", icon: <FaIcons.FaLinux /> },
  { id: "windows", name: "Windows", icon: <FaIcons.FaMicrosoft /> },
  { id: "mac", name: "Mac", icon: <FaIcons.FaApple /> },
];

const office = [
  { id: "excel", name: "Excel Avançado", icon: <FaIcons.FaFileExcel /> },
  { id: "word", name: "Word", icon: <FaIcons.FaFileWord /> },
  { id: "powerpoint", name: "PowerPoint", icon: <FaIcons.FaFilePowerpoint /> },
];

type SkillItem = { id: string; name: string; icon: React.ReactNode };

const SkillCard: React.FC<{ item: SkillItem }> = ({ item }) => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const scale = useMotionValue(1);
  const springX = useSpring(rotateX, { stiffness: 200, damping: 20 });
  const springY = useSpring(rotateY, { stiffness: 200, damping: 20 });
  const springScale = useSpring(scale, { stiffness: 200, damping: 20 });

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el || !window.matchMedia("(pointer: fine)").matches) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    rotateY.set(px * 18);
    rotateX.set(py * -18);
    scale.set(1.04);
  };

  const handleLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
    scale.set(1);
  };

  return (
    <motion.div
      ref={cardRef}
      className="skills-card"
      id={item.id}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{
        rotateX: springX,
        rotateY: springY,
        scale: springScale,
        transformPerspective: 500,
      }}
    >
      {item.icon}
      <div className="skills-info">
        <h3>{item.name}</h3>
      </div>
    </motion.div>
  );
};

const SkillGroup: React.FC<{
  title: string;
  subtitle?: string;
  items: SkillItem[];
}> = ({ title, subtitle, items }) => (
  <div className="skills-groups">
    <h2>
      {title}
      {subtitle && (
        <span className="skills-groups-subtitle"> — {subtitle}</span>
      )}
    </h2>
    <div className="skills-flex-daddy">
      <div className="skills-flex">
        {items.map((e) => (
          <SkillCard item={e} key={e.id} />
        ))}
      </div>
    </div>
  </div>
);

const Skills: React.FC<{ embedded?: boolean }> = ({ embedded }) => {
  return (
    <div className={`skills ${embedded ? "skills-embedded" : ""}`}>
      <div className="skills-tittle">
        {embedded ? (
          <h2>Habilidades</h2>
        ) : (
          <>
            <span className="section-eyebrow" aria-hidden="true"></span>
            <h1>Habilidades</h1>
          </>
        )}
      </div>
      <div className="skills-container">
        <SkillGroup title="Desenvolvimento" items={development} />
        <SkillGroup title="Banco de Dados e Infra" items={dbInfra} />
        <SkillGroup title="Ferramentas" items={toolsSystems} />
        <SkillGroup
          title="Sistemas Operacionais"
          subtitle="Arch, RedHat, Ubuntu"
          items={operatingSystems}
        />
        <SkillGroup title="Pacote Office" items={office} />
      </div>
    </div>
  );
};

export default Skills;
