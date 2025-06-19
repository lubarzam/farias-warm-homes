
import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: '🔧',
      title: 'Instalación de Estufas y Cañones',
      description: 'Instalación profesional de sistemas de calefacción a leña y pellets, cumpliendo con todas las normativas de seguridad.',
      features: [
        'Estufas a leña multimarcas',
        'Cañones a pellets',
        'Sistemas de ductos',
        'Conexiones seguras'
      ]
    },
    {
      icon: '🧹',
      title: 'Mantención y Limpieza',
      description: 'Servicio de mantención preventiva y limpieza profunda para asegurar el óptimo funcionamiento de tu calefactor.',
      features: [
        'Limpieza de chimeneas',
        'Revisión de ductos',
        'Mantención preventiva',
        'Certificados de limpieza'
      ]
    },
    {
      icon: '🛠️',
      title: 'Reparaciones',
      description: 'Diagnóstico y reparación de fallas en sistemas de calefacción, con repuestos originales y garantía.',
      features: [
        'Diagnóstico profesional',
        'Reparación de averías',
        'Repuestos originales',
        'Garantía del trabajo'
      ]
    },
    {
      icon: '🛒',
      title: 'Venta de Insumos',
      description: 'Próximamente: Kits de instalación, repuestos, accesorios y todo lo necesario para tu sistema de calefacción.',
      features: [
        'Kits de instalación',
        'Repuestos originales',
        'Accesorios de calidad',
        'Asesoría técnica'
      ],
      isComingSoon: true
    }
  ];

  return (
    <section id="servicios" className="services-section">
      <div className="services-container">
        <div className="services-header">
          <h2 className="services-title">Nuestros Servicios</h2>
          <p className="services-subtitle">
            Ofrecemos soluciones integrales para tus necesidades de calefacción, 
            con la experiencia y calidad que nos respalda desde hace más de 40 años.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`service-card ${service.isComingSoon ? 'coming-soon' : ''}`}
            >
              <div className="service-header">
                <div className="service-icon">{service.icon}</div>
                <h3 className="service-title">
                  {service.title}
                  {service.isComingSoon && (
                    <span className="coming-soon-badge">Próximamente</span>
                  )}
                </h3>
                <p className="service-description">{service.description}</p>
              </div>
              
              <div className="service-content">
                <ul className="service-features">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="service-feature">
                      <div className="feature-bullet"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                {!service.isComingSoon && (
                  <div className="service-cta">
                    <a 
                      href="https://wa.me/56912345678?text=Hola%2C%20me%20interesa%20el%20servicio%20de%20instalaci%C3%B3n"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="service-link"
                    >
                      Consultar por este servicio →
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="services-cta">
          <div className="cta-card">
            <h3 className="cta-title">¿Necesitas asesoría personalizada?</h3>
            <p className="cta-description">
              Contáctanos para una evaluación gratuita de tu proyecto. 
              Te ayudamos a elegir la mejor solución para tu hogar.
            </p>
            <a 
              href="https://wa.me/56912345678?text=Hola%2C%20necesito%20asesor%C3%ADa%20para%20mi%20proyecto"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button"
            >
              📞 Consulta Gratuita
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
