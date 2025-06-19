
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

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
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-sm shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container-width section-padding">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 lg:w-12 lg:h-12 bg-fire rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg lg:text-xl">SF</span>
            </div>
            <div>
              <h1 className="font-bold text-lg lg:text-xl text-warm-900">
                Soluciones Farías
              </h1>
              <p className="text-xs lg:text-sm text-warm-600 hidden sm:block">
                Instalación de Calefactores
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('inicio')}
              className="text-warm-700 hover:text-fire transition-colors font-medium"
            >
              Inicio
            </button>
            <button 
              onClick={() => scrollToSection('servicios')}
              className="text-warm-700 hover:text-fire transition-colors font-medium"
            >
              Servicios
            </button>
            <button 
              onClick={() => scrollToSection('galeria')}
              className="text-warm-700 hover:text-fire transition-colors font-medium"
            >
              Galería
            </button>
            <button 
              onClick={() => scrollToSection('perfil')}
              className="text-warm-700 hover:text-fire transition-colors font-medium"
            >
              Perfil
            </button>
            <button 
              onClick={() => scrollToSection('contacto')}
              className="text-warm-700 hover:text-fire transition-colors font-medium"
            >
              Contacto
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button 
              onClick={() => scrollToSection('contacto')}
              className="bg-fire hover:bg-fire-600 text-white px-6 py-2"
            >
              Solicitar Presupuesto
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`bg-warm-800 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMobileMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
              <span className={`bg-warm-800 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`bg-warm-800 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMobileMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-sm rounded-lg mt-2 shadow-lg">
              <button 
                onClick={() => scrollToSection('inicio')}
                className="block px-3 py-2 text-warm-700 hover:text-fire transition-colors font-medium w-full text-left"
              >
                Inicio
              </button>
              <button 
                onClick={() => scrollToSection('servicios')}
                className="block px-3 py-2 text-warm-700 hover:text-fire transition-colors font-medium w-full text-left"
              >
                Servicios
              </button>
              <button 
                onClick={() => scrollToSection('galeria')}
                className="block px-3 py-2 text-warm-700 hover:text-fire transition-colors font-medium w-full text-left"
              >
                Galería
              </button>
              <button 
                onClick={() => scrollToSection('perfil')}
                className="block px-3 py-2 text-warm-700 hover:text-fire transition-colors font-medium w-full text-left"
              >
                Perfil
              </button>
              <button 
                onClick={() => scrollToSection('contacto')}
                className="block px-3 py-2 text-warm-700 hover:text-fire transition-colors font-medium w-full text-left"
              >
                Contacto
              </button>
              <div className="pt-2">
                <Button 
                  onClick={() => scrollToSection('contacto')}
                  className="bg-fire hover:bg-fire-600 text-white w-full"
                >
                  Solicitar Presupuesto
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
