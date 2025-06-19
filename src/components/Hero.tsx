
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80')`
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 container-width section-padding text-center text-white">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-fire/20 backdrop-blur-sm rounded-full border border-fire/30 mb-6">
            <span className="text-fire-200 text-sm font-medium">
              ✨ Más de 40 años de experiencia
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 text-shadow">
            <span className="block">Soluciones</span>
            <span className="block text-fire">Farías</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl lg:text-3xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Instalación, mantención y reparación de 
            <span className="text-fire-200 font-semibold"> estufas y cañones</span> a leña y pellets multimarcas
          </p>

          {/* Description */}
          <p className="text-lg mb-10 text-gray-300 max-w-2xl mx-auto">
            Servicio profesional en la Región de La Araucanía. 
            Desde Vilcún hacia comunas cercanas, brindamos soluciones confiables para tu hogar.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={scrollToContact}
              size="lg"
              className="bg-fire hover:bg-fire-600 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover-lift"
            >
              🔥 Solicita tu instalación hoy
            </Button>
            
            <a 
              href="https://wa.me/56912345678?text=Hola%2C%20me%20interesa%20una%20instalaci%C3%B3n%20de%20calefactor"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover-lift"
            >
              📱 WhatsApp Directo
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-16 border-t border-white/20">
            <div className="text-center">
              <div className="text-3xl font-bold text-fire mb-2">40+</div>
              <div className="text-gray-300">Años de experiencia</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-fire mb-2">500+</div>
              <div className="text-gray-300">Instalaciones</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-fire mb-2">100%</div>
              <div className="text-gray-300">Satisfacción</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-fire mb-2">24/7</div>
              <div className="text-gray-300">Soporte</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
