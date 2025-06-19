
import React from 'react';

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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-warm-900 text-white">
      {/* Main Footer */}
      <div className="container-width section-padding py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-fire rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">SF</span>
              </div>
              <div>
                <h3 className="font-bold text-xl">Soluciones Farías</h3>
                <p className="text-warm-300 text-sm">Instalación de Calefactores</p>
              </div>
            </div>
            
            <p className="text-warm-300 mb-6 max-w-md">
              Más de 40 años brindando soluciones de calefacción confiables y seguras 
              en la Región de La Araucanía. Especialistas en estufas a leña y sistemas de pellets.
            </p>

            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <span>📱</span>
                <a 
                  href="https://wa.me/56912345678"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-warm-300 hover:text-fire transition-colors"
                >
                  +56 9 1234 5678
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <span>📧</span>
                <a 
                  href="mailto:contacto@solucionesfarias.cl"
                  className="text-warm-300 hover:text-fire transition-colors"
                >
                  contacto@solucionesfarias.cl
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <span>📍</span>
                <span className="text-warm-300">Vilcún, Región de La Araucanía</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-4">Servicios</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-warm-300 hover:text-white transition-colors cursor-default text-sm">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas */}
          <div>
            <h4 className="font-bold text-lg mb-4">Áreas de Servicio</h4>
            <ul className="space-y-2">
              {areas.map((area, index) => (
                <li key={index}>
                  <span className="text-warm-300 hover:text-white transition-colors cursor-default text-sm">
                    {area}
                  </span>
                </li>
              ))}
              <li>
                <span className="text-warm-400 text-sm">+ más comunas</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter/CTA Section */}
        <div className="border-t border-warm-700 pt-8 mt-12">
          <div className="bg-fire/10 rounded-xl p-6 text-center">
            <h3 className="text-xl font-bold mb-2">¿Listo para tu proyecto?</h3>
            <p className="text-warm-300 mb-4">
              Contáctanos hoy para una evaluación gratuita de tu instalación
            </p>
            <a 
              href="https://wa.me/56912345678?text=Hola%2C%20quiero%20una%20evaluaci%C3%B3n%20gratuita"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-fire hover:bg-fire-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover-lift"
            >
              🔥 Evaluación Gratuita
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-warm-700">
        <div className="container-width section-padding py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-warm-400 text-sm">
              © {currentYear} Soluciones Farías. Todos los derechos reservados.
            </div>
            
            <div className="flex items-center space-x-6">
              <button
                onClick={() => scrollToSection('inicio')}
                className="text-warm-400 hover:text-white transition-colors text-sm"
              >
                Inicio
              </button>
              <button
                onClick={() => scrollToSection('servicios')}
                className="text-warm-400 hover:text-white transition-colors text-sm"
              >
                Servicios
              </button>
              <button
                onClick={() => scrollToSection('contacto')}
                className="text-warm-400 hover:text-white transition-colors text-sm"
              >
                Contacto
              </button>
            </div>
            
            <div className="text-warm-400 text-sm">
              Hecho con ❤️ en La Araucanía
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
