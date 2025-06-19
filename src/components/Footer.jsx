
import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    'Instalación de estufas a leña',
    'Cañones a pellets',
    'Mantención y limpieza',
    'Reparaciones',
    'Asesoría técnica'
  ];

  const areas = [
    'Vilcún',
    'Temuco',
    'Padre Las Casas',
    'Lautaro',
    'Angol'
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-container">
          <div className="footer-grid">
            <div className="footer-company">
              <div className="footer-logo">
                <div className="logo-icon">SF</div>
                <div className="logo-text">
                  <h3 className="logo-title">Soluciones Farías</h3>
                  <p className="logo-subtitle">Instalación de Calefactores</p>
                </div>
              </div>
              
              <p className="company-description">
                Más de 40 años brindando soluciones de calefacción confiables y seguras 
                en la Región de La Araucanía. Especialistas en estufas a leña y sistemas de pellets.
              </p>

              <div className="contact-info">
                <div className="contact-item">
                  <span className="contact-icon">📱</span>
                  <a 
                    href="https://wa.me/56912345678"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-link"
                  >
                    +56 9 1234 5678
                  </a>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📧</span>
                  <a 
                    href="mailto:contacto@solucionesfarias.cl"
                    className="contact-link"
                  >
                    contacto@solucionesfarias.cl
                  </a>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📍</span>
                  <span className="contact-text">Vilcún, Región de La Araucanía</span>
                </div>
              </div>
            </div>

            <div className="footer-section">
              <h4 className="section-title">Servicios</h4>
              <ul className="section-list">
                {services.map((service, index) => (
                  <li key={index} className="section-item">
                    <span className="section-link">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-section">
              <h4 className="section-title">Áreas de Servicio</h4>
              <ul className="section-list">
                {areas.map((area, index) => (
                  <li key={index} className="section-item">
                    <span className="section-link">{area}</span>
                  </li>
                ))}
                <li className="section-item">
                  <span className="section-text">+ más comunas</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-cta">
            <div className="cta-content">
              <h3 className="cta-title">¿Listo para tu proyecto?</h3>
              <p className="cta-description">
                Contáctanos hoy para una evaluación gratuita de tu instalación
              </p>
              <a 
                href="https://wa.me/56912345678?text=Hola%2C%20quiero%20una%20evaluaci%C3%B3n%20gratuita"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button"
              >
                🔥 Evaluación Gratuita
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-container">
          <div className="bottom-content">
            <div className="copyright">
              © {currentYear} Soluciones Farías. Todos los derechos reservados.
            </div>
            
            <div className="footer-nav">
              <button
                onClick={() => scrollToSection('inicio')}
                className="nav-link"
              >
                Inicio
              </button>
              <button
                onClick={() => scrollToSection('servicios')}
                className="nav-link"
              >
                Servicios
              </button>
              <button
                onClick={() => scrollToSection('contacto')}
                className="nav-link"
              >
                Contacto
              </button>
            </div>
            
            <div className="footer-love">
              Hecho con ❤️ en La Araucanía
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
