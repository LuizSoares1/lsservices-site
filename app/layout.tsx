import type { Metadata } from "next";
import "./globals.sass";

export const metadata: Metadata = {
  title: "Luiz Ernandes | Full-Stack Developer",
  description:
    "Portfólio de Luiz Ernandes — Desenvolvedor Full-Stack especializado em React, Next.js, TypeScript e Node.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className="layout">{children}</body>
    </html>
  );
}
