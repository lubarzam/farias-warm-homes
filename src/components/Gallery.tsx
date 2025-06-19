
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1521322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      title: 'Instalación de Estufa a Leña en Living',
      description: 'Casa en Vilcún - Estufa marca Amesti',
      category: 'Estufa a Leña'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      title: 'Sistema de Cañón a Pellets',
      description: 'Instalación completa con ductos - Temuco',
      category: 'Cañón a Pellets'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      title: 'Estufa Doble Combustión',
      description: 'Instalación en casa rural - Lautaro',
      category: 'Estufa a Leña'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      title: 'Mantención Chimenea Industrial',
      description: 'Limpieza profesional - Empresa local',
      category: 'Mantención'
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      title: 'Reparación Cañón Pellets',
      description: 'Cambio de motor ventilador - Angol',
      category: 'Reparación'
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      title: 'Instalación Múltiple',
      description: 'Sistema de calefacción central - Padre Las Casas',
      category: 'Instalación'
    }
  ];

  const categories = ['Todos', 'Estufa a Leña', 'Cañón a Pellets', 'Mantención', 'Reparación', 'Instalación'];
  const [activeCategory, setActiveCategory] = useState('Todos');

  const filteredProjects = activeCategory === 'Todos' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="galeria" className="py-20 bg-white">
      <div className="container-width section-padding">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-warm-900 mb-6">
            Galería de Trabajos
          </h2>
          <p className="text-xl text-warm-700 max-w-3xl mx-auto">
            Conoce algunos de nuestros trabajos realizados. Cada instalación es única 
            y se adapta a las necesidades específicas de nuestros clientes.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-fire text-white shadow-lg'
                  : 'bg-warm-100 text-warm-700 hover:bg-fire/10 hover:text-fire'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card 
              key={project.id}
              className="group cursor-pointer overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover-lift"
              onClick={() => setSelectedImage(project.id)}
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="inline-block px-3 py-1 bg-fire rounded-full text-sm font-medium mb-2">
                      {project.category}
                    </span>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-warm-900 mb-2 group-hover:text-fire transition-colors">
                  {project.title}
                </h3>
                <p className="text-warm-700">
                  {project.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Modal for Selected Image */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl max-h-full">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-fire text-2xl"
              >
                ✕
              </button>
              {(() => {
                const project = projects.find(p => p.id === selectedImage);
                return project ? (
                  <div className="bg-white rounded-lg overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-auto"
                    />
                    <div className="p-6">
                      <span className="inline-block px-3 py-1 bg-fire text-white rounded-full text-sm font-medium mb-2">
                        {project.category}
                      </span>
                      <h3 className="text-2xl font-bold text-warm-900 mb-2">
                        {project.title}
                      </h3>
                      <p className="text-warm-700">
                        {project.description}
                      </p>
                    </div>
                  </div>
                ) : null;
              })()}
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-fire rounded-2xl p-8 text-white max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              ¿Te gustaría ver tu proyecto aquí?
            </h3>
            <p className="mb-6 text-fire-100">
              Contáctanos para comenzar tu proyecto de instalación. 
              Realizamos trabajos en toda la Región de La Araucanía.
            </p>
            <a 
              href="https://wa.me/56912345678?text=Hola%2C%20quiero%20ver%20opciones%20para%20mi%20proyecto"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-white text-fire hover:bg-gray-100 font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover-lift"
            >
              🚀 Iniciar mi Proyecto
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
