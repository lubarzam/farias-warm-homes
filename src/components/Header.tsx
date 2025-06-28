
import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          {/* Logo */}
          <div className="logo">
            <div className="logo-icon">SF</div>
            <div className="logo-text">
              <h1 className="logo-title">Soluciones Farías</h1>
              <p className="logo-subtitle hidden-mobile">Instalación de Calefactores</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="nav-desktop">
            <button onClick={() => scrollToSection('inicio')} className="nav-link">
              Inicio
            </button>
            <button onClick={() => scrollToSection('servicios')} className="nav-link">
              Servicios
            </button>
            <button onClick={() => scrollToSection('galeria')} className="nav-link">
              Galería
            </button>
            <button onClick={() => scrollToSection('perfil')} className="nav-link">
              Perfil
            </button>
            <button onClick={() => scrollToSection('contacto')} className="nav-link">
              Contacto
            </button>
          </nav>

          {/* CTA Button */}
          <div className="header-cta">
            <button 
              onClick={() => scrollToSection('contacto')}
              className="btn btn-primary"
            >
              Solicitar Presupuesto
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="hamburger">
              <span className={isMobileMenuOpen ? 'rotate-45' : ''}></span>
              <span className={isMobileMenuOpen ? 'opacity-0' : ''}></span>
              <span className={isMobileMenuOpen ? '-rotate-45' : ''}></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="nav-mobile">
            <button onClick={() => scrollToSection('inicio')} className="nav-mobile-link">
              Inicio
            </button>
            <button onClick={() => scrollToSection('servicios')} className="nav-mobile-link">
              Servicios
            </button>
            <button onClick={() => scrollToSection('galeria')} className="nav-mobile-link">
              Galería
            </button>
            <button onClick={() => scrollToSection('perfil')} className="nav-mobile-link">
              Perfil
            </button>
            <button onClick={() => scrollToSection('contacto')} className="nav-mobile-link">
              Contacto
            </button>
            <div className="nav-mobile-cta">
              <button 
                onClick={() => scrollToSection('contacto')}
                className="btn btn-primary"
              >
                Solicitar Presupuesto
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
