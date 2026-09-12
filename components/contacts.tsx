"use client";

import React, { useState } from "react";
import { FaInstagram, FaFacebook, FaLinkedin, FaTelegram, FaWhatsapp, FaGithub } from "react-icons/fa";
import "./styles/contacts.sass";

const socialMedia = [
  {
    id: "instagram",
    link: "https://www.instagram.com/luizzsoaress123",
    icon: <FaInstagram />
  },
  {
    id: "facebook",
    link: "https://www.facebook.com/luizernandessoares/",
    icon: <FaFacebook />
  },
  {
    id: "linkedin",
    link: "https://www.linkedin.com/in/luiz-ernandes-soares/",
    icon: <FaLinkedin />
  },
  {
    id: "telegram",
    link: "https://t.me/+5521998141999",
    icon: <FaTelegram />
  },
  {
    id: "whats-app",
    link: "https://wa.me/5521998141999",
    icon: <FaWhatsapp />
  },
  {
    id: "github",
    link: "https://github.com/LuizSoares1",
    icon: <FaGithub />
  },

]

const Contacts: React.FC = () => {
  const [result, setResult] = useState("")

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setResult("Enviando...")

    const formData = new FormData(e.currentTarget)

    formData.append("access_key", "f54b1bf5-5198-400d-ae7f-f9a8791b3a36");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    })

    const data = await response.json()

    if (data.success) {
      setResult("Mensagem enviada com sucesso")
      e.currentTarget.reset()
    } else {
      console.log("Erro ao enviar mensagem", data)
      setResult(data.message)
    }
  }

  return (
    <div className="contacts-child">
      <div className="contacts-tittle">
        <span className="section-eyebrow" aria-hidden="true"></span>
        <h1>Contact</h1>
      </div>
      <div className="contacts-container">
        <div className="contacts-container-child">
          <div className="contacts-left">
            <h1>VOCÊ TEM UM PROJETO EM MENTE?</h1>
            <div className="social-media">
              <h3>ME CHAME NAS REDES SOCIAIS</h3>
              <div className="icons">
                {socialMedia.map((e) => (
                  <a key={e.id} id={e.id} href={e.link} target="_blank" rel="noopener noreferrer">{e.icon} </a>
                ))}
              </div>
            </div>
          </div>
          <div className="contacts-right">
            <div className="title-right">
              <h1>MANDE SUA MENSAGEM</h1>
            </div>
            <form onSubmit={onSubmit} className="contact-form">
              <label>Nome</label>
              <input type="text" name="name" required />
              <label>Email</label>
              <input type="email" name="email" required />
              <label>Mensagem</label>
              <textarea name="message" required />
              <button type="submit" className="send-btn">Enviar</button>
            </form>
            <div className="spanResult">
              <span className="spanResultspan">{result}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contacts
