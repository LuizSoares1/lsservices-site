"use client";

import React, { useEffect, useRef } from "react";
import "./styles/home.sass";
import Typewriter from "typewriter-effect/dist/core";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from "framer-motion";

const whatsAppLink = [
  {
    link: "https://wa.me/5521998141999?text=Olá%20Luiz!",
  },
];

const curriculo = [
  {
    link: "/Currículo Luiz 2026.pdf",
  },
];

const githubImg = [
  {
    link: "https://github.com/luizsoares1.png",
    alt: "githubProfile",
  },
];

const Home: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const heroRef = useRef<HTMLDivElement | null>(null);
  const photoRef = useRef<HTMLDivElement | null>(null);

  const h1Ref = useRef<HTMLHeadingElement>(null);
  const spanRef = useRef<HTMLSpanElement>(null);
  const h3Ref = useRef<HTMLHeadingElement>(null);

  // parallax: o "chuva de código" se move mais devagar que o scroll, dando profundidade
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const canvasY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);

  // tilt sutil na foto, seguindo o cursor — só no desktop (pointer: fine)
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springX = useSpring(rotateX, { stiffness: 150, damping: 18 });
  const springY = useSpring(rotateY, { stiffness: 150, damping: 18 });

  const handlePhotoMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = photoRef.current;
    if (!el || !window.matchMedia("(pointer: fine)").matches) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    rotateY.set(px * 14);
    rotateX.set(py * -14);
  };

  const resetPhotoTilt = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const letters = "01ABCDEFGHIJKLMNOPQRSTUVWXYZあいうえおアイウエオ";
    const fontSize = 14;
    let columns: number;
    let drops: number[];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;

      columns = Math.floor(canvas.width / fontSize);
      drops = Array(columns)
        .fill(0)
        .map(() => Math.floor(Math.random() * (canvas.height / fontSize)));
    };

    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      ctx.fillStyle = "rgba(10, 2, 16, 0.12)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#e619c0";
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = letters.charAt(Math.floor(Math.random() * letters.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 50);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", resize);
    };
  }, []);

  useEffect(() => {
    if (!h1Ref.current || !spanRef.current || !h3Ref.current) return;

    const tw1 = new Typewriter(h1Ref.current, {
      delay: 50,
      cursor: "|",
    });

    tw1
      .typeString("Olá, Eu sou o")
      .callFunction(() => {
        h1Ref.current?.querySelector(".Typewriter__cursor")?.remove();

        const tw2 = new Typewriter(spanRef.current!, {
          delay: 60,
          cursor: "|",
        });

        tw2
          .typeString("Luiz Ernandes")
          .callFunction(() => {
            spanRef.current?.querySelector(".Typewriter__cursor")?.remove();
            const tw3 = new Typewriter(h3Ref.current!, {
              delay: 40,
              cursor: "|",
            });

            tw3
              .typeString(
                "Desenvolvedor Full-Stack | Bacharelado em Análise e Desenvolvimento de Sistemas."
              )
              .start();
          })
          .start();
      })
      .start();
  }, []);

  return (
    <div className="home-hero" ref={heroRef}>
      <motion.canvas
        ref={canvasRef}
        className="matrix-canvas"
        style={{ y: canvasY }}
      ></motion.canvas>
      <div className="home-photo">
        <motion.div
          ref={photoRef}
          className="home-photo-child"
          onMouseMove={handlePhotoMove}
          onMouseLeave={resetPhotoTilt}
          style={{
            rotateX: springX,
            rotateY: springY,
            transformPerspective: 600,
          }}
        >
          {githubImg.map((e) => (
            <img
              key={e.link}
              src={e.link}
              alt={e.alt}
              className="home-photo-img"
              draggable="false"
            />
          ))}
        </motion.div>
      </div>
      <div className="home-info">
        <div className="home-title">
          <h1 ref={h1Ref} className="home-title-h1"></h1>
          <span ref={spanRef} className="home-title-h2"></span>
        </div>
        <div className="home-subtitle">
          <h3 ref={h3Ref}></h3>
        </div>

        <div className="home-link">
          <div className="home-child">
            {curriculo.map((e) => (
              <a
                key={e.link}
                className="home-child-link home-child-link--secondary"
                href={e.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Baixar Currículo
              </a>
            ))}
            {whatsAppLink.map((e) => (
              <a
                key={e.link}
                className="home-child-link home-child-link--primary"
                href={e.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Entrar em contato
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
