
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

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
    <section id="servicios" className="py-20 bg-gradient-warm">
      <div className="container-width section-padding">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-warm-900 mb-6">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-warm-700 max-w-3xl mx-auto">
            Ofrecemos soluciones integrales para tus necesidades de calefacción, 
            con la experiencia y calidad que nos respalda desde hace más de 40 años.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg hover-lift ${
                service.isComingSoon ? 'bg-gradient-to-br from-warm-50 to-warm-100 border border-fire/20' : 'bg-white'
              }`}
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              <CardHeader className="text-center pb-4">
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <CardTitle className="text-2xl font-bold text-warm-900 mb-2">
                  {service.title}
                  {service.isComingSoon && (
                    <span className="inline-block ml-2 px-3 py-1 bg-fire text-white text-sm rounded-full">
                      Próximamente
                    </span>
                  )}
                </CardTitle>
                <CardDescription className="text-warm-700 text-lg">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-warm-800">
                      <div className="w-2 h-2 bg-fire rounded-full mr-3 flex-shrink-0"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                {!service.isComingSoon && (
                  <div className="mt-6 pt-6 border-t border-warm-200">
                    <a 
                      href="https://wa.me/56912345678?text=Hola%2C%20me%20interesa%20el%20servicio%20de%20instalaci%C3%B3n"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-fire hover:text-fire-600 font-semibold transition-colors"
                    >
                      Consultar por este servicio →
                    </a>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-warm-900 mb-4">
              ¿Necesitas asesoría personalizada?
            </h3>
            <p className="text-warm-700 mb-6">
              Contáctanos para una evaluación gratuita de tu proyecto. 
              Te ayudamos a elegir la mejor solución para tu hogar.
            </p>
            <a 
              href="https://wa.me/56912345678?text=Hola%2C%20necesito%20asesor%C3%ADa%20para%20mi%20proyecto"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-fire hover:bg-fire-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover-lift"
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
