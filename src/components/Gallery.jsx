
import React, { useState } from 'react';
import './Gallery.css';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeCategory, setActiveCategory] = useState('Todos');

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

  const filteredProjects = activeCategory === 'Todos' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const handleImageClick = (projectId) => {
    setSelectedImage(projectId);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section id="galeria" className="gallery-section">
      <div className="gallery-container">
        <div className="gallery-header">
          <h2 className="gallery-title">Galería de Trabajos</h2>
          <p className="gallery-subtitle">
            Conoce algunos de nuestros trabajos realizados. Cada instalación es única 
            y se adapta a las necesidades específicas de nuestros clientes.
          </p>
        </div>

        <div className="category-filter">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`filter-button ${activeCategory === category ? 'active' : ''}`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id}
              className="project-card"
              onClick={() => handleImageClick(project.id)}
            >
              <div className="project-image-container">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
                <div className="project-overlay">
                  <div className="overlay-content">
                    <span className="project-category-badge">
                      {project.category}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        {selectedImage && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content">
              <button className="modal-close" onClick={closeModal}>✕</button>
              {(() => {
                const project = projects.find(p => p.id === selectedImage);
                return project ? (
                  <div className="modal-project">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="modal-image"
                    />
                    <div className="modal-info">
                      <span className="modal-category-badge">
                        {project.category}
                      </span>
                      <h3 className="modal-title">{project.title}</h3>
                      <p className="modal-description">{project.description}</p>
                    </div>
                  </div>
                ) : null;
              })()}
            </div>
          </div>
        )}

        <div className="gallery-cta">
          <div className="gallery-cta-card">
            <h3 className="gallery-cta-title">¿Te gustaría ver tu proyecto aquí?</h3>
            <p className="gallery-cta-description">
              Contáctanos para comenzar tu proyecto de instalación. 
              Realizamos trabajos en toda la Región de La Araucanía.
            </p>
            <a 
              href="https://wa.me/56912345678?text=Hola%2C%20quiero%20ver%20opciones%20para%20mi%20proyecto"
              target="_blank"
              rel="noopener noreferrer"
              className="gallery-cta-button"
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
