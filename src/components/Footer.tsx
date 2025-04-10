"use client";

import { useState } from "react";
import Link from "next/link";


export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(""); // Para mostrar el estado del envío

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Enviando...");

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/newsletter`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("¡Gracias por suscribirte!");
        setEmail(""); // Limpiar el campo de correo después de enviar
      } else {
        setStatus(data.message || "Hubo un error. Intenta nuevamente.");
      }
    } catch (error) {
      setStatus("Error al enviar el formulario. Intenta nuevamente.");
    }
  };

  return (
    <footer className="w-full">
      {/* Contact Section with Background Image */}
      <div
        className="w-full py-12 bg-cover bg-center relative"
        style={{
          backgroundImage: "url(/assets/images/concierto.jpg)",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8 relative z-10">
          {/* Contact Info */}
          <div className="bg-blue-400 p-8 rounded-lg">
            <h3 className="text-white text-2xl mb-4 font-anton">CONTACTA CON NOSOTROS</h3>
            <p className="text-white text-xl mb-4">+34 613 68 53 04</p>
            <a href="mailto:info@sbksocialclub.com" className="text-white">
              info@sbksocialclub.com
            </a>
          </div>

          {/* Redes Sociales */}
          <div className="bg-blue-400 p-8 rounded-lg">
            <h3 className="text-white text-2xl mb-4 font-anton">REDES SOCIALES</h3>
            <div className="flex justify-center items-center space-x-8 mt-10">
              {/* Instagram */}
              <a href="https://www.instagram.com/sbksocial/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              {/* Facebook */}
              <a href="https://www.facebook.com/sbksocial/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
              {/* LinkedIn */}
              <a href="https://www.linkedin.com/company/sbksocial/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Newsletter Form */}
          <div className="bg-blue-400 p-8 rounded-lg">
            <h3 className="text-white text-2xl mb-4 font-anton">SUSCRÍBETE A NUESTRA NEWSLETTER</h3>
            <form onSubmit={handleSubmit} className="flex flex-col">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Escribe aquí tu email"
                className="p-3 mb-3 text-[var(--primary-dark)] rounded"
                required
              />
              <button type="submit" className="bg-white text-blue-400 py-2 px-4 rounded">
                Enviar
              </button>
            </form>
            {status && <p className="mt-4 text-white">{status}</p>}
          </div>
        </div>
      </div>
      {/* Bottom Footer */}
      <div className="bg-white py-6">
        <div className="container mx-auto px-4 flex flex-col items-center">
          {/* SBK SOCIAL */}
          <div className="mb-4">
            <Link href="/" className="text-[var(--primary-red)] text-2xl font-anton">
              SBK SOCIAL
            </Link>
          </div>
          {/* Links Section */}
          <div className="flex justify-center gap-4">
            <Link href="/aviso-legal" className="text-sm text-[var(--primary-dark)]">AVISO LEGAL</Link>
            <Link href="/politica-de-privacidad" className="text-sm text-[var(--primary-dark)]">POLÍTICA DE PRIVACIDAD</Link>
            <Link href="/politica-de-cookies" className="text-sm text-[var(--primary-dark)]">POLÍTICA DE COOKIES</Link>
            <Link href="/contacto" className="text-sm text-[var(--primary-dark)]">CONTACTO</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
