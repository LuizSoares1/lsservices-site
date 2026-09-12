"use client";

import React from "react";
import "./styles/footer.sass";

const Footer: React.FC = () => {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <p>© 2026 Luiz Ernandes. Todos os direitos reservados.</p>
        <div className="site-footer__links">
          <a href="#home">Home</a>
          <a href="#about">About Me</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#contact">Contato</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
