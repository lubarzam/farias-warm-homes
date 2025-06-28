
import React from 'react';
import './Hero.css';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="hero">
      <div className="hero-background"></div>
      
      <div className="container">
        <div className="hero-content">
          <div className="hero-badge">
            <span>✨ Más de 40 años de experiencia</span>
          </div>

          <h1 className="hero-title">
            <span className="hero-title-line">Soluciones</span>
            <span className="hero-title-line hero-title-accent">Farías</span>
          </h1>

          <p className="hero-subtitle">
            Instalación, mantención y reparación de 
            <span className="hero-subtitle-accent"> estufas y cañones</span> a leña y pellets multimarcas
          </p>

          <p className="hero-description">
            Servicio profesional en la Región de La Araucanía. 
            Desde Vilcún hacia comunas cercanas, brindamos soluciones confiables para tu hogar.
          </p>

          <div className="hero-buttons">
            <button 
              onClick={scrollToContact}
              className="btn btn-primary btn-lg"
            >
              🔥 Solicita tu instalación hoy
            </button>
            
            <a 
              href="https://wa.me/56912345678?text=Hola%2C%20me%20interesa%20una%20instalaci%C3%B3n%20de%20calefactor"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-lg"
            >
              📱 WhatsApp Directo
            </a>
          </div>

          <div className="hero-stats">
            <div className="stat">
              <div className="stat-number">40+</div>
              <div className="stat-label">Años de experiencia</div>
            </div>
            <div className="stat">
              <div className="stat-number">500+</div>
              <div className="stat-label">Instalaciones</div>
            </div>
            <div className="stat">
              <div className="stat-number">100%</div>
              <div className="stat-label">Satisfacción</div>
            </div>
            <div className="stat">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Soporte</div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-scroll-indicator">
        <div className="scroll-mouse">
          <div className="scroll-wheel"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
