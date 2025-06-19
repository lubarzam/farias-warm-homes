
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Profile = () => {
  const achievements = [
    {
      icon: '🏆',
      title: 'Más de 40 años',
      description: 'de experiencia en el rubro'
    },
    {
      icon: '🔥',
      title: '500+ instalaciones',
      description: 'exitosas realizadas'
    },
    {
      icon: '⭐',
      title: '100% satisfacción',
      description: 'de nuestros clientes'
    },
    {
      icon: '🛡️',
      title: 'Garantía total',
      description: 'en todos nuestros trabajos'
    }
  ];

  const skills = [
    'Instalación de estufas a leña',
    'Sistemas de cañones a pellets',
    'Mantención preventiva',
    'Reparaciones especializadas',
    'Certificaciones de seguridad',
    'Asesoría técnica personalizada'
  ];

  return (
    <section id="perfil" className="py-20 bg-gradient-warm">
      <div className="container-width section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Profile Image and Info */}
          <div className="animate-fade-in">
            <div className="relative">
              {/* Placeholder for professional photo */}
              <div className="w-full max-w-md mx-auto lg:mx-0 aspect-square rounded-2xl bg-gradient-to-br from-fire/20 to-warm-300 flex items-center justify-center shadow-2xl">
                <div className="text-center text-warm-800">
                  <div className="text-6xl mb-4">👨‍🔧</div>
                  <p className="text-lg font-medium">Foto de Fabián Farías</p>
                  <p className="text-sm opacity-75">(Próximamente)</p>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-fire/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-warm-400/30 rounded-full blur-xl"></div>
            </div>

            {/* Achievements */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {achievements.map((achievement, index) => (
                <Card key={index} className="border-0 shadow-md bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl mb-2">{achievement.icon}</div>
                    <div className="font-bold text-warm-900 text-sm mb-1">
                      {achievement.title}
                    </div>
                    <div className="text-warm-700 text-xs">
                      {achievement.description}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Profile Content */}
          <div className="animate-slide-up">
            <h2 className="text-4xl lg:text-5xl font-bold text-warm-900 mb-6">
              Conoce a <span className="text-fire">Fabián Farías</span>
            </h2>
            
            <div className="space-y-6 text-lg text-warm-700">
              <p>
                Con más de <strong className="text-fire">40 años de experiencia</strong> en el rubro de la calefacción, 
                Fabián Farías se ha consolidado como uno de los técnicos más confiables y reconocidos 
                de la Región de La Araucanía.
              </p>
              
              <p>
                Su pasión por brindar <strong className="text-warm-900">soluciones de calefacción eficientes y seguras</strong> 
                lo ha llevado a especializarse en múltiples marcas y tecnologías, desde las tradicionales 
                estufas a leña hasta los modernos sistemas de pellets.
              </p>
              
              <p>
                Basado en <strong className="text-fire">Vilcún</strong>, Fabián atiende a clientes en toda la región, 
                ofreciendo un servicio personalizado que se adapta a las necesidades específicas de cada hogar.
              </p>
            </div>

            {/* Skills */}
            <div className="mt-8">
              <h3 className="text-2xl font-bold text-warm-900 mb-4">Especialidades</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {skills.map((skill, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-fire rounded-full mr-3 flex-shrink-0"></div>
                    <span className="text-warm-700">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quote */}
            <div className="mt-8 p-6 bg-white/60 backdrop-blur-sm rounded-xl border-l-4 border-fire">
              <blockquote className="text-warm-800 italic text-lg">
                "Mi compromiso es brindar a cada familia el calor y la seguridad que merece en su hogar. 
                Cada instalación es única y la trato con el mismo cuidado que tendría en mi propia casa."
              </blockquote>
              <footer className="mt-3 text-fire font-semibold">
                — Fabián Farías
              </footer>
            </div>

            {/* CTA */}
            <div className="mt-8">
              <a 
                href="https://wa.me/56912345678?text=Hola%20Fabi%C3%A1n%2C%20me%20interesa%20conocer%20m%C3%A1s%20sobre%20tus%20servicios"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-fire hover:bg-fire-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover-lift"
              >
                💬 Conversar con Fabián
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
